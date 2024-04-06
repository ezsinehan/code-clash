import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

interface APIProps {
  language: string;
  sourceCode: string;
}

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executecode = async ({ language, sourceCode }: APIProps) => {
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
