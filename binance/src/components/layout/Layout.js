import TopBar from "../header/TopBar";
import styled from "styled-components";
import Footer from "../footer/Footer";
export const Layout = ({ children }) => {
  return (
    <>
      <LayoutStyle>
        <TopBar />
        {children}
        <Footer />
      </LayoutStyle>
    </>
  );
};

const LayoutStyle = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 100vw;

  grid-template:
    "header header header header header" minmax(64px, auto)
    "left subHeader subHeader market right" 68px
    "left orderbook chart market right" 320px
    "left orderbook chart trades right" 160px
    "left orderbook orderform trades right" 1.15fr
    "left orderbook orderform marketActivity right" auto
    "left basictable basictable basictable right" 285px
    "footer footer footer footer footer" 24px / 1fr minmax(253px, 320px) minmax(
      510px,
      880px
    )
    minmax(253px, 320px) 1fr;
`;
