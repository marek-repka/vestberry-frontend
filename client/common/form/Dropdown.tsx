import styled from "styled-components";
import { FormComponentWrapper } from "./FormComponentWrapper";

const StyledDropdown = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  &:focus {
    outline: none;
  }
  option {
    color: black;
  }
`;

interface DropdownProps {
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Dropdown = ({ name, label, value, options, onChange, placeholder }: DropdownProps) => {
  const onDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <FormComponentWrapper title={label}>
      <StyledDropdown
        name={name}
        value={value}
        onChange={onDropdownChange}
        placeholder={placeholder}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </StyledDropdown>
    </FormComponentWrapper>
  );
};
