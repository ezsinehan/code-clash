import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

interface APIProps {
  language: string;
  sourceCode: string;
}

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001",
});

// https://emkc.org/api/v2/piston
export const executecode = async ({ language, sourceCode }: APIProps) => {
  console.log("Sending to backend:", { language, sourceCode });
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
