import './App.css';
import { useRef, useEffect } from 'react';
import toolbox from './toolbox';
import DarkTheme from "@blockly/theme-dark";
import Blockly from 'blockly'
function App() {
  const blocklyParent= useRef(null)
  useEffect(() => {
    const blocklyDiv = document.createElement('div')
    blocklyDiv.classList.add('h-screen')
    blocklyDiv.classList.add('w-screen')
    blocklyParent.current.append(blocklyDiv)

    Blockly.inject(blocklyDiv, {
      toolbox: toolbox,
      theme: DarkTheme,
      renderer: 'zelos',
      grid: {
        spacing: 20,
        length: 3,
        colour: "#ccc",
        snap: true
      },
      zoom: {
        controls: true,
        startScale: 0.9,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      readOnly: false,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true
      },
    })

    return () => {
      blocklyDiv.innerHtml = ""
    }
  }, [])
  return (
    <div ref={blocklyParent} id="blocklyDiv"></div>
  );
}

export default App;
