import ReactSelect from "react-select";
import styles from "./Header.module.scss";
import Kitten from '../../../public/images/Kitten-transformed.png';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { ICurrency } from "../../redux/types/ICurrency";
import { setCurrentCurrency } from "../../redux/Slices/CurrencySlice";

interface IOption {
    label: string,
    value: ICurrency
}

interface IProps {
    loading: boolean
}

const Header = ({ loading }: IProps) => {

    const dispatch = useDispatch();
    const currencies = useSelector((state: RootState) => state.currency.currencyList);
    const currentCurrency = useSelector((state: RootState) => state.currency.currentCurrency);
    const [options, setOptions] = useState<Array<IOption>>([]);

    useEffect(() => {
        if (currencies.length) {
            const newOptions = currencies.map((c) => ({ label: c.id, value: c }))
            setOptions(newOptions);
            dispatch(setCurrentCurrency(newOptions[0].value));
        }
    }, [currencies]);

    const handleChange = (option: IOption) => {
        dispatch(setCurrentCurrency(option.value));
    }

    return (
        <div className={styles.main}>
            <div className={styles.leftSide}>
                <div className={styles.textLogo}>
                    <div className={styles.cat}>CAT</div>
                    <div className={styles.words}>
                        <div className={styles.word}>currencies</div>
                        <div className={styles.word}>academic</div>
                        <div className={styles.word}>terms</div>
                    </div>
                </div>
                <div className={styles.selectContainer}>
                    <ReactSelect placeholder={''}
                        value={{ label: currentCurrency.id, value: currentCurrency }}
                        onChange={(option) => handleChange(option)}
                        options={options}
                        isLoading={loading}
                        theme={(theme) => ({
                            ...theme,
                            colors: {
                                ...theme.colors,
                                primary25: '#F0EFEF',
                                primary: '#F0EFEF',
                            },
                        })}
                        classNames={{
                            control: () => styles.selectControl,
                            menu: () => styles.selectMenu,
                            valueContainer: () => styles.selectValueContainer,
                            option: () => styles.Option,
                        }}
                        components={{
                            DropdownIndicator: () => <svg className={styles.selectIcon} width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.146894 0.146894C0.19334 0.10033 0.248515 0.0633873 0.30926 0.0381808C0.370005 0.0129744 0.435127 0 0.500894 0C0.566661 0 0.631782 0.0129744 0.692528 0.0381808C0.753273 0.0633873 0.808448 0.10033 0.854894 0.146894L6.50089 5.79389L12.1469 0.146894C12.1934 0.100406 12.2486 0.0635292 12.3093 0.0383701C12.37 0.013211 12.4352 0.000261784 12.5009 0.000261784C12.5666 0.000261784 12.6317 0.013211 12.6925 0.0383701C12.7532 0.0635292 12.8084 0.100406 12.8549 0.146894C12.9014 0.193381 12.9383 0.248571 12.9634 0.30931C12.9886 0.370049 13.0015 0.43515 13.0015 0.500894C13.0015 0.566637 12.9886 0.631738 12.9634 0.692477C12.9383 0.753217 12.9014 0.808406 12.8549 0.854894L6.85489 6.85489C6.80845 6.90146 6.75327 6.9384 6.69253 6.96361C6.63178 6.98881 6.56666 7.00179 6.50089 7.00179C6.43513 7.00179 6.37001 6.98881 6.30926 6.96361C6.24852 6.9384 6.19334 6.90146 6.14689 6.85489L0.146894 0.854894C0.100331 0.808448 0.0633878 0.753272 0.0381813 0.692527C0.0129749 0.631782 0 0.566661 0 0.500894C0 0.435126 0.0129749 0.370005 0.0381813 0.30926C0.0633878 0.248515 0.100331 0.193339 0.146894 0.146894Z" fill="black" /></svg>,
                            IndicatorSeparator: () => <></>,
                        }}
                    />
                </div>
            </div>
            <div className={styles.rightSide}>
                <img src={Kitten} className={styles.img} />
            </div>
        </div>
    );
}

export default Header;