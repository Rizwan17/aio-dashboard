import styles from "./textbutton.module.css";

const TextButton = ({
    label = '',
    color = null,
    fontWeight = null
}) => {
    let style = {};
    if(color){
        style.color = color;
    }
    if(fontWeight){
        style.fontWeight = fontWeight;
    }
            
    return <button style={style} className={styles['btn-style']}>{label}</button>
}

export default TextButton;