import Card from 'styles/components/card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  && {
    header {
      margin-bottom: 1rem;
    }

    section {
      display: grid;
      gap: 0.5rem;
      @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }
      article {
        gap: 0.75rem;
        .info {
          display: flex;
          gap: 1rem;
          h4 {
            margin-bottom: 4px;
          }
          p {
          }
        }
        .buttons {
          margin-top: 1rem;
        }
      }
    }
  }
`;
