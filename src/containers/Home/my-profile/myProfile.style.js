import Card from 'styles/components/card';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const styledCard = styled(Card)`
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      margin-top: 12px;
      margin-bottom: 4px;
    }
  }
  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    svg {
      color: ${palette('primary', 1)};
      margin-right: 10px;
    }
    span {
      font-weight: 400;
      color: ${palette('grayscale', 7)};
      margin-left: 8px;
    }
  }
  button {
    width: 100%;
  }
`;

export default styledCard;