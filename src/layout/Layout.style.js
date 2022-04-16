import { Layout } from 'antd'
import styled from 'styled-components'
import { palette } from 'styled-theme'
// import WithDirection from '@cvme/lib/helpers/rtl'

const StyledLayout = styled(Layout)`
  && {
    width: 100%;
    background-color: ${palette('grayscale', 1)};
    .ant-layout-header {
      background-color: #fff;
      color: ${palette('grayscale', 11)};
      padding: 0;
      @media (max-width: 767.98px) {
        height: auto;
      }
    }

    .ant-layout-content {
      min-height: calc(100vh - 60px);
      /* padding: 40px 0 40px 40px;
      @media (max-width: 991.99px) {
        padding: 20px;
      } */
    }
  }
`;
export default StyledLayout
