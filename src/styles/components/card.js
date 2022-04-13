import { Card } from 'antd';
import styled from 'styled-components';

const MyCard = styled(Card)`
  border-radius: 6px;
  margin-bottom: ${({ gap_y = 24 }) => gap_y + 'px'};
`
export default MyCard;