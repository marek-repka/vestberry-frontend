import { ReactNode } from "react";
import styled from "styled-components";

const PopupWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: auto;
  width: 640px;
  background: ${(props) => props.theme.colors.bg};
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Header = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 30px 30px 30px 40px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-gap: 58px;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 5px;
`;
const Subtitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #aaaaaa;
`;
const Content = styled.div`
  padding: 40px;
`;

interface Props {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const Popup = ({ title, subtitle, children }: Props) => {
  return (
    <PopupWindow>
      <Container>
        <Header>
          <div>
            <Title>{title}</Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </div>
          <div>X</div>
        </Header>
        <Content>{children}</Content>
      </Container>
    </PopupWindow>
  );
};

export default Popup;
