import { useEffect } from "react";
import './index.scss'
import { cuerrencyApi } from "./api/currencyApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Pages/Main/Main";

const App = () => {

    const fetchСurrencies = async () => {
        try {
            const curriencies = await cuerrencyApi.getCurrencies();
            console.log(curriencies);
        } catch (error) {
            console.log('error');
        } finally {

        }
    }

    useEffect(() => {
        fetchСurrencies();
    }, [])

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


