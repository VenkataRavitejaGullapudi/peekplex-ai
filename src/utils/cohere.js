import { Cohere, CohereClient } from "cohere-ai";

const cohere = new CohereClient({
    token: process.env.REACT_APP_COHERE_API_KEY,
});


export const callCohereChat = async (message, model="command")=> {
    const chat = await cohere.chat({
        model: model,
        message: message,
    });
    return chat;
}
