import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";
import Balance from "../Balance/Balance";
import Form from "./Form/Form";
import Transactions from "../Transactions/Transactions";
import ErrorBoundary from "../ErrorBondary/ErrorBoundary";
let id = 0;

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
// ===============================
  useEffect(() => {
    const dataBalance = JSON.parse(localStorage.getItem("balance"));
    if (dataBalance) {
      setBalance(dataBalance);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);
// ===============================
  useEffect(() => {
    const dataTransaction = JSON.parse(localStorage.getItem("transaction"));
    if (dataTransaction) {
      setTransactions(dataTransaction);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transactions));
  }, [transactions]);

  const onChange = ({ value, date, comment }) => {
    const transaction = {
      value: +value,
      comment,
      id: ++id,
      date,
    };
    setBalance(balance + Number(value));

    setTransactions([transaction, ...transactions]);
  };

  const onStarClick = useCallback((id)=>{
    setTransactions((transactions)=>transactions.map((item)=> item.id !== id ? item:{
      ...item,
      isStarred: !item.isStarred
    }))
  })

  return (
    <ErrorBoundary>
      <Balance balance={balance} />
      <Form onChange={onChange} />
      <hr />
      <Transactions 
        transactions={transactions}   
        onStarClick={onStarClick} />
    </ErrorBoundary>
  );
};
export default Home;
