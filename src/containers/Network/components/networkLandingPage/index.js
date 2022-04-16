import styled from 'styled-components';
import PendingRequestsCard from './pendingReqs';
import PeopleSameIndustry from './peopleSameIndustry';
import PeopleYMKCard from './peopleYMK'
import RecommendComps from './recommendComps'

const networkLandingPage = () => {
  return (
    <Wrapper>
      <PendingRequestsCard />
      <PeopleYMKCard />
      <PeopleSameIndustry />
      <RecommendComps />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`

export default networkLandingPage