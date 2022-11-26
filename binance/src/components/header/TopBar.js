import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

export default function TopBar() {
  const [menuHover, setMenuHover] = useState(false);
  return (
    <STContainer>
      <span className="logo">BIANCE</span>
      <STCoinInformation>
        <STToggleBox
          onMouseOver={() => setMenuHover(true)}
          onMouseOut={() => setMenuHover(false)}
        >
          <Image
            className="menu"
            width={20}
            src={
              menuHover
                ? require("../../../src/images/menu_hover.png")
                : require("../../../src/images/menu.png")
            }
            alt="menu"
          />
          <Image
            className="triangle menu"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <STToggleBox>
          <span>Buy Crypto</span>
          <Image
            className="triangle"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <span className="markets">Markets</span>
        <STToggleBox>
          <span>Trade</span>
          <Image
            className="triangle"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <STToggleBox>
          <span>Derivatives</span>
          <Image
            className="triangle"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <STToggleBox>
          <span>Earn</span>
          <Image
            className="triangle"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <STToggleBox>
          <span>Finance</span>
          <Image
            className="triangle"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <span>NFT</span>
        <STToggleBox>
          <span>Institutional</span>
          <Image
            className="triangle"
            width={8}
            src={require("../../../src/images/triangle.png")}
            alt="toggle"
          />
        </STToggleBox>
        <span>Feed</span>
      </STCoinInformation>
      <STUserInformation>
        {/* <span>Wallet</span>
        <span>Orders</span> */}
        {/* <Link href={"/"}>
          <Image
            width={30}
            src={require("../../../src/images/useravar.png")}
            alt="사용자 정보"
          />
        </Link> */}
        <Link href={"/login"}>
          <span>Log In</span>
        </Link>
        <Link href={"/register"}>
          <span className="register">Register</span>
        </Link>
        <span>Downloads</span>
        <span>English</span>
        <span>USD</span>
        <Image
          className="helpIcon"
          width={20}
          src={require("../../../src/images/help.png")}
          alt="help"
        />
        <Image
          className="settingIcon"
          width={20}
          src={require("../../../src/images/setting.png")}
          alt="setting"
        />
      </STUserInformation>
    </STContainer>
  );
}

const STContainer = styled.div`
  display: flex;
  background-color: #fafafa;
  padding: 20px 0;
  .logo {
    margin-right: 10px;
    margin-left: 20px;
    font-weight: 600;
    font-size: larger;
    color: #f0b909;
  }
  & span {
    :hover {
      color: #cd9d27;
      cursor: pointer;
    }
  }
`;

const STCoinInformation = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin-right: 5px;
    font-size: 15px;
  }
  .markets {
    margin-right: 20px;
  }
`;

const STToggleBox = styled.div`
  margin-right: 30px;
  position: relative;
  &span {
  }
  .triangle {
    position: absolute;
    top: 7px;
    &.menu {
      margin-left: 5px;
      cursor: pointer;
    }
  }
  & img {
  }
`;

const STUserInformation = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  & span {
    font-size: 15px;

    margin-right: 10px;
  }
  .register {
    background-color: #fcd536;
    padding: 8px;
    border-radius: 5px;
  }
  .helpIcon {
    margin-right: 15px;
    cursor: pointer;
  }
  .settingIcon {
    margin-right: 20px;
    cursor: pointer;
  }
`;
