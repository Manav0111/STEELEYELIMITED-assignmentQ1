import styles from "./ListRow.module.css";

const ListCell = ({ children,row,setSelectedOrderTimeStamps,setSelectedOrderDetails }) => {
// Question No-6
const handelclick=()=>{
  setSelectedOrderDetails(row.executionDetails);
  setSelectedOrderTimeStamps(row.obj);
}


  return <tr className={styles.cell} onClick={handelclick}>{children}</tr>;
};

export default ListCell;
