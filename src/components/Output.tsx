import { executecode } from "@/api";
import React, { useState } from "react";

interface OutputProps {
  editorRef: any;
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode: string = editorRef.current.getValue();
    if (!sourceCode) return;
    setIsLoading(true);
    setIsError(false);
    try {
      const { run: result } = await executecode({ language, sourceCode });
      setOutput(result.output ? result.output.split("\n") : []);
      setIsError(!!result.stderr);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
     <h1>Output</h1>
      <button disabled={isLoading} onClick={runCode}>
        {isLoading ? "Loading..." : "Run Code"}
      </button>
      {isError && (
        <div style={{ color: isError ? "red" : "black" }}>
          Error executing code.
        </div>
      )}
      <div>
        {output.length
          ? output.map((line, index) => <div key={index}>{line}</div>)
          : "Click run code"}
      </div>{" "}
    </div>
  );
};

export default Output;
