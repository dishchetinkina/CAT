import styles from './CurrentCurrency.module.scss';

const CurrentCurrency = () => {

    const currentCurrency = 'Russian Ruble';

    return (
        <div className={styles.main}>
            <div className={styles.currnecy}>{currentCurrency}</div>
        </div>
    );
}
 
export { CurrentCurrency };