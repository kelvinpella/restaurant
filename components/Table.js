import React from "react";

const Table = ({ tableCaption, tableHead, tableBody }) => {
  return (
    <div className="w-full">
      <table>
        <caption className="text-center">{tableCaption}</caption>
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map(({ value, price }) => (
            <tr key={value}>
              <td>{value}</td>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
