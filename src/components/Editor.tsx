"use client";

import React from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";

const Editor: React.FC = () => {
  return (
    <div>
      <MonacoEditor height="90vh" language="python" value="//somecomment" />
    </div>
  );
};

export default Editor;
