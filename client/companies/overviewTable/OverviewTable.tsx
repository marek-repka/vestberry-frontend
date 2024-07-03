import { CompanyType } from "@client/graphql";
import SectionTitle from "@client/common/text/SectionTitle";
import {
  StyledTable,
  TableHeader,
  TableBody,
  Row,
  HeaderCell,
  TitleCell,
  DataCell,
} from "@client/common/table/StyledTable";

const numberToMoneyString = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

interface Props {
  companies: CompanyType[] | undefined;
}

export const OverviewTable = ({ companies }: Props) => {
  return (
    <>
      <SectionTitle title="Companies overview" />
      <StyledTable>
        <TableHeader>
          <Row>
            <HeaderCell align="left">company name</HeaderCell>
            <HeaderCell align="right">stage</HeaderCell>
            <HeaderCell align="right">sector</HeaderCell>
            <HeaderCell align="right">investment size</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {companies?.map((company) => (
            <Row key={company.id}>
              <TitleCell>{company.name}</TitleCell>
              <DataCell>{company.stage}</DataCell>
              <DataCell>{company.sector}</DataCell>
              <DataCell>{`${numberToMoneyString(company.investmentSize)} EUR`}</DataCell>
            </Row>
          )) ?? null}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default OverviewTable;
