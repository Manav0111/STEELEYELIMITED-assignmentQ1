import styles from "./ListHeaderCell.module.css";

const ListHeaderCell = ({ children }) => {
  // console.log({children});
  return <th className={styles.cell}>{children}</th>;
};

export default ListHeaderCell;
