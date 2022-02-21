import styled, {css} from "styled-components";
import {motion} from "framer-motion";
import {col, vh, vw} from "style/utils";

const MainIntroContainer = styled.section`
  padding: ${vh(200)} ${col(0.25)} ${vh(40)};
  position: relative;
`


const LineTitle = styled(motion.h1)(
  ({theme}) => css`
    color: ${theme.colors.secondaryWhite};
    
    font-size: 6.5vw;
    text-transform: uppercase;
    font-weight: 500;
    
    display: flex;
    align-items: center;
    
    &:nth-child(2) {
      padding-left: ${vw(84)};
    }
    &:nth-child(3) {
      padding-left: ${vw(700)};
    }
  `
)

const InLineImage = styled(motion.img)(
  ({theme}) => css `
    height: 6.4vw;
    display: inline-block;
    // margin: 0 ${vw(30)} 0 ${vw(40)};
    margin-right: ${vw(30)};
  `
)

const LineDash = styled.span(
  ({theme}) => css `
    height: 10px;
    width: ${vw(74)};
    margin: 0 ${vw(38)};
    background: ${theme.colors.secondaryWhite};
  `
)

const LineCircle = styled.span(
  ({theme}) => css `
    height: ${vw(90)};
    width: ${vw(90)};
    margin-right: ${vw(4)};
    background: ${theme.colors.secondaryWhite};
    border-radius: 50%;
  `
)

const LineQuote = styled.span(
  ({theme}) => css `
    color: ${theme.colors.secondaryWhite};
    text-transform: uppercase;
    margin-left: ${vw(120)};
    font-size: ${vw(18)};
    line-height: 1.3;
    font-weight: 400;
    padding-top: ${vh(40)};
  `
)

const Light = styled(motion.div)<{color1: string, color2: string}>`
  position: absolute;
  width: 390.98px;
  height: 372.21px;

  background: radial-gradient(50% 50% at 50% 50%, ${p => p.color1}C4 0.01%, ${p => p.color2}AB 100%);
  opacity: 0.9;
  filter: blur(200px);
`

const IntroVideo = styled.img`

`

export { MainIntroContainer, LineTitle, Light, InLineImage, LineDash, LineCircle, LineQuote }