import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Button from 'styles/components/button';

const ErrorPage = () => {
  return (
    <Wrapper className='full-page'>
        {/* <img src={img} alt='not found' /> */}
        <h1 className='heading-1'>Ohh! page not found</h1>
        <p className='p-title'>We can't seem to find the page you're looking for</p>
        <Link to='/'>
          <Button primary>back home</Button>
        </Link>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 1.5rem;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
`;

export default ErrorPage