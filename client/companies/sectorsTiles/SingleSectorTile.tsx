import styled from "styled-components";
import SectorIcon from "./SectorIcon";

interface Props {
  sector: string;
  numberOfCompanies: number;
}

const SingleTile = styled.div`
  width: 181px;
  height: 78px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  padding: 36px 30px;
  overflow: hidden;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TileDescription = styled.div``;

const CompaniesNumber = styled.div`
  font-size: 38px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
`;

const SectorName = styled.div`
  color: #aaaaaa;
  font-weight: 600;
`;

const TileIcon = styled.div`
  width: 55px;
`;

export const SingleSectorTile = ({ sector, numberOfCompanies }: Props) => {
  return (
    <SingleTile>
      <TileDescription>
        <CompaniesNumber>{numberOfCompanies}</CompaniesNumber>
        <SectorName>{sector}</SectorName>
      </TileDescription>
      <TileIcon>
        <SectorIcon sector={sector} />
      </TileIcon>
    </SingleTile>
  );
};

export default SingleSectorTile;
