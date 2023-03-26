import styles from "./textbutton.module.css";

const TextButton = ({
    label = '',
    color = null,
    fontWeight = null,
    onClick = () => {}
}) => {
    let style = {};
    if(color){
        style.color = color;
    }
    if(fontWeight){
        style.fontWeight = fontWeight;
    }
            
    return <button onClick={onClick} style={style} className={styles['btn-style']}>{label}</button>
}

export default TextButton;