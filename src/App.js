import StartPage from "./pages/StartPage";
import EditorApp from "./pages/EditorApp"
import ReadArticle from "./pages/ReadArticle"
import Login from "./pages/Login"
import "./styles/App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={ <StartPage /> } />
    <Route path="/editorapp" element={ <EditorApp /> } />
    <Route path="/login" element={ <Login /> } />
    <Route path="/articulo/:id_articulo" element={ <ReadArticle /> } />
      </Routes>
      <NavBar />

    </div>
    </BrowserRouter>
  );
}

export default App;
