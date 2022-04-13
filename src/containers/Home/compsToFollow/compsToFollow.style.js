import Card from 'styles/components/card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  header {
    margin-bottom: 1rem;
    .heading-2 {
      margin-bottom: 0.25rem;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    article {
      display: flex;
      align-items: center;
      gap: 1rem;
      .heading-4 {
        margin-bottom: 0.3rem;
      }
      button {
        margin-left: auto;
      }
    }
    .ant-divider {
      margin: 16px 0;
    }
  }
`;

export default StyledCard;