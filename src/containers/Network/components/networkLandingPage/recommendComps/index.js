import { memo } from 'react';
import { Image, Skeleton } from 'antd';
import { StyledCard } from './recommendComps.style';
import cover from 'assets/images/s6.jpg';
import { MdGroups } from 'react-icons/md';
import { useGetRecommendedComps } from 'apis/network';
import Button from 'styles/components/button';
import { Link } from 'react-router-dom';

const RecommendComps = () => {
  const { data, isLoading } = useGetRecommendedComps({ limit: 3 });
  // console.log(data);
  return (
    <StyledCard>
      <header className='flex-between'>
        <h3 className='heading-3'>recommended companies to follow</h3>
        <Button link>
          <Link to='companies-to-follow'>view more</Link>
        </Button>
      </header>
      <section>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data.map((i) => (
            <article key={i.id} className='article-network'>
              <div className='images'>
                <Image src={cover} height={75} />
                <Image src={i.logo} preview={false} width={60} height={60} />
              </div>
              <div className='info'>
                <h4 className='heading-4'>{i.name}</h4>
                <p className='p-title'>{`${i.comapny_industries[0].name}, ${i.comapny_industries[1].name}`}</p>
                <div className='article-network-icon'>
                  <MdGroups size={18} /> 50k followers
                </div>
                <Button secondary>follow</Button>
              </div>
            </article>
          ))
        )}
      </section>
    </StyledCard>
  );
};

export default memo(RecommendComps);
