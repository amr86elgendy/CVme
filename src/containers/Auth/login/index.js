import { StyledCard, StyledMain, StyledNav } from './login.style';
import logo from 'assets/images/cv-me-logo.png';

const Login = () => {
  return (
    <>
      <StyledNav>
        {/* <div className='container'> */}
        <img src={logo} alt='logo' />
        {/* </div> */}
      </StyledNav>
      <StyledMain>
        <StyledCard>
          <form></form>
        </StyledCard>
      </StyledMain>
    </>
  );
}

export default Login