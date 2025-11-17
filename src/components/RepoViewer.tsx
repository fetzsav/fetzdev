// src/components/RepoViewer.tsx
import React from "react";
import type { SandpackFiles } from "@codesandbox/sandpack-react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackFileExplorer,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

// Auto-load all files in src/repo/dice/** as raw text
const rawModules = import.meta.glob("../repo/dice/**", { as: "raw", eager: true });

// Build a SandpackFiles map: "/path" -> { code, readOnly, active? }
const files: SandpackFiles = Object.fromEntries(
  Object.entries(rawModules).map(([abs, code]) => {
    const rel = abs.replace(/^.*\/repo\/dice\//, "/");
    return [rel, { code: code as string, readOnly: true }];
  })
);

// Prefer README.md tab if present
if (files["/README.md"] && typeof files["/README.md"] === "object") {
  (files["/README.md"] as any).active = true;
} else {
  const first = Object.keys(files)[0];
  if (first && typeof files[first] === "object") {
    (files[first] as any).active = true;
  }
}

export default function RepoViewer() {
  return (
    <div style={{ minHeight: 420 }}>
      <SandpackProvider
        theme={amethyst}
        files={files}          // <-- pass files here (not via customSetup)
      >
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor
            readOnly
            showTabs
            showLineNumbers
            wrapContent
            closableTabs={false}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
