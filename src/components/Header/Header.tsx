import ReactSelect from "react-select";
import styles from "./Header.module.scss";
import Kitten from './Kitten-transformed.png';

const Header = () => {
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
                    <ReactSelect className={styles.select}
                                placeholder={''}
                                isLoading={true}
                                // components={{
                                //     IndicatorSeparator: () => <></>,
                                //     LoadingIndicator: () => <></>
                                // }}
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