import { useMemo } from "react";
import styled from "styled-components";
import { CompanyType } from "@client/graphql";
import SectionTitle from "@client/common/SectionTitle";
import SingleSectorTile from "./SingleSectorTile";

const TilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
`;

interface Props {
  companies: CompanyType[] | undefined;
}

export const SectorsTiles = ({ companies }: Props) => {
  const companyNumberBySector = useMemo(() => {
    const bySector = new Map<string, number>();
    companies?.forEach((company) => {
      if (bySector.has(company.sector)) {
        const companiesInSector = bySector.get(company.sector) || 0;
        bySector.set(company.sector, companiesInSector + 1);
      } else {
        bySector.set(company.sector, 1);
      }
    });
    return Array.from(bySector);
  }, [companies]);

  return (
    <>
      <SectionTitle title="Companies by sector" />
      <TilesContainer>
        {companyNumberBySector.map(([key, value]) => (
          <SingleSectorTile sector={key} numberOfCompanies={value} key={key} />
        ))}
      </TilesContainer>
    </>
  );
};

export default SectorsTiles;
