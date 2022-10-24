import styled from "styled-components";

export const TextButton = styled.button`
  height: 40px;
  padding: 0 20px;
  background: transparent;
  border: none;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.secondaryText};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;

export const PrimaryButton = styled(TextButton)`
  padding: 0 30px;
  background: ${(props) => (props.disabled ? "gray" : "#06ac72")};
  color: ${(props) => props.theme.colors.title};
`;
