import styles from "./actionButton.module.css";

const ActionButton = ({ label = "", Icon = null, inverse = false }) => {
  return (
    <button
      className={
        inverse ? `${styles["btn"]} ${styles["inverse"]}` : `${styles["btn"]}`
      }
    >
      {Icon && (
        <Icon />
      )}
      <span>{label}</span>
    </button>
  );
};

export default ActionButton;
