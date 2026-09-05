import styles from "./Grain.module.css";

/** Paper grain over light sections only. Pure CSS; fades out under a dark theme. */
export function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
