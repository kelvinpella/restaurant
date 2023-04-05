import { uniqueId } from "lodash";
import React from "react";

const Table = ({ tableCaption, tableHead, tableBody }) => {
  // tableCaption -> string eg 'Available sizes'
  // tableHead  -> array eg [size, price]
  // tableBody -> Array of arrays   eg [['small',19.9],['medium',23.2]]
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
          {tableBody.map((dataArr) => {
            const bodyId = uniqueId("table-body");
            return (
              <tr key={bodyId}>
                {dataArr.map((data) => {
                  const dataId = uniqueId("body-data");
                  return <td key={dataId}>{data}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
