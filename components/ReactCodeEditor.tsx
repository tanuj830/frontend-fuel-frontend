"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import LZString from 'lz-string';
import React, { useEffect } from "react";
import { FolderClosed, PanelTop, SquareChevronRight, X } from "lucide-react";
import { useTheme } from "next-themes";
import CustomFileExplorer from "./CustomFileExplorer";
import SandpackEditor from "./SandpackEditor";

export default function ReactIDE({question}:any) {
  const [dependencies] = React.useState({
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  });

  if (typeof window === "undefined") return null;

  const { theme }: any = useTheme();

  const [showFileExplorer, setShowFileExplorer] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("preview");
  const [mode, setMode] = React.useState<string>(theme);
  const [activeFile, setActiveFile] = React.useState<string>("/src/App.js");


  const starterCode = JSON.parse(question.starter_code);

  const [indexHtml, setIndexHtml] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/public/index.html"].code || starterCode.indexHtml
    }
    return starterCode.indexHtml;
  });

  const [index, setIndex] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/src/index.js"].code || starterCode.indexJs;
    }
    return starterCode.indexJs;
  });

  const [app, setApp] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/src/App.js"].code || starterCode.appJs;
    }
    return starterCode.appJs;
  });

  const [style, setStyle] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/src/style.css"].code || starterCode.styleCss;
    }
    return starterCode.styleCss;
  });

  const [packageJson, setPackageJson] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/package.json"].code || starterCode.packageJson;
    }
    return starterCode.packageJson;
  });
 
  const [useTailwindCDN, setUseTailwindCDN] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/useTailwindCDN.js"]?.code || starterCode.useTailwindCDNJs;
    }
    return starterCode.useTailwindCDNJs;
  });

  useEffect(() => setMode(theme), [theme]);
  const files = {
    'public/index.html': {
      content: indexHtml,
    },
    'src/index.js': {
      content: index,
    },
    'src/App.js': {
      content: app,
    },
    'src/style.css': {
      content: style,
    },
    'package.json': {
      content: packageJson,
    },
    'useTailwindCDN.js': {
      content: useTailwindCDN,
    },
  };

function getParameters(files:any) {
  return LZString.compressToBase64(JSON.stringify({ files }))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

  const parameters = getParameters(files);
  
  return (
    <SandpackProvider
      theme={theme === "light" ? "light" : "dark"}
      customSetup={{
        entry: "/src/index.js",
        dependencies,
      }}
      files={{
        "/public/index.html": { code: indexHtml },
        "/src/index.js": { code: index },
        "/src/App.js": { code: app, active: true },
        "/src/style.css": { code: style },
        "/package.json": { code: packageJson },
        "/useTailwindCDN.js": { code: useTailwindCDN },
      }}
    >
      <SandpackLayout style={{ backgroundColor: "transparent", border: "none" }}>
        
        {/* Mobile View */}
        <div className="lg:hidden inline-block px-4">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="h-[83vh] flex flex-col flex-grow overflow-y-scroll">
            <SandpackEditor file={activeFile} />
          </div>

          <div className="h-[83vh] flex flex-col w-full border bg-popover rounded-t-xl">
            <div className="bg-popover px-4 pt-5 pb-1 pr-6 font-semibold flex items-center gap-6">
              <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-black dark:text-white" : "text-muted-foreground"}`}
              >
                <PanelTop width={13} height={13} />
                <span>Preview</span>
              </button>
              <button
                onClick={() => setActiveTab("console")}
                className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-black dark:text-white" : "text-muted-foreground"}`}
              >
                <SquareChevronRight width={13} height={13} />
                <span>Console</span>
              </button>
            </div>

            <div className="flex-grow">
              {activeTab === "preview" ? (
                <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} />
              ) : (
                <SandpackConsole
                  standalone
                  className="h-full text-xs font-mono w-[92vw] border"
                  showHeader={true}
                  showResetConsoleButton
                  showSetupProgress={true}
                  showSyntaxError
                  showRestartButton={true}
                />
              )}
            </div>
          </div>
        </div>
        </div>

        {/* PC View */}
        <div className="hidden lg:inline-block w-full "> 

          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={65} className="w-full h-full rounded-2xl mr-1  overflow-hidden border">
              <div className="h-[83vh] flex flex-col">
                <div className="flex items-center pl-6 py-3 bg-popover gap-2">
                  {showFileExplorer ? (
                    <span className={`cursor-pointer flex items-center gap-1 text-xs text-popover-foreground`}>
                      <FolderClosed width={13} height={13} />
                      <span>File explorer</span>
                    </span>
                  ) : (
                    <span
                      className="cursor-pointer flex items-center gap-1 text-xs text-muted-foreground"
                      onClick={() => setShowFileExplorer(true)}
                    >
                      <FolderClosed width={13} height={13} />
                      <span>File explorer</span>
                    </span>
                  )}
                  {showFileExplorer && (
                    <button
                      className="cursor-pointer text-muted-foreground"
                      onClick={() => setShowFileExplorer(false)}
                    >
                      <X className="hover:bg-muted-foreground/50 text-muted-foreground/50 hover:text-inherit rounded-sm scale-125" width={10} height={10} />
                    </button>
                  )}
                </div>

                <div className="flex-grow flex h-full ">
                  <div className="flex-grow w-full h-full ">
                    {showFileExplorer ? (
                      <CustomFileExplorer setFile={setActiveFile} setShowFileExplorer={setShowFileExplorer} />
                    ) : (
                      <SandpackEditor file={activeFile} />
                    )}
                  </div>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle className="hover:bg-primary" />

            <ResizablePanel defaultSize={35} className="w-full h-full rounded-2xl ml-1 bg-muted/50 border">
              <div className="h-[83vh] flex flex-col">
                <div className="bg-popover px-4 pt-5 pb-1 pr-6 font-semibold flex items-center gap-6">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-popover-foreground" : "text-muted-foreground"}`}
                  >
                    <PanelTop width={13} height={13} />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("console")}
                    className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-popover-foreground" : "text-muted-foreground"}`}
                  >
                    <SquareChevronRight width={13} height={13} />
                    <span>Console</span>
                  </button>
                </div>

                <div className="flex-grow">
                  {activeTab === "preview" ? (
                    <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} />
                  ) : (
                    <SandpackConsole
                      standalone
                      className="h-full text-xs font-mono border "
                      showHeader={true}
                      showResetConsoleButton
                      showSetupProgress={true}
                      showSyntaxError
                      showRestartButton={true}
                    />
                  )}
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        
      </SandpackLayout>
    </SandpackProvider>
  );
}












// "use client";

// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackPreview,
//   SandpackConsole,
// } from "@codesandbox/sandpack-react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "./ui/resizable";
// import LZString from 'lz-string';
// import React, { useEffect } from "react";
// import { FolderClosed, PanelTop, SquareChevronRight, X } from "lucide-react";
// import { useTheme } from "next-themes";
// import CustomFileExplorer from "./CustomFileExplorer";
// import SandpackEditor from "./SandpackEditor";

// export default function ReactIDE({question}:any) {
//   const [dependencies] = React.useState({
//     react: "^18.2.0",
//     "react-dom": "^18.2.0",
//   });

//   if (typeof window === "undefined") return null;

//   const { theme }: any = useTheme();

//   const [showFileExplorer, setShowFileExplorer] = React.useState(false);
//   const [activeTab, setActiveTab] = React.useState("preview");
//   const [mode, setMode] = React.useState<string>(theme);
//   const [activeFile, setActiveFile] = React.useState<string>("/src/App.js");

//   const [indexHtml, setIndexHtml] = React.useState<string>(() => {
//     const stored = localStorage.getItem("files");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return parsed["/public/index.html"].code || `<!DOCTYPE html>
// <html lang="en">
//   <head><meta charset="UTF-8" /><title>React IDE</title>
//   </head>
//   <body><div id="root"></div></body>
// </html>`;
//     }
//     return `<!DOCTYPE html>
// <html lang="en">
//   <head><meta charset="UTF-8" /><title>React IDE</title>
//   </head>
//   <body><div id="root"></div></body>
// </html>`;
//   });

//   const [index, setIndex] = React.useState<string>(() => {
//     const stored = localStorage.getItem("files");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return parsed["/src/index.js"].code || `import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import "./style.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );`;
//     }
//     return `import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import "./style.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );`;
//   });

//   const [app, setApp] = React.useState<string>(() => {
//     const stored = localStorage.getItem("files");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return parsed["/src/App.js"].code || `import React from 'react';
//       import useTailwindCDN from '../useTailwindCDN';
//       export default function App() {
//         useTailwindCDN();
//         return <h1 className="title">Hello from App.js</h1>;
// }`;
//     }
//     return `import React from 'react';
//     import useTailwindCDN from '../useTailwindCDN';
//       export default function App() {
//       useTailwindCDN();
//   return <h1 className="title">Hello from App.js</h1>;
// }`;
//   });

//   const [style, setStyle] = React.useState<string>(() => {
//     const stored = localStorage.getItem("files");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return parsed["/src/style.css"].code || `body{
//   background: black;
//   color: white;
// }`;
//     }
//     return `body{
//   background: black;
//   color: white;
// }`;
//   });

//   const [packageJson, setPackageJson] = React.useState<string>(() => {
//     const stored = localStorage.getItem("files");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return parsed["/package.json"].code || `{
//   "name": "react-ide",
//   "main": "/src/index.js",
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   }
// }`;
//     }
//     return `{
//   "name": "react-ide",
//   "main": "/src/index.js",
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   }
// }`;
//   });
 
//   const [useTailwindCDN, setUseTailwindCDN] = React.useState<string>(() => {
//     const stored = localStorage.getItem("files");
//     if (stored) {
//       const parsed = JSON.parse(stored);
//       return parsed["/useTailwindCDN.js"].code || `import { useEffect } from 'react';

// export default function useTailwindCDN() {
//   useEffect(() => {
//     if (!document.getElementById('tailwind-cdn')) {
//       const script = document.createElement('script');
//       script.id = 'tailwind-cdn';
//       script.src = 'https://cdn.tailwindcss.com';
//       script.async = true;
//       document.head.appendChild(script);
//     }
//   }, []);
// }
// `;
//     }
//     return `import { useEffect } from 'react';

// export default function useTailwindCDN() {
//   useEffect(() => {
//     if (!document.getElementById('tailwind-cdn')) {
//       const script = document.createElement('script');
//       script.id = 'tailwind-cdn';
//       script.src = 'https://cdn.tailwindcss.com';
//       script.async = true;
//       document.head.appendChild(script);
//     }
//   }, []);
// }
// `;
//   });

//   useEffect(() => setMode(theme), [theme]);
//   const files = {
//     'public/index.html': {
//       content: indexHtml,
//     },
//     'src/index.js': {
//       content: index,
//     },
//     'src/App.js': {
//       content: app,
//     },
//     'src/style.css': {
//       content: style,
//     },
//     'package.json': {
//       content: packageJson,
//     },
//     'useTailwindCDN.js': {
//       content: useTailwindCDN,
//     },
//   };

// function getParameters(files:any) {
//   return LZString.compressToBase64(JSON.stringify({ files }))
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_')
//     .replace(/=+$/, '');
// }

//   const parameters = getParameters(files);
  
//   return (
//     <SandpackProvider
//       theme={theme === "light" ? "light" : "dark"}
//       customSetup={{
//         entry: "/src/index.js",
//         dependencies,
//       }}
//       files={{
//         "/public/index.html": { code: indexHtml },
//         "/src/index.js": { code: index },
//         "/src/App.js": { code: app, active: true },
//         "/src/style.css": { code: style },
//         "/package.json": { code: packageJson },
//         "/useTailwindCDN.js": { code: useTailwindCDN },
//       }}
//     >
//       <SandpackLayout style={{ backgroundColor: "transparent", border: "none" }}>
        
//         {/* Mobile View */}
//         <div className="lg:hidden inline-block px-4">
//         <div className="flex flex-col items-center justify-center gap-4 ">
//           <div className="h-[83vh] flex flex-col flex-grow overflow-y-scroll">
//             <SandpackEditor file={activeFile} />
//           </div>

//           <div className="h-[83vh] flex flex-col w-full border bg-popover rounded-t-xl">
//             <div className="bg-popover px-4 pt-5 pb-1 pr-6 font-semibold flex items-center gap-6">
//               <button
//                 onClick={() => setActiveTab("preview")}
//                 className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-black dark:text-white" : "text-muted-foreground"}`}
//               >
//                 <PanelTop width={13} height={13} />
//                 <span>Preview</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab("console")}
//                 className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-black dark:text-white" : "text-muted-foreground"}`}
//               >
//                 <SquareChevronRight width={13} height={13} />
//                 <span>Console</span>
//               </button>
//             </div>

//             <div className="flex-grow">
//               {activeTab === "preview" ? (
//                 <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} />
//               ) : (
//                 <SandpackConsole
//                   standalone
//                   className="h-full text-xs font-mono w-[92vw] border"
//                   showHeader={true}
//                   showResetConsoleButton
//                   showSetupProgress={true}
//                   showSyntaxError
//                   showRestartButton={true}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//         </div>

//         {/* PC View */}
//         <div className="hidden lg:inline-block w-full"> 

//           <ResizablePanelGroup direction="horizontal">
//             <ResizablePanel defaultSize={65} className="w-full h-full rounded-2xl mr-1">
//               <div className="h-[83vh] flex flex-col">
//                 <div className="flex items-center pl-6 py-3 bg-popover gap-2">
//                   {showFileExplorer ? (
//                     <span className={`cursor-pointer flex items-center gap-1 text-xs text-popover-foreground`}>
//                       <FolderClosed width={13} height={13} />
//                       <span>File explorer</span>
//                     </span>
//                   ) : (
//                     <span
//                       className="cursor-pointer flex items-center gap-1 text-xs text-muted-foreground"
//                       onClick={() => setShowFileExplorer(true)}
//                     >
//                       <FolderClosed width={13} height={13} />
//                       <span>File explorer</span>
//                     </span>
//                   )}
//                   {showFileExplorer && (
//                     <button
//                       className="cursor-pointer text-muted-foreground"
//                       onClick={() => setShowFileExplorer(false)}
//                     >
//                       <X className="hover:bg-muted-foreground/50 text-muted-foreground/50 hover:text-inherit rounded-sm scale-125" width={10} height={10} />
//                     </button>
//                   )}
//                 </div>

//                 <div className="flex-grow flex h-full">
//                   <div className="flex-grow w-full h-full ">
//                     {showFileExplorer ? (
//                       <CustomFileExplorer setFile={setActiveFile} setShowFileExplorer={setShowFileExplorer} />
//                     ) : (
//                       <SandpackEditor file={activeFile} />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </ResizablePanel>

//             <ResizableHandle className="hover:bg-primary" />

//             <ResizablePanel defaultSize={35} className="w-full h-full rounded-2xl ml-1 bg-muted/50">
//               <div className="h-[83vh] flex flex-col">
//                 <div className="bg-popover px-4 pt-5 pb-1 pr-6 font-semibold flex items-center gap-6">
//                   <button
//                     onClick={() => setActiveTab("preview")}
//                     className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-popover-foreground" : "text-muted-foreground"}`}
//                   >
//                     <PanelTop width={13} height={13} />
//                     <span>Preview</span>
//                   </button>
//                   <button
//                     onClick={() => setActiveTab("console")}
//                     className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-popover-foreground" : "text-muted-foreground"}`}
//                   >
//                     <SquareChevronRight width={13} height={13} />
//                     <span>Console</span>
//                   </button>
//                 </div>

//                 <div className="flex-grow">
//                   {activeTab === "preview" ? (
//                     <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} />
//                   ) : (
//                     <SandpackConsole
//                       standalone
//                       className="h-full text-xs font-mono border "
//                       showHeader={true}
//                       showResetConsoleButton
//                       showSetupProgress={true}
//                       showSyntaxError
//                       showRestartButton={true}
//                     />
//                   )}
//                 </div>
//               </div>
//             </ResizablePanel>
//           </ResizablePanelGroup>
//         </div>
        
//       </SandpackLayout>
//     </SandpackProvider>
//   );
// }