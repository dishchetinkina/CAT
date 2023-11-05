import { useEffect, useState } from "react";
import { cuerrencyApi } from "../../../api/currencyApi";
import { CurrentCurrency } from "../../CurrentCurrency/CurrentCurrency";
import Header from "../../Header/Header";
import { useDispatch } from "react-redux";
import { setCurrencyList } from "../../../redux/Slices/CurrencySlice";


const Main = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const fetchСurrencies = async () => {
        try {
            setLoading(true);
            const curriencies = await cuerrencyApi.getCurrencies();
            dispatch(setCurrencyList(curriencies.data));
        } catch (error) {
            console.log('error');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchСurrencies();
    }, [])


    return (
        <div>
            <Header loading={loading} />
            <CurrentCurrency />
        </div>
    );
}

export { Main };
