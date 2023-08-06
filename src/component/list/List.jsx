import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
// import { useEffect, useRef, useState, } from "react";
// import { element } from "prop-types";

const List = ({ rows,currency,setSelectedOrderDetails,setSelectedOrderTimeStamps}) => {
  
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>{`Order Volume / ${currency}`}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row,indx) => (
          <ListRow row={row}  setSelectedOrderDetails={setSelectedOrderDetails} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}  key={indx}   >
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            {/* Question 2-  */}
            <ListRowCell>{row.obj.orderSubmitted}</ListRowCell>
            {/* Question 3- */}
            <ListRowCell>{`${row.bestExecutionData.orderVolume[currency]}`}</ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List
