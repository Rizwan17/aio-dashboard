import styles from "./actionButton.module.css";

const ActionButton = ({ label = "", Icon = null, inverse = false, style = {}, onClick = () => {} }) => {
  return (
    <button
      className={
        inverse ? `${styles["btn"]} ${styles["inverse"]}` : `${styles["btn"]}`
      }
      style={style}
      onClick={onClick}
    >
      {Icon && (
        <Icon />
      )}
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
