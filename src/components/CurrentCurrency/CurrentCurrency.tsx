import { useSelector } from 'react-redux';
import styles from './CurrentCurrency.module.scss';
import { RootState } from '../../redux/store';

const CurrentCurrency = () => {

    const currentCurrency = useSelector((state: RootState) => state.currency.currentCurrency);

    return (
        <div className={styles.main}>
            <div className={styles.currnecy}>
                {currentCurrency.name || ''}
            </div>
        </div>
    );
}

export { CurrentCurrency };