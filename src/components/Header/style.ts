import styled, { css } from "styled-components";
import {col, vh } from "style/utils";


const HeaderContainer = styled.header(
  () => css`
    width: 100vw;
    height: ${vh(80)};
    padding: 0 ${col(0.25)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10;
  `
)


export { HeaderContainer }