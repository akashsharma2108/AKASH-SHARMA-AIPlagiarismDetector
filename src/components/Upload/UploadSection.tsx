import { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { CloudUpload } from "@mui/icons-material";
import { GlowingText, FloatingCard, theme } from "../config/theme";
import OpenAI from "openai";
import axios from "axios";
import {extractJSONFromMessage} from './getreport'
import withSnackbar, { Props as SnackbarProps } from "../snackbar/Snackbar";


const UploadArea = styled("div")(({ theme }) => ({
    border: "2px dashed rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
    padding: theme.spacing(4),
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
  }));

const HiddenInput = styled("input")({
  display: "none",
});

const UploadSection: React.FC<SnackbarProps> = ({
    snackbarShowMessage,
  }: SnackbarProps) =>  {
  const [file, setFile] = useState(null as any);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null as any);


  const apiiKey  = import.meta.env.VITE_API_KEY;



  const openai = new OpenAI({ apiKey: apiiKey, dangerouslyAllowBrowser: true });

    const getfile = async () => {
    const fileData = new FormData();
    fileData.append('file', file);
    fileData.append('purpose', 'assistants'); 

    const fileResponse = await axios.post(
      'https://api.openai.com/v1/files', 
      fileData,
      {
        headers: {
          'Authorization': `Bearer ${apiiKey}`, 
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    setUploading(false);
    return fileResponse;
    }

    const getOpenAPIResponse = async () => {
        try {
          const thread = await openai.beta.threads.create();
          const file = await getfile();

          if (!file || !file.data || !file.data.id) {
            throw new Error("File upload failed.");
          }
          setAnalyzing(true);
          const vectorStore = import.meta.env.VITE_VECTOR_KEY;
         await openai.beta.vectorStores.files.createAndPoll(
            vectorStore,
            { file_id: file.data.id }
          );
          let existingFileIds = [] as any;
          const mainid = import.meta.env.VITE_AA_KEY;
          await openai.beta.assistants.update(mainid, {
            file_ids: [...existingFileIds, file.data.id],
          } as any);
          const userQuestion = `Detect plagiarism in this report and make a JSON like this:
          {
            plagiarismPercentage: 15,
            flaggedSections: [
              {
                start: 10,
                end: 20,
                text: "This is a flagged section of the document."
              },
            ]
          }`;
           await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: userQuestion,
          });
          const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: mainid,
          });
          let runStatus;
          do {
            runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
            console.log(`Run status: ${runStatus.status}`);
            
            if (["failed", "cancelled", "expired"].includes(runStatus.status)) {
              throw new Error("Run failed or was cancelled.");
            }
      
            await new Promise(resolve => setTimeout(resolve, 2000)); 
          } while (runStatus.status === "in_progress");
          const messages = await openai.beta.threads.messages.list(thread.id);
          const lastAssistantMessage = messages.data
            .filter((msg) => msg.role === "assistant")
            .pop();
          if (lastAssistantMessage) {
             const data = extractJSONFromMessage(lastAssistantMessage);
             setAnalyzing(false);
             setResult(data);
          } else {
            snackbarShowMessage("No response received from the assistant." , "error");
          }
          
        } catch (error : any) {
            setAnalyzing(false);
            snackbarShowMessage(error.message, "error");
        }
      };
      

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    getOpenAPIResponse();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <GlowingText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h1" gutterBottom align="center">
          Document Upload & Analysis
        </Typography>
      </GlowingText>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <FloatingCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <CardContent>
              {!result && (
                <>
                  <Typography variant="h3" gutterBottom align="center">
                    Upload Your Document
                  </Typography>
                  <UploadArea>
                    <HiddenInput
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<CloudUpload />}
                        sx={{ mb: 2 }}
                      >
                        Select File
                      </Button>
                    </label>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Supported formats: PDF, DOC, DOCX
                    </Typography>
                  </UploadArea>
                  {file && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1" align="center">
                        Selected file: {file.name as any}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleUpload}
                        disabled={uploading || analyzing}
                      >
                        {uploading
                          ? "Uploading..."
                          : analyzing
                          ? "Analyzing..."
                          : "Start Analysis"}
                      </Button>
                    </Box>
                  )}
                  {(uploading || analyzing) && (
                    <Box sx={{ width: "100%", mt: 2 }}>
                      <LinearProgress />
                    </Box>
                  )}
                </>
              )}
              {result && (
                <>
                  <Typography variant="h3" gutterBottom align="center">
                    Plagiarism Report
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 4,
                    }}
                  >
                    <CircularProgress
                      variant="determinate"
                      value={100 - result.plagiarismPercentage}
                      size={120}
                      thickness={5}
                      sx={{ color: theme.palette.secondary.main }}
                    />
                    <Typography variant="h2" sx={{ position: "absolute" }}>
                      {100 - result.plagiarismPercentage}%
                    </Typography>
                  </Box>
                  <Typography variant="h5" gutterBottom align="center">
                    Original Content
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Flagged sections:
                  </Typography>
                  {result.flaggedSections.map((section: any, index: any) => (
                    <Card
                      key={index}
                      sx={{ mb: 2, backgroundColor: "rgba(255, 0, 0, 0.1)" }}
                    >
                      <CardContent>
                        <Typography variant="body2">{section.text}</Typography>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => {
                      setFile(null);
                      setResult(null);
                    }}
                  >
                    Analyze Another Document
                  </Button>
                </>
              )}
            </CardContent>
          </FloatingCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withSnackbar(UploadSection);
