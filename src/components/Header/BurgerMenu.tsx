import {FC} from "react";
import styled, {css} from "styled-components";


const BurgerMenu:FC = () => {


  return <BurgerButton/>
}

const BurgerButton = styled.div(
  ({theme}) => css`
    width: 25px;
    height: 8px;
    position: relative;
    cursor: pointer;
    
    &::before, &::after {
      content: '';
      display: block;
      background: ${theme.colors.primaryWhite};
      position: absolute; left: 0; top: 0;
      width: 100%;
      height: 2px;
    }
    &::after {
      top: unset; bottom: 0;
    }
  `
);


export default BurgerMenu;