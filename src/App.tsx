import './index.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Pages/Main/Main";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


