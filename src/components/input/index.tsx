import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface Props {
  label: string;
}

export const Input: React.FC<Props> = ({ label }) => {
  return (
    <label className={styles.inputContainer}>
      <h2 className={styles.label}>{label}</h2>
      <input className={cn(styles.customInput, ".input-group-addon)")} />
    </label>
  );
};
