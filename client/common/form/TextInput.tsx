import styled from "styled-components";
import { FormComponentWrapper } from "./FormComponentWrapper";

const StyledInput = styled.input`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  &:focus {
    outline: none;
  }
`;

const Unit = styled.div``;

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "number";
  placeholder?: string;
  unit?: string;
}

export const TextInput = ({
  name,
  label,
  value,
  onChange,
  type,
  placeholder,
  unit,
}: TextInputProps) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, min, max } = event.target;
    if (type === "number") {
      const calculatedValue = Math.max(Number(min), Math.min(Number(max), Number(value)));
      onChange(`${calculatedValue}`);
    } else {
      onChange(value);
    }
  };

  return (
    <FormComponentWrapper title={label}>
      <StyledInput
        name={name}
        type={type || "text"}
        placeholder={placeholder || label}
        value={value}
        onChange={onInputChange}
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? 2147483647 : undefined}
      />
      {unit && <Unit>{unit}</Unit>}
    </FormComponentWrapper>
  );
};
