import { useEffect, useState } from "react";
import InlineButton from "../InlineButton";
import TextButton from "../TextButton";
import styles from "./modal.module.css";

const Modal = ({ 
    isOpen = false, 
    onClose = () => {},
    heading = '',
    positiveText = '',
    negativeText = '',
    children,
    onSubmit = () => {},
    onCancel = () => {} 
}) => {
  return (
    <>
      {isOpen ? (
        <section className={styles["modal-bg"]}>
          <div className={styles["modal-container"]}>
            <div className={styles["modal-header"]}>
              <h3 className={styles["modal-heading"]}>{heading}</h3>
              <button
                onClick={onClose}
                className={styles["close-btn"]}
              >
                X
              </button>
            </div>
            <div className={styles["modal-body"]}>{children}</div>
            <div className={styles["modal-footer"]}>
                <div>{negativeText}</div>
                <div className={styles["footer-container"]}>
                    <TextButton onClick={onCancel} fontWeight={'normal'} label="Cancel" />
                    <div className="ml-5">
                      <InlineButton onClick={onSubmit} label={positiveText} />
                    </div>
                </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Modal;
