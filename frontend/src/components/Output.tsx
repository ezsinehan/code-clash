import { executecode } from "@/api";
import { TEST_CASES } from "@/constants";
import React, { useState } from "react";

interface OutputProps {
  editorRef: any;
  language: string;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const hiddenTests = TEST_CASES[language];

  const runCode = async () => {
    if (!editorRef.current) {
      console.error("Editor is not init");
      return;
    }
    let sourceCode: string = editorRef.current.getValue();
    // sourceCode += hiddenTests || "";
    if (!sourceCode) return;
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await executecode({ language, sourceCode });
      if (response.run) {
        setOutput(response.output ? response.output.split("\n") : []);
        setIsError(!!response.stderr);
      } else {
        setIsError(true);
      }
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
