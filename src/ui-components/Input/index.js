import styles from "./input.module.css";

const Input = ({
    type = '',
    name = '',
    placeholder = '',
    label = '',
    onChange = () => {},
    inputContainerStyle = {}
}) => {
    return (
        <div 
            className={styles['input-container']}
            style={inputContainerStyle}
        >
            <input
                className={styles['input-style']} 
                type={type}
                name={name}
                placeholder={placeholder}
                label={label}
                onChange={onChange}
            />
        </div>
    );
}
export default Input;