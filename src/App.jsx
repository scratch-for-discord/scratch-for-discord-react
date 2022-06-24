import './App.css';
import { BlocklyWorkspace } from 'react-blockly'
import { useState } from 'react';
import toolbox from './toolbox';
import DarkTheme from "@blockly/theme-dark";
import * as Blockly from 'blockly'
// import Theme from '@blockly/theme-modern'
function App() {
  const [xml, setXml] = useState('<xml xmlns="https://developers.google.com/blockly/xml"></xml>')
  const [javascriptCode, setJavascriptCode] = useState(null)
  return (
    <BlocklyWorkspace 
    toolboxConfiguration={toolbox}
    initialXml={xml}
    onXmlChange={(xml) => {
      setXml(xml)
      console.log(xml)
    }}
    className="w-screen h-screen"
    onImportXmlError={(e) => { console.log(e) }}
    workspaceConfiguration={{
      grid: {
        spacing: 20,
        length: 3,
        colour: "#ccc",
        snap: true
      },
      theme: DarkTheme,
      renderer: 'zelos',
      zoom: {
        controls: true,
        startScale: 0.9,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      trashcan: true,
      maxTrashcanContents: 0
    }}
    onWorkspaceChange={(workspace) => {
      setJavascriptCode(Blockly.JavaScript.workspaceToCode(workspace))
      console.log(javascriptCode)
    }}
    />
  );
}

export default App;
