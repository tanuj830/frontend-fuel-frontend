
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
import React from "react";
import { FolderClosed, PanelTop, SquareChevronRight, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

// Custom File Explorer that activates clicked files
const CustomFileExplorer = () => {
    const { sandpack } = useSandpack();
  
    return (
      <SandpackFileExplorer
        style={{ height: "100%", width:"10vw" }}
        className="flex-grow"
        // override click handler
        onClick={(e:any) => {
          const fileElement = e.target.closest("[data-testid='file']");
          if (fileElement) {
            const filePath = fileElement.getAttribute("title"); // file path is in `title`
            if (filePath) {
              sandpack.setActiveFile(filePath);
            }
          }
        }}
      />
    );
  };
  

export default function ReactIDE() {
  const [dependencies] = React.useState({
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  });

  const [showFileExplorer, setShowFileExplorer] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState("preview");

  return (
    <SandpackProvider
      theme="dark"
      customSetup={{
        entry: "/src/index.js",
        dependencies,
      }}
      files={{
        "/index.html": {
          code: `<!DOCTYPE html>
<html lang="en">
  <head><meta charset="UTF-8" /><title>React IDE</title></head>
  <body><div id="root"></div></body>
</html>`,
        },
        "/src/index.js": {
          code: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);`,
          active: true,
        },
        "/src/App.js": {
          code: `export default function App() {
  return <h1 className="title">Hello from App.js</h1>;
}`,
        },
        "/src/style.css": {
          code: `.title {
  color: red;
  font-size: 2rem;
}`,
        },
        "/package.json": {
          code: `{
  "name": "react-ide",
  "main": "/src/index.js",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`,
        },
      }}
    >
      <SandpackLayout     style={{backgroundColor: "transparent", border:"none"}}
      >
        {/* Mobile View */}
       <div className="lg:hidden flex flex-col  gap-4">
       <div className="h-[83vh] flex flex-col">
              <div className="flex items-center px-4 py-2 bg-muted/50 gap-2 ">
                {
                    showFileExplorer ?
                    <span className={`cursor-pointer flex items-center gap-1 text-xs ${showFileExplorer ? "text-primary-foreground": "text-muted-foreground"}`} >
                    <FolderClosed width={13} height={13}/><span>File explorer</span>
                </span>
                    :<span className={`cursor-pointer flex items-center gap-1 text-xs ${showFileExplorer ? "text-primary-foreground": "text-muted-foreground"}`} onClick={() => setShowFileExplorer(!showFileExplorer)}>
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
                {showFileExplorer && (
                 <div className=" border-r bg-muted/50">

                    <CustomFileExplorer />
                  </div>
                )}
                <div className="flex-grow">
                    {/* <SandpackTests/> */}
                  <SandpackCodeEditor
                    style={{ height: "100%" , backgroundColor: "transparent"}}
                    className="h-full"
                    extensions={[autocompletion()]}

                  />
                </div>
              </div>
            </div>

            <div className="h-[83vh] flex flex-col">
              <div className="bg-muted/50 px-4 py-2 pr-6  font-semibold flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={` flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-primary-foreground" : "text-muted-foreground"}`}
                >
<PanelTop width={13} height={13}/>
                    <span>
                  Preview
                    </span>
                </button>
                <button
                  onClick={() => setActiveTab("console")}
                  className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-primary-foreground" : "text-muted-foreground"}`}
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
  className="h-full text-xs font-mono "
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
       <div className="hidden lg:inline-block">
       <ResizablePanelGroup direction="horizontal" className="">
          <ResizablePanel defaultSize={65} className="w-full h-full rounded-2xl mr-1">
            <div className="h-[83vh] flex flex-col">
              <div className="flex items-center px-4 py-2 bg-muted/50 gap-2 ">
                {
                    showFileExplorer ?
                    <span className={`cursor-pointer flex items-center gap-1 text-xs ${showFileExplorer ? "text-primary-foreground": "text-muted-foreground"}`} >
                    <FolderClosed width={13} height={13}/><span>File explorer</span>
                </span>
                    :<span className={`cursor-pointer flex items-center gap-1 text-xs ${showFileExplorer ? "text-primary-foreground": "text-muted-foreground"}`} onClick={() => setShowFileExplorer(!showFileExplorer)}>
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
                {showFileExplorer && (
                 <div className=" border-r bg-muted/50">

                    <CustomFileExplorer />
                  </div>
                )}
                <div className="flex-grow">
                    {/* <SandpackTests/> */}
                  <SandpackCodeEditor
                    style={{ height: "100%" , backgroundColor: "transparent"}}
                    className="h-full"
                    extensions={[autocompletion()]}

                  />
                </div>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle className="hover:bg-primary" />

          <ResizablePanel defaultSize={35} className="w-full h-full rounded-2xl ml-1 bg-muted/50 ">
            <div className="h-[83vh] flex flex-col">
              <div className="bg-muted/50 px-4 py-2 pr-6  font-semibold flex items-center gap-6">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={` flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "preview" ? "text-primary-foreground" : "text-muted-foreground"}`}
                >
<PanelTop width={13} height={13}/>
                    <span>
                  Preview
                    </span>
                </button>
                <button
                  onClick={() => setActiveTab("console")}
                  className={`flex items-center gap-2 text-[12px] cursor-pointer ${activeTab === "console" ? "text-primary-foreground" : "text-muted-foreground"}`}
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
  className="h-full text-xs font-mono "
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
