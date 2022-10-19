import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_COMPANIES, CompanyType } from "@client/graphql";
import SectorsTiles from "./sectorsTiles/SectorsTiles";
import InvestmentSizeChart from "./investmentSizeChart/InvestmentSizeChart";
import OverviewTable from "./overviewTable/OverviewTable";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const LoadingDiv = styled.div`
  text-align: center;
`;

export function CompaniesPage() {
  const { loading, error, data } = useQuery<{ companies: CompanyType[] }>(GET_COMPANIES);

  if (loading) {
    return <LoadingDiv>Loading data...</LoadingDiv>;
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    );
  }

  const companies = data?.companies;

  return (
    <Container>
      <SectorsTiles companies={companies} />
      <InvestmentSizeChart companies={companies} />
      <OverviewTable companies={companies} />
    </Container>
  );
}

export default CompaniesPage;
