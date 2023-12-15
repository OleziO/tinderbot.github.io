import { Input } from "../input";
import styles from "./styles.module.scss";

export const Container = () => {
  return (
    <div className={styles.container}>
      <Input label="Ім'я" />
      <Input label="Дата народження" />
      <Input label="Місто" />
    </div>
  );
};
