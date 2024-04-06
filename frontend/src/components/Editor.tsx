"use client";

import React, { useState, useRef } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "@/constants";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";

const Editor: React.FC = () => {
  const editorRef = useRef<any | null>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("python");
  //set initial value to python so that select a language isnt an option (results in unnecesarry errors)
  //deleted the select a language tag as well unnecessary (above is language selector header) even though 
  //really in the long run ig we're only gonna be using python

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
      <Output editorRef={editorRef} language={language} />
    </div>
  );
};

export default Editor;
