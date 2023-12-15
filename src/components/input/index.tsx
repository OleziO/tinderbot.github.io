import React from 'react'
import styles from "./styles.module.scss";

interface Props {
    label: string;
}

export const Input: React.FC<Props> = ({label}) => {
  return (
    <label className={styles.inputContainer}>
        <h2>{label}</h2>
        <input />
    </label>
  )
}
