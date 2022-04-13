import Card from 'styles/components/card';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const MyCard = styled(Card)`
  section {
    display: flex;
    gap: 1rem;
    .input-container {
      flex-grow: 1;
      input {
        padding: 0.5rem 1rem;
        border: 1px solid ${palette('grayscale', 3)}
      }
      .share {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: 1rem;
        span {
          display: flex;
          align-items: center;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: ${palette('grayscale', 10)};
          svg {
            margin-right: 0.35rem;
            color: ${palette('primary', 1)};
          }
        }
      }
    }
  }
`;

export default MyCard;
