import { Card } from 'antd';
import styled from 'styled-components';
import { palette } from 'styled-theme';

export const StyledNav = styled.nav`
  background-color: ${palette('grayscale', 0)};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const StyledMain = styled.main`
  min-height: calc(100vh - 60px);
  background-color: ${palette('grayscale', 1)};
`;

export const StyledCard = styled(Card)`
  border-radius: 16px;
`