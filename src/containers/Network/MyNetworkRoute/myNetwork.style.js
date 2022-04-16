import styled from 'styled-components';
import { palette } from 'styled-theme';
import Card from 'styles/components/card';

export const StyledCard = styled(Card)`
  h1 {
    margin-bottom: 1.5rem;
  }
  section.data-container {
    display: grid;
    gap: 0.5rem;
    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
    article {
      align-items: center;
      h4 {
        margin-top: 1rem;
        margin-bottom: 4px;
      }
      p {
      }
      .article-network-icon {
        margin: 0.85rem 0 1rem;
        svg {
          margin-right: 2px;
        }
      }
    }
  }
`;