import React from "react";
import Transaction from "../Transaction/Transaction";

const Transactions = function({ transactions, onStarClick }) {
  return (
    <div>
      {transactions.map((transaction, id) => (
        <Transaction
          key={id}
          transaction={transaction}
          onStarClick={onStarClick}
        />
      ))}
    </div>
  );
};
export default Transactions;
