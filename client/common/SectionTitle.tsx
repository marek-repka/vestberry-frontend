import styled from "styled-components";

const Title = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
  font-size: 28px;
  margin: 50px 0 25px;
`;

interface Props {
  title: string;
}

export function SectionTitle({ title }: Props) {
  return <Title>{title}</Title>;
}

export default SectionTitle;
