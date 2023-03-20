import styles from "./card.module.css";

const Card = ({
    heading = '',
    subHeading = '',
    rightItem = () => {},
    children,
    footerLeft = null,
    footerRight = null,
    width=null
}) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card-header"]}>
                <div className={styles["card-left"]}>
                    <h2 className="s-16">{heading}</h2>
                    <p className="s-12 tc-grey">{subHeading}</p>
                </div>
                <div className="card-right">
                    {rightItem()}
                </div>
            </div>
            <div className={styles["card-body"]}>
                {children}
            </div>
            {(footerLeft || footerRight) && (
                <div className={styles["card-footer"]}>
                    {footerLeft && footerLeft()}
                    {footerRight && footerRight()}
                </div>
            )}
        </div>
    );
}

export default Card;