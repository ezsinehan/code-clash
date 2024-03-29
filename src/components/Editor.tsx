"use client";

import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";

const Editor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null); // creating ref hook for monaco component

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

    return () => {
      editorInstance?.dispose();
    };
  }, []);

  return <div ref={editorRef} style={{ height: "100vh", width: "100vw" }} />;
};

export default Editor;
