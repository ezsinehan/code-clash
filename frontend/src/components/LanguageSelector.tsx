"use client";

import React, { useState } from "react";
import { LANGUAGE_VERSIONS } from "@/constants";

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const Languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  onSelect,
}) => {
  const handleLanguageChange = (event: any) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <h1>Language Selector</h1>
      <select value={language} onChange={handleLanguageChange}>
        {Languages.map(([language, version]) => (
          <option key={language} value={language}>
            {language} - {version} 
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
