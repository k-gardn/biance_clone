import TopBar from "../header/TopBar";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>
        <TopBar />
        {children}
      </LayoutStyle>
    </>
  );
};

const LayoutStyle = styled.div`
  margin: 0 auto;
  max-width: 100vw;
`;
