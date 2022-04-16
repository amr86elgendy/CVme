import { memo } from 'react';
import { Avatar, Skeleton } from 'antd';
import { StyledCard } from '../peopleYMK/peopleYMK.style';
import { useGetPeopleSameIndustry } from 'apis/network';
import Button from 'styles/components/button';
import { Link } from 'react-router-dom';
import { Intersect } from 'assets/icons';

const PeopleSameIndustry = () => {
  const { data, isLoading } = useGetPeopleSameIndustry({ limit: 8 });
  // console.log(data);
  return (
    <StyledCard>
      <header className='flex-between'>
        <h3 className='heading-3'>
          people in <span style={{ color: '#8544C5' }}>art</span> industry
        </h3>
        <Button link>
          <Link to='people-in-same-industry'>view more</Link>
        </Button>
      </header>
      <section>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data.map((i) => (
            <article key={i.id} className='article-network'>
              <Avatar shape='square' size={56} src={i.image} />
              <h4 className='heading-4'>{i.name}</h4>
              <p className='p-title'>{i.title}</p>
              <div className='article-network-icon'>
                <Intersect />{i.mutual_friends} mutual connections
              </div>
              <Button secondary>connect</Button>
            </article>
          ))
        )}
      </section>
    </StyledCard>
  );
};

export default memo(PeopleSameIndustry);
