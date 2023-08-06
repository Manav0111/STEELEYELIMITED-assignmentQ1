import {  useEffect, useState } from "react";

// Data
import mockData from "../assets/data.json";
import timeStamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";



// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
// import { element } from "prop-types";
// import { element } from "prop-types";





const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState(mockData.results[0].executionDetails);
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState(timeStamps.results[0].timestamps);
  const [rows,setRows]=useState(mockData.results);

  // console.log(rows);



  useEffect(()=>{

    // Question No-4
    console.log(searchText);
    
    if(searchText==="")
    {
      console.log("if case");
      setRows(mockData.results);

    }
  else
  {
    console.log("else case")
    const ele=mockData.results.filter((element,i)=>{
      let temp=element["&id"].toLowerCase();
      return (element["&id"].includes(searchText) || temp.includes(searchText) );
    })

    console.log(ele);
      setRows(ele);
  }
},[searchText])



      
    rows.forEach((element,i)=>{ 
      const obj = timeStamps.results[i].timestamps;
      element["obj"]=obj;
    })
 



  return (
    <div>
      <div className={styles.header}>
        {/* Question 1- */}
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${mockData.results.length} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section }>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={rows} currency={currency} setSelectedOrderDetails={setSelectedOrderDetails} setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} />
      </div>
    </div>
  );
};

export default Dashboard;
