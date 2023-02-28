import styles from "./fullbutton.module.css";

const FullButton = ({
    label = ''
}) => {
    return (
        <div className={styles['btn-container']}>
            <button className={styles['btn-style']}>{label}</button>
        </div>
        
    );
}

export default FullButton;