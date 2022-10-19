import { ReactComponent as RoboadvisoryIcon } from "@assets/icons/sectors/roboadvisory.svg";
import { ReactComponent as IotIcon } from "@assets/icons/sectors/iot.svg";
import { ReactComponent as FintechIcon } from "@assets/icons/sectors/fintech.svg";
import { ReactComponent as InsuretechIcon } from "@assets/icons/sectors/insuretech.svg";

interface Props {
  sector: string;
}

export const SectorIcon = ({ sector }: Props) => {
  switch (sector.toLowerCase()) {
    case "fintech":
      return <FintechIcon />;
    case "insuretech":
      return <InsuretechIcon />;
    case "iot":
      return <IotIcon />;
    case "roboadvisory":
      return <RoboadvisoryIcon />;
    default:
      return <FintechIcon />;
  }
};

export default SectorIcon;
