import { Link } from 'react-router-dom';
import { Wrapper, Title, ButtonWrapper, Button } from './landingStyles';

function Landing() {
  return (
    <Wrapper>
      <Title>Countries</Title>
      <ButtonWrapper>
        <Link to={'/home'}><Button>Home</Button></Link>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Landing;