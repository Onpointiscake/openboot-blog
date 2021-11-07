import { Button, useColorMode } from "@chakra-ui/react"

import EditorApp from './pages/EditorApp';
import './styles/App.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App">
            <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
<EditorApp/>
    </div>
  );
}

export default App;
