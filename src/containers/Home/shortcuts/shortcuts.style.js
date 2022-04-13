import Card from 'styles/components/card';
import styled from 'styled-components';

const styledCard = styled(Card)`
  header {
    margin-bottom: 1.5rem;
  }
  article {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      font-size: 1.25rem;
      font-weight: 600;
      width: 33px;
      height: 33px;
    }
    .heading-4 {
      margin-bottom: 0.3rem;
    }
  }
  .ant-divider {
    margin: 12px 0;
  }
`;

export default styledCard;