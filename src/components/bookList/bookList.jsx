import React from "react";

const FileViewer = () => {
  const files = [
    { name: "1-Laboratoriya.doc", path: require("../documents/1-Laboratoriya.doc") },
    { name: "Power.pdf", path: require("../documents/Power.pdf") },
    { name: "Tema.doc", path: require("../documents/Tema.docx") }
  ];

  const openFileInWord = (filePath) => {
    window.open(filePath, "_blank");
    console.log(filePath);
  };

  return (
    <div className="text-white">
      <h1>Fayllarni ko'rish va ochish</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button className="px-3 py-2 text-black font-bold bg-white mt-1 rounded-lg" onClick={() => openFileInWord(file.path)}>Open</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileViewer;
