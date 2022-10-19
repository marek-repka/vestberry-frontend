import styled from "styled-components";

export const StyledTable = styled.table`
  border: 2px solid #18191c;
  border-radius: 10px;
  width: 100%;
  background: #141518;
  border-spacing: 0;
`;

export const TableHeader = styled.thead`
  tr {
    background: rgba(255, 255, 255, 0.02);
  }
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
`;

export const Row = styled.tr`
  height: 60px;
  padding: 0 30px;
  td:first-child,
  th:first-child {
    padding-left: 30px;
  }
  td:last-child,
  th:last-child {
    padding-right: 30px;
  }
`;

export const HeaderCell = styled.th`
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  text-align: ${(props) => props.align};
`;

export const TitleCell = styled.td`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  border: none;
`;

export const DataCell = styled.td`
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  border: none;
`;
