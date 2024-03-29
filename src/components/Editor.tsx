"use client";

import React, {useState} from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";

const Editor: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <MonacoEditor height="75vh" language="python" value={value} 
      onChange={
          (value, event) => setValue(value)
      }/>
    </div>
  );
};

export default Editor;
