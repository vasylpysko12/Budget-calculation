import React from "react";
import "./Transaction.css";
import { useContext } from "react";
import { AppContext } from "../Providers/context";
import Star from "../../assets/star.svg";
import StarGold from "../../assets/star_gold.svg";
const Transaction = function({
  transaction: { value, date, comment, isStarred, id },
  onStarClick,
}) {

  const styles = {
    backgroundColor: value > 0 ? 'rgb(186, 222, 235)': 'rgb(164, 182, 189)'
  }

  const { state } = useContext(AppContext);
  return (
    <div className="transaction" key={id} style={styles}>
      <div className="transaction-data">
        <p>
          <img
            className="icon_svg"
            src={isStarred ? StarGold : Star}
            onClick={() => onStarClick(id)}
            alt=""
          />
          {date}
        </p>
        <p>
          {value.toFixed(2)}, {state.currency}
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
};
export default Transaction;
