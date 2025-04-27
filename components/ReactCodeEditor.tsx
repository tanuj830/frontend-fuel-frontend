// "use client";
// import { CodeEditor, useActiveCode, useSandpack } from "@codesandbox/sandpack-react";

// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackCodeEditor,
//   SandpackPreview,
//   SandpackConsole,
// } from "@codesandbox/sandpack-react";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "./ui/resizable";
// import React, { useEffect, useRef, useState } from "react";
// import { FolderClosed, PanelTop, SquareChevronRight, X } from "lucide-react";
// import { autocompletion } from "@codemirror/autocomplete";
// import { useTheme } from "next-themes";
// import CustomFileExplorer from "./CustomFileExplorer";

// const DEFAULT_FILES = {
//   "/public/index.html": {
//     code: `<!DOCTYPE html>
// <html lang="en">
// <head><meta charset="UTF-8" /><title>React IDE</title></head>
// <body><div id="root"></div></body>
// </html>`,
//   },
//   "/src/index.js": {
//     code: `import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );`,
//     active: true,
//   },
//   "/src/App.js": {
//     code: `export default function App() {
//   return <h1 className="title">Hello from App.js</h1>;
// }`,
//   },
//   "/src/style.css": {
//     code: `.title {
//   color: red;
//   font-size: 2rem;
// }`,
//   },
//   "/package.json": {
//     code: `{
//   "name": "react-ide",
//   "main": "/src/index.js",
//   "dependencies": {
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0"
//   }
// }`,
//   },
// };




// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import { oneDark } from '@codemirror/theme-one-dark';

// import * as Babel from '@babel/standalone';

// const DEFAULT_CODE = `function App() {
//   return <h1>Hello from Live Preview!</h1>;
// }

// ReactDOM.render(<App />, document.getElementById('root'));`;

//  function Editor() {
//   const [code, setCode] = useState('');
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   useEffect(() => {
//     const savedCode = localStorage.getItem('react-ide-code');
//     setCode(savedCode || DEFAULT_CODE);
//   }, []);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       updatePreview(code);
//       localStorage.setItem('react-ide-code', code);
//     }, 500);

//     return () => clearTimeout(timeout);
//   }, [code]);

//   const updatePreview = (code: string) => {
//     const transpiledCode = Babel.transform(code, {
//       presets: ['react', 'env'],
//     }).code;

//     const html = `
//       <!DOCTYPE html>
//       <html lang="en">
//         <head><title>Preview</title></head>
//         <body>
//           <div id="root"></div>
//           <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
//           <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
//           <script>
//             try {
//               ${transpiledCode}
//             } catch (e) {
//               document.body.innerHTML = '<pre style="color:red;">' + e + '</pre>';
//             }
//           </script>
//         </body>
//       </html>
//     `;

//     const iframe = iframeRef.current;
//     if (iframe) {
//       const doc = iframe.contentDocument || iframe.contentWindow?.document;
//       if (doc) {
//         doc.open();
//         doc.write(html);
//         doc.close();
//       }
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-screen p-4 bg-black text-white">
//       <div className="h-full overflow-auto border border-gray-700 rounded-md">
//         <CodeMirror
//           value={code}
//           height="100%"
//           theme={oneDark}
//           extensions={[javascript()]}
//           onChange={(value) => setCode(value)}
//         />
//       </div>
//       <div className="h-full overflow-auto border border-gray-700 rounded-md">
//         <iframe
//           ref={iframeRef}
//           title="Live Preview"
//           sandbox="allow-scripts"
//           className="w-full h-full bg-white"
//         />
//       </div>
//     </div>
//   );
// }






// export default function ReactIDE() {
//   const { theme }: any = useTheme();

//   const [dependencies] = useState({
//     react: "^18.2.0",
//     "react-dom": "^18.2.0",
//   });

//   const [showFileExplorer, setShowFileExplorer] = useState(false);
//   const [activeTab, setActiveTab] = useState("preview");
//   const [mode, setMode] = useState<string>(theme);
//   const [files, setFiles] = useState(DEFAULT_FILES);


 


//   useEffect(() => {
//     setMode(theme);
//   }, [theme]);

//   if (typeof window === "undefined") return null;

//   return (
//     <SandpackProvider
//       theme={theme}
//       customSetup={{
//         entry: "/src/index.js",
//         dependencies,
//       }}
//       files={files}
//       options={{
//         autorun: true,
//       }}
//     >
//       <SandpackLayout style={{ backgroundColor: "transparent", border: "none" }}>
//         {/* Mobile View */}
//         <div className="lg:hidden flex flex-col items-center justify-center gap-4 px-4">
//           <div className="h-[83vh] flex flex-col flex-grow">
//            <Editor setFiles={setFiles}/>
//           </div>

//           <div className="h-[83vh] flex flex-col w-full">
//             <div className="bg-muted/50 px-4 py-2 pr-6 font-semibold flex items-center gap-6">
//               <button
//                 onClick={() => setActiveTab("preview")}
//                 className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-primary-foreground" : "text-muted-foreground"}`}
//               >
//                 <PanelTop width={13} height={13} />
//                 <span>Preview</span>
//               </button>
//               <button
//                 onClick={() => setActiveTab("console")}
//                 className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-primary-foreground" : "text-muted-foreground"}`}
//               >
//                 <SquareChevronRight width={13} height={13} />
//                 <span>Console</span>
//               </button>
//             </div>
//             <div className="flex-grow">
//               {activeTab === "preview" ? (
//                 <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} className="flex-grow" />
//               ) : (
//                 <div className="w-full">
//                   <SandpackConsole
//                     standalone
//                     className="h-full text-xs font-mono w-[92vw] border"
//                     showHeader={true}
//                     showResetConsoleButton
//                     showSetupProgress={true}
//                     showSyntaxError
//                     showRestartButton={true}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* PC View */}
//         <div className="hidden lg:inline-block w-full">
//           <ResizablePanelGroup direction="horizontal">
//             <ResizablePanel defaultSize={65} className="w-full h-full rounded-2xl mr-1">
//               <div className="h-[83vh] flex flex-col">
//                 <div className="flex items-center px-4 py-2 bg-popover gap-2">
//                   {showFileExplorer ? (
//                     <span className="cursor-pointer flex items-center gap-1 text-xs text-popover-foreground">
//                       <FolderClosed width={13} height={13} /><span>File explorer</span>
//                     </span>
//                   ) : (
//                     <span
//                       className="cursor-pointer flex items-center gap-1 text-xs text-muted-foreground"
//                       onClick={() => setShowFileExplorer(!showFileExplorer)}
//                     >
//                       <FolderClosed width={13} height={13} /><span>File explorer</span>
//                     </span>
//                   )}
//                   {showFileExplorer && (
//                     <button
//                       className="cursor-pointer text-primary-foreground"
//                       onClick={() => setShowFileExplorer(!showFileExplorer)}
//                     >
//                       <X className="hover:bg-muted-foreground/50 text-muted-foreground/50 hover:text-inherit rounded-sm scale-125" width={10} height={10} />
//                     </button>
//                   )}
//                 </div>

//                 <div className="flex-grow flex">
//                   <div className="flex-grow">
//                     {showFileExplorer ? (
//                       <CustomFileExplorer setShowFileExplorer={setShowFileExplorer} />
//                     ) : (
//                       <Editor setFiles={setFiles}/>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </ResizablePanel>

//             <ResizableHandle className="hover:bg-primary" />

//             <ResizablePanel defaultSize={35} className="w-full h-full rounded-2xl ml-1 bg-muted/50">
//               <div className="h-[83vh] flex flex-col">
//                 <div className="bg-popover px-4 py-2 pr-6 font-semibold flex items-center gap-6">
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
//                     <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} className="flex-grow" />
//                   ) : (
//                     <div className="w-full">
//                       <SandpackConsole
//                         standalone
//                         className="min-h-[78.5vh] h-full text-xs font-mono"
//                         showHeader={true}
//                         showResetConsoleButton
//                         showSetupProgress={true}
//                         showSyntaxError
//                         showRestartButton={true}
//                       />
//                     </div>
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



































"use client";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer,
  useSandpack,
  SandpackTests,
} from "@codesandbox/sandpack-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import React, { useEffect } from "react";
import { FolderClosed, PanelTop, SquareChevronRight, X } from "lucide-react";
import { useTheme } from "next-themes"
import CustomFileExplorer from "./CustomFileExplorer";
import SandpackEditor from "./SandpackEditor";

  

export default function ReactIDE() {
  const [dependencies] = React.useState({
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  });
  if (typeof window === "undefined") return null;
  
  const {theme}:any = useTheme()
  
  const [showFileExplorer, setShowFileExplorer] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("preview");
  const [mode, setMode] = React.useState<String>(theme)
  const [activeFile, setActiveFile] = React.useState<String>("/src/App.js")
  const [indexHtml, setIndexHtml] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/public/index.html"].code || `<!DOCTYPE html>
  <html lang="en">
    <head><meta charset="UTF-8" /><title>React IDE</title></head>
    <body><div id="root"></div></body>
  </html>`;
    } else {
      return `<!DOCTYPE html>
  <html lang="en">
    <head><meta charset="UTF-8" /><title>React IDE</title></head>
    <body><div id="root"></div></body>
  </html>`;
    }
  });
  
  const [index, setIndex] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/src/index.js"].code || `import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );`;
    }
    return `import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );`;
  });
  
  const [app, setApp] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/src/App.js"].code || `export default function App() {
    return <h1 className="title">Hello from App.js</h1>;
  }`;
    }
    return `export default function App() {
    return <h1 className="title">Hello from App.js</h1>;
  }`;
  });
  
  const [style, setStyle] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/src/style.css"].code || `.title {
    color: red;
    font-size: 2rem;
  }`;
    }
    return `.title {
    color: red;
    font-size: 2rem;
  }`;
  });
  
  const [packageJson, setPackageJson] = React.useState<string>(() => {
    const stored = localStorage.getItem("files");
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed["/package.json"].code || `{
    "name": "react-ide",
    "main": "/src/index.js",
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
  }`;
    }
    return `{
    "name": "react-ide",
    "main": "/src/index.js",
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
  }`;
  });
  
  useEffect(()=>setMode(theme),[theme])
  return (
    <SandpackProvider
      theme={theme === "dark" ? "dark" : "light"}
      className=""
      customSetup={{
        entry: "/src/index.js",
        dependencies,
      }}
      files={{
        "/public/index.html": {
          code: indexHtml,
        },
        "/src/index.js": {
          code: index,
          active: true,
        },
        "/src/App.js": {
          code: app,
        },
        "/src/style.css": {
          code: style,
        },
        "/package.json": {
          code: packageJson,
        },
      }}
    >
      <SandpackLayout     style={{backgroundColor: "transparent", border:"none"}}
      >
        {/* Mobile View */}
       <div className="lg:hidden flex flex-col items-center justify-center  gap-4 px-4 " >
       <div className=  "h-[83vh] flex flex-col flex-grow">
                  <SandpackEditor file={activeFile}/>
                  {/* <SandpackCodeEditor
                    style={{ height: "100%", width:"92vw" , backgroundColor: "transparent"}}
                    className="h-full w-full overflow-x-auto"
                    extensions={[autocompletion()]}

                  /> */}
            </div>

            <div className="h-[83vh] flex flex-col w-full border bg-popover rounded-t-xl">
              <div className="bg-popover px-4 pt-5 pb-1 pr-6   font-semibold flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={` flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-black dark:text-white" : "text-muted-foreground"}`}
                >
<PanelTop width={13} height={13}/>
                    <span>
                  Preview
                    </span>
                </button>
                <button
                  onClick={() => setActiveTab("console")}
                  className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-black dark:text-white" : "text-muted-foreground"}`}
                >
<SquareChevronRight width={13} height={13}/>
                    <span>
                  Console
                    </span>
                </button>
              </div>
              <div className="flex-grow">
                {activeTab === "preview" ? (
                  <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} className="flex-grow" />
                ) : (

<div className=" w-full">
<SandpackConsole

  standalone
  className="h-full text-xs font-mono w-[92vw] border"
  showHeader={true}
  showResetConsoleButton
  showSetupProgress={true}
  showSyntaxError
  showRestartButton={true}
/>

                    </div>

                )}
              </div>
            </div>
       </div>
        {/* PC View */}
       <div className="hidden lg:inline-block w-full ">
       <ResizablePanelGroup direction="horizontal" className="">
          <ResizablePanel defaultSize={65} className="w-full h-full rounded-2xl mr-1">
            <div className="h-[83vh] flex flex-col">
              <div className="flex items-center  pl-6 py-3 bg-popover  gap-2 ">
                {
                    showFileExplorer ?
                    <span className={`cursor-pointer flex items-center gap-1 text-xs ${showFileExplorer ? "text-popover-foreground": "text-muted-foreground"}`} >
                    <FolderClosed width={13} height={13}/><span>File explorer</span>
                </span>
                    :<span className={`cursor-pointer flex items-center gap-1 text-xs ${showFileExplorer ? "text-popover-foreground": "text-muted-foreground"}`} onClick={() => setShowFileExplorer(!showFileExplorer)}>
                    <FolderClosed width={13} height={13}/><span>File explorer</span>
                </span>
                }
                {
                    showFileExplorer && <button className={`cursor-pointer  ${showFileExplorer ? "text-primary-foreground": "text-muted-foreground"}`} onClick={() => setShowFileExplorer(!showFileExplorer)}>
                    <X className="hover:bg-muted-foreground/50 text-muted-foreground/50 hover:text-inherit   rounded-sm scale-125" width={10} height={10}/>
                </button>
                }
              </div>

              <div className="flex-grow flex ">
                {/* {showFileExplorer && (
                 <div className=" border-r ">

                    <CustomFileExplorer  />
                  </div>
                )} */}
                <div className="flex-grow">
                    {/* <SandpackTests/> */}
                  {
                    showFileExplorer ? <CustomFileExplorer setFile={setActiveFile} setShowFileExplorer={setShowFileExplorer}/> : 
                    
                    <SandpackEditor file={activeFile}/>
                    
                  }
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="hover:bg-primary" />

          <ResizablePanel defaultSize={35} className="w-full h-full rounded-2xl ml-1 bg-muted/50 ">
            <div className="h-[83vh] flex flex-col">
              <div className="bg-popover px-4 pt-5 pb-1 pr-6   font-semibold flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={` flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-popover-foreground" : "text-muted-foreground"}`}
                >
<PanelTop width={13} height={13}/>
                    <span>
                  Preview
                    </span>
                </button>
                <button
                  onClick={() => setActiveTab("console")}
                  className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-popover-foreground" : "text-muted-foreground"}`}
                >
<SquareChevronRight width={13} height={13}/>
                    <span>
                  Console
                    </span>
                </button>
              </div>
              <div className="flex-grow">
                {activeTab === "preview" ? (
                  <SandpackPreview showOpenInCodeSandbox={false} showNavigator={true} showOpenNewtab={true} showSandpackErrorOverlay={true} style={{ height: "100%" }} className="flex-grow" />
                ) : (

<div className=" w-full">
<SandpackConsole
  // style={{border:"solid 3px red", backgroundColor:"yellow"}}
  standalone
  className="min-h-[78.5vh] h-full text-xs font-mono "
  showHeader={true}
  showResetConsoleButton
  showSetupProgress={true}
  showSyntaxError
  showRestartButton={true}
/>


                    </div>

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
//     SandpackProvider,
//     SandpackLayout,
//     SandpackCodeEditor,
//     SandpackPreview,
// } from "@codesandbox/sandpack-react";
// import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
// import React from "react";

// export default function ReactIDE() {
//     const [logs, setLogs] = React.useState<string[]>([]);
//     const [dependencies, setDependencies] = React.useState({
//       react: "^18.2.0",
//       "react-dom": "^18.2.0",
//     });
  
//     const runCommand = (command: string) => {
//       if (command.startsWith("npm install ")) {
//         const pkg = command.replace("npm install ", "").trim();
//         setLogs((prev) => [...prev, `$ ${command}`, `Installing ${pkg}...`, `${pkg} installed.`]);
  
//         // Update Sandpack dependencies
//         setDependencies((prev) => ({
//           ...prev,
//           [pkg]: "latest", // or a specific version
//         }));
//       } else {
//         setLogs((prev) => [...prev, `$ ${command}`, "Unknown command"]);
//       }
//     };
  
//     return (
//         <SandpackProvider
//             theme={"dark"}
//             customSetup={{
//                 entry: "/src/index.js",
//                 dependencies: {
//                     react: "^18.2.0",
//                     "react-dom": "^18.2.0",
//                 },
//             }}
//             files={{
//                 "/index.html": {
//                     code: `<!DOCTYPE html>
//   <html lang="en">
//     <head><meta charset="UTF-8" /><title>React IDE</title></head>
//     <body><div id="root"></div></body>
//   </html>`,
//                 },
//                 "/src/index.js": {
//                     code: `import React from "react";
//     import ReactDOM from "react-dom";
//     import App from "./App";  // Correct import
//     import "./style.css";
    
//     ReactDOM.render(<App />, document.getElementById("root"));`,
//                     active: true,
//                 },
//                 "/src/App.js": {
//                     code: `export default function App() {
//           return <h1 className="title">Hello from App.js</h1>;
//         }`,
//                 },
//                 "/src/style.css": {
//                     code: `.title {
//     color: red;
//     font-size: 2rem;
//   }`,
//                 },
//                 "/package.json": {
//                     code: `{
//     "name": "react-ide",
//     "main": "/src/index.js",
//     "dependencies": {
//       "react": "^18.2.0",
//       "react-dom": "^18.2.0"
//     }
//   }`,
//                 },
//             }}
//         >

//             <SandpackLayout>
//             <ResizablePanelGroup
//                 direction="horizontal"
//                 className=""
//             >
//                 <ResizablePanel defaultSize={65} className='w-full h-full rounded-2xl  mr-1'>

//                     <div className="h-[83vh] flex flex-col">
//                         <SandpackCodeEditor

//                             className="flex-grow"
//                             style={{
//                                 height: "100%",
//                             }}
//                         />
//                     </div>
//                 </ResizablePanel>
//                 <ResizableHandle className='hover:bg-primary' />
//                 <ResizablePanel defaultSize={35} className='w-full h-full  rounded-2xl  mr-1'>

//                 <div className="h-[83vh] flex flex-col">

//                 <SandpackPreview  className="flex-grow"
//                             style={{
//                                 height: "100%",
//                             }}/>
//                     </div>
//                     <div className="bg-black text-green-500 p-4 h-48 overflow-auto font-mono">
//           {logs.map((log, idx) => (
//             <div key={idx}>{log}</div>
//           ))}
//           <input
//             type="text"
//             className="bg-black border-t border-green-500 w-full text-green-500 outline-none"
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 runCommand((e.target as HTMLInputElement).value);
//                 (e.target as HTMLInputElement).value = "";
//               }
//             }}
//             placeholder="Type a command, e.g. npm install axios"
//           />
//         </div>
//                 </ResizablePanel>

//             </ResizablePanelGroup>

//             </SandpackLayout>
//             {/* <SandpackLayout className="w-full">
//     <div className="">

      
//     </div>
//     </SandpackLayout> */}
//         </SandpackProvider>
//     );
// }
