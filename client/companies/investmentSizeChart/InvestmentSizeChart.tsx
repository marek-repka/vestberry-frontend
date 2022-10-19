import styled from "styled-components";
import { CompanyType } from "@client/graphql";
import SectionTitle from "@client/common/SectionTitle";
import { CircleChart } from "@client/common/CircleChart";

const Container = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 35px 70px;
  position: relative;
`;

const InnerTextBlock = styled.div`
  width: 80px;
  height: 70px;
  position: absolute;
  top: 136px;
  left: 154px;
  text-align: center;
`;

const CompaniesNumber = styled.div`
  font-size: 38px;
  font-weight: 700;
  color: white;
`;

const CompaniesLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #aaaaaa;
`;

interface Props {
  companies: CompanyType[] | undefined;
}

export const InvestmentSizeChart = ({ companies }: Props) => {
  return (
    <>
      <SectionTitle title="Companies by investment size" />
      <Container>
        <CircleChart chartData={companies || []} nameField="name" valueField="investmentSize" />
        <InnerTextBlock>
          <CompaniesNumber>{companies?.length || 0}</CompaniesNumber>
          <CompaniesLabel>
            {(companies?.length || 0) === 1 ? "Company" : "Companies"}
          </CompaniesLabel>
        </InnerTextBlock>
      </Container>
    </>
  );
};

export default InvestmentSizeChart;
