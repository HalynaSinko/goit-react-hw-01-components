import React from "react";
import PropTypes from "prop-types";

import TransactionTr from "./TransactionTr";

import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  if (items.length === 0) return null;
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(TransactionTr)}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default TransactionHistory;
