import {Card} from 'antd'
import styled from 'styled-components'
import { palette } from 'styled-theme'

export const StyledCard = styled(Card)`
  && {
    header {
      margin-bottom: 1rem;
    }
    section {
      display: grid;
      gap: 0.5rem;
      @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      article {
        align-items: center;
        .images {
          position: relative;
          width: 100%;
          .ant-image:first-of-type {
            width: 100%;
          }
          .ant-image:last-of-type {
            position: absolute;
            bottom: -40%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            img {
              border-radius: 6px;
              object-fit: cover;
            }
          }
        }
        .info {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          h4 {
            margin-top: 1rem;
            margin-bottom: 4px;
          }
          p {}
          .article-network-icon {
            margin: 0.5rem 0;
            svg {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
`;
