import styles from "./inlinebutton.module.css";

const InlineButton = ({
    label = '',
    onClick = () => {}
}) => {
    return <button onClick={onClick} className={styles['btn-style']}>{label}</button>
}

export default InlineButton;