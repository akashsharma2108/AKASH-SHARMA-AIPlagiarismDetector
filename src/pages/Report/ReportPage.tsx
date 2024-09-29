import { Container } from '../../components/layout';
import UploadSection from '../../components/Upload/UploadSection';


export default function ReportPage() {
  return (
    <Container>
      <UploadSection  snackbarShowMessage={String}/>
    </Container>
  );
}