import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { GET_COMPANIES, CompanyType } from "@client/graphql";
import SectorsTiles from "./sectorsTiles/SectorsTiles";
import InvestmentSizeChart from "./investmentSizeChart/InvestmentSizeChart";
import OverviewTable from "./overviewTable/OverviewTable";
import { useState } from "react";
import AddCompanyPopup from "./addCompanyPopup/AddCompanyPopup";
import { PrimaryButton } from "@client/common/form/Buttons";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const LoadingDiv = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  text-align: center;
  margin: 35px;
`;

export function CompaniesPage() {
  const { loading, error, data } = useQuery<{ companies: CompanyType[] }>(GET_COMPANIES);
  const [isPopupOpen, togglePopup] = useState<boolean>(false);

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
      <Buttons>
        <PrimaryButton onClick={() => togglePopup(true)}>Add new company</PrimaryButton>
      </Buttons>
      {isPopupOpen && <AddCompanyPopup onClose={() => togglePopup(false)} />}
    </Container>
  );
}

export default CompaniesPage;
