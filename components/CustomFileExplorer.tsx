
import { useSandpack } from "@codesandbox/sandpack-react";
import React, { useEffect, useMemo } from "react";
import { FileText, Folder, FileCode,FileJson, Hash, FileJson2, FileType2 } from "lucide-react";


  
const organizeFiles = (files: Record<string, any>) => {
  const structure: Record<string, string[]> = {
    "/": [],
  };

  Object.keys(files).forEach((filePath) => {
    const parts = filePath.split("/");

    if (parts.length === 2) {
      structure["/"].push(filePath);
    } else if (parts.length >= 3) {
      const folder = parts[1];
      if (!structure[folder]) {
        structure[folder] = [];
      }
      structure[folder].push(filePath);
    }
  });

  return structure;
};

const CustomFileExplorer = ({setFile, setShowFileExplorer}:any) => {
    const { sandpack } = useSandpack();
    const { files, activeFile, setActiveFile } = sandpack;
    
  const fileStructure = useMemo(() => organizeFiles(files), [files]);

useEffect(()=>{setActiveFile(activeFile)},[])

const handleFile = (file:any) => {

  setFile(file); // set file is like activate file
  setShowFileExplorer(false);
    
}

  const getFileIcon = (filename: string) => {
    const ext = filename.split('.').pop();
  
    switch (ext) {
      case "js":
        return <FileJson2 size={16} />;
      case "css":
        return <Hash size={16} />;
      case "json":
        return <FileJson size={16} />;
      case "html":
        return <FileCode size={16} />;
      case "md":
        return <FileText size={16} />;
      default:
        return <FileType2 size={16} />;
    }
  };

  
  return (
    <div className=" h-full p-2 px-8 bg-popover text-popover-foreground text-sm pt-5">
      
      {/* Folders */}
      {Object.entries(fileStructure).map(([folder, files]) =>
        folder === "/" ? null : (
          <div key={folder} className="mb-1">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-1">
              <Folder size={16} />
              {folder}
            </div>
            <div className="pl-3 space-y-1">
            {files.map((filePath) => {
  const fileName = filePath.split("/").slice(2).join("/");
  return (
    <div
      key={filePath}
      onClick={()=>handleFile(filePath)}
      className={`flex items-center gap-2 cursor-pointer rounded px-2 py-1 transition-colors
        ${
          activeFile === filePath
            ? "bg-muted text-primary font-medium"
            : "hover:bg-muted dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
        }`}
    >
      {getFileIcon(fileName)}
      {fileName}
    </div>
  );
})}

            </div>
          </div>
        )
      )}
      {/* Root files */}
      {fileStructure["/"]?.length > 0 && (
        <div className="mt-1">
          <div className=" space-y-1">
            {fileStructure["/"].map((file) => (
              <div
                key={file}
                onClick={()=>handleFile(file)}
                className={`flex items-center gap-2 cursor-pointer rounded px-2 py-1 transition-colors
                  ${
                    activeFile === file
                      ? "bg-muted text-primary font-medium"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
              >
                <FileText size={16} />
                {file.replace("/", "")}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default CustomFileExplorer;
