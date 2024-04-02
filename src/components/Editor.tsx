"use client";

import React, { useState, useRef } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "@/constants";

const Editor: React.FC = () => {
  const editorRef = useRef<any | null>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");

  const onMount = (editor: any | null) => {
    editorRef.current = editor;
    editor?.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div>
      <LanguageSelector language={language} onSelect={onSelect} />
      <MonacoEditor
        height="75vh"
        language={language}
        defaultValue={CODE_SNIPPETS[language]}
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
