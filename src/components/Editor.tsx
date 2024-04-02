"use client";

import React, { useState, useRef } from "react";
import { Monaco, Editor as MonacoEditor } from "@monaco-editor/react";

const Editor: React.FC = () => {
  const editorRef = useRef<any | null>(null);
  const [value, setValue] = useState<string>("");

  const onMount = (editor: any | null) => {
    editorRef.current = editor;
    editor?.focus();
  };

  return (
    <div>
      <MonacoEditor
        height="75vh"
        defaultLanguage="javascript"
        defaultValue="//some comment"
        onMount={onMount}
        value={value}
        onChange={(newValue = "") => {
          setValue(newValue);
          console.log(value);
        }}
      />
    </div>
  );
};

export default Editor;
