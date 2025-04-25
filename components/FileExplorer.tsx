// components/FileExplorer.tsx
"use client";
import { useSandpack } from "@codesandbox/sandpack-react";

export default function FileExplorer() {
  const { sandpack } = useSandpack();
  const { files, activeFile, setActiveFile } = sandpack;

  return (
    <div className="p-2 text-sm space-y-1">
      <h2 className="font-bold mb-2">Files</h2>
      {Object.keys(files)
        .sort()
        .map((filePath) => (
          <button
            key={filePath}
            onClick={() => setActiveFile(filePath)}
            className={`block w-full text-left px-2 py-1 rounded ${
              activeFile === filePath
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {filePath}
          </button>
        ))}
    </div>
  );
}
