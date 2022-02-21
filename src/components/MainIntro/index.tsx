import {MainIntroContainer, LineTitle, Light, InLineImage,  LineDash, LineCircle, LineQuote} from "./style";
import {useContext} from "react";
import {ThemeContext} from "styled-components";


const MainIntro = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <>
      <Light
        color1={colors.light1_1}
        color2={colors.light1_2}
        style={{
          x: '96px',
          y: '126px'
        }}
      />
      <Light
        color1={colors.light2}
        color2={colors.light2}
        style={{
          x: '1000px',
          y: '220px'
        }}
      />
      <MainIntroContainer>
        <LineTitle>
          <LineCircle/>
          Gibson
          <LineDash/>
          <InLineImage src="image 714.png"/>
          <LineQuote>
            Every minute a new <br/>
            Gibson guitar is born
          </LineQuote>
        </LineTitle>
        <LineTitle> <InLineImage src="image 713.png"/> Rock music legend</LineTitle>
        <LineTitle>in your hands</LineTitle>
      </MainIntroContainer>
    </>

  )

};

export default MainIntro;