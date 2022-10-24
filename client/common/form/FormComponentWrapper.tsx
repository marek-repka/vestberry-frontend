import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 5px;
`;
const Border = styled.div`
  padding: 11px 15px;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 10px;
`;

interface Props {
  title: string;
  children: ReactNode;
}

export const FormComponentWrapper = ({ title, children }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Border>{children}</Border>
  </Container>
);
