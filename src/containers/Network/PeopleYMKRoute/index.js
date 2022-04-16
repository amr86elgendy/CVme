import { Avatar, Skeleton } from 'antd';
import Button from 'styles/components/button';
import { useGetPeopleYMK } from 'apis/network';
import { StyledCard } from '../components/networkLandingPage/peopleYMK/peopleYMK.style';
import { Intersect } from 'assets/icons';

const PeopleYMKRoute = () => {
  const { data, isLoading } = useGetPeopleYMK();
  return (
    <StyledCard>
      <h1 className='heading-1'>people you may know</h1>
      <section style={{ marginTop: '1.5rem' }}>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data.map((i) => (
            <article key={i.id} className='article-network'>
              <Avatar shape='square' size={56} src={i.image} />
              <h4 className='heading-4'>{i.name}</h4>
              <p className='p-title'>{i.title}</p>
              <div className='article-network-icon'>
                <Intersect />
                {i.mutual_friends} mutual connections
              </div>
              <Button secondary>connect</Button>
            </article>
          ))
        )}
      </section>
    </StyledCard>
  );
};

export default PeopleYMKRoute;
