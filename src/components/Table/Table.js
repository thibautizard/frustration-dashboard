import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Table = styled(({ className }) => {
  const [headers, rows] = useDatatable("frustration_campagne_dons");

  return (
    headers.length > 0 && (
      <div className={className}>
        <table>
          <thead>
            <HeaderRow>
              {headers.map((header) => (
                <th>{header}</th>
              ))}
            </HeaderRow>
          </thead>
          <tbody>
            {rows.map((row) => (
              <Row>
                {Object.values(row).map((value) => (
                  <Cell>{value}</Cell>
                ))}
              </Row>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
})`
  height: 500px;
  width: 1400px;
  overflow: scroll;
  margin: auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }
`;

const HeaderRow = styled.tr`
  background-color: black;
  color: #fff200;

  th {
    padding: 10px 20px;
    white-space: nowrap;
    font-family: Bebas Neue;
    font-size: 1.1rem;
  }
`;

const Row = styled.tr`
  background: white;
  font-size: 0.8rem;
  &:hover {
    background: rgba(0, 0, 0, 1);
    color: white;
    cursor: pointer;
  }
`;

const Cell = styled.td`
  padding: 7px 10px;
  white-space: nowrap;
`;

export default Table;
