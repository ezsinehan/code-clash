"use client";

import React, { useRef, useEffect, useState } from "react";
import * as monaco from "monaco-editor";
import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

const Editor: React.FC = () => {
  const [exeResult, setExeResult] = useState("");
  const editorRef = useRef<HTMLDivElement | null>(null); // creating ref hook for monaco component
  const currInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );
  const currCodeRef = useRef<string>("");

  useEffect(() => {
    let editorInstance: monaco.editor.IStandaloneCodeEditor | null = null;

    if (editorRef.current) {
      editorInstance = monaco.editor.create(editorRef.current, {
        value: `function hello() {
          alert('Hello world!');
        }`,
        language: "python",
        automaticLayout: true,
      });
    }

    currInstanceRef.current = editorInstance;

    return () => {
      editorInstance?.dispose();
      currInstanceRef.current = null;
    };
  }, []);

  const executeCode = async (sourceCode: string) => {
    if (currInstanceRef.current) {
      const currCode = currInstanceRef.current.getValue();
      currCodeRef.current = currCode;
      console.log(currCodeRef.current);
    }

    const response = await API.post("/execute", {
      language: "python",
      version: "3.10.0",
      files: [
        {
          content: sourceCode,
        },
      ],
    });

    setExeResult(response.data.run.stdout);
  };

  return (
    <div>
      <div ref={editorRef} style={{ height: "90vh", width: "90vw" }} />
      <div>
        <button onClick={() => executeCode(currCodeRef.current)}>
          Run Code
        </button>
        <pre>{exeResult}</pre>
      </div>
    </div>
  );
};

export default Editor;
