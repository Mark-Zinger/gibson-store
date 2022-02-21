import {HeaderContainer} from "./style";
import {HeaderLink, Logo} from "./headerLinks";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  
  
  return (
    <HeaderContainer>
      <Logo href='/'/>
      <HeaderLink href="/">Guitars</HeaderLink>
      <HeaderLink href="/">Acoustic</HeaderLink>
      <HeaderLink href="/">Lifestyle</HeaderLink>
      <HeaderLink href="/">Accessories</HeaderLink>
      <BurgerMenu/>
    </HeaderContainer>
  )
}


export default Header;