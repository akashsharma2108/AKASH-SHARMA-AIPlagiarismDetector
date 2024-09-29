export function extractJSONFromMessage(messageObject:any) {
    const messageContent = messageObject.content[0].text.value;
    
    // Regular expression to find the JSON block
    const jsonMatch = messageContent.match(/```json([\s\S]*?)```/);

    if (jsonMatch && jsonMatch[1]) {
        try {
            // Parse the matched JSON part
            const extractedJSON = JSON.parse(jsonMatch[1].trim());
            return extractedJSON;
        } catch (error) {
            console.error("Failed to parse JSON:", error);
            return null;
        }
    } else {
        console.log("No JSON block found in the message.");
        return null;
    }
}

