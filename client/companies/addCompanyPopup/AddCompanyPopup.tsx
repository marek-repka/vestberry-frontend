import { useMutation } from "@apollo/client";
import styled from "styled-components";
import { ADD_COMPANY, GET_COMPANIES } from "@client/graphql";
import Popup from "@client/common/popup/Popup";
import { useState } from "react";
import { PrimaryButton, TextButton } from "@client/common/form/Buttons";
import { TextInput } from "@client/common/form/TextInput";
import { Dropdown } from "@client/common/form/Dropdown";

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-gap: 10px;
`;

const Errors = styled.div`
  color: red;
  margin-bottom: 20px;
`;

const sectors = ["Fintech", "IOT", "Roboadvisory", "Insuretech"];

const stages = ["Idea", "Prototype", "Seed", "Series A", "Series B", "Series C"];

interface Props {
  onClose: () => void;
}

export const AddCompanyPopup = ({ onClose }: Props) => {
  const [companyName, setCompanyName] = useState<string>("");
  const [stage, setStage] = useState<string>("");
  const [sector, setSector] = useState<string>("");
  const [investmentSize, setInvestmentSize] = useState<string>("");

  const [addCompany, { error }] = useMutation(ADD_COMPANY, {
    refetchQueries: [{ query: GET_COMPANIES }],
    onCompleted: () => onClose(),
  });

  const isFormValid =
    companyName.length > 2 && investmentSize.length > 0 && /\d/.test(investmentSize);

  const onSave = () => {
    addCompany({
      variables: {
        name: companyName,
        stage: stage,
        sector: sector,
        investmentSize: parseInt(investmentSize, 10),
      },
    });
  };

  return (
    <Popup
      title="Add new company"
      subtitle="Add new company by filling all the required fields, select from lists and be carefull, because integer is limited and not everyone can handle that"
    >
      {error && <Errors>{error.message}</Errors>}
      <TextInput name="name" label="Company name" value={companyName} onChange={setCompanyName} />
      <Dropdown
        name="stage"
        label="Stage"
        value={stage}
        onChange={setStage}
        options={stages}
        placeholder="Select stage from list"
      />
      <Dropdown
        name="sector"
        label="Sector"
        value={sector}
        onChange={setSector}
        options={sectors}
        placeholder="Select sector from list"
      />
      <TextInput
        name="investmentSize"
        label="Investment size"
        value={investmentSize}
        onChange={setInvestmentSize}
        placeholder="Enter amount"
        type="number"
        unit="EUR"
      />
      <Buttons>
        <PrimaryButton onClick={onSave} disabled={!isFormValid}>
          Add company
        </PrimaryButton>
        <TextButton onClick={onClose}>Cancel</TextButton>
      </Buttons>
    </Popup>
  );
};

export default AddCompanyPopup;
