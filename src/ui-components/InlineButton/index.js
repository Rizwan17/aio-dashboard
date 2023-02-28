import styles from "./inlinebutton.module.css";

const InlineButton = ({
    label = ''
}) => {
    return <button className={styles['btn-style']}>{label}</button>
}

export default InlineButton;