import { useEffect, useState } from 'react'
import { Image, Skeleton } from 'antd';
import { StyledCard } from './recommendComps.style';
import cover from 'assets/images/s6.jpg'
// import logo from 'assets/images/node-js.jpg'
import { MdGroups } from 'react-icons/md'
import { useGetRecommendedComps } from 'apis/network';
import Button from 'styles/components/button';

const RecommendComps = () => {
  const { data, isLoading } = useGetRecommendedComps();
  // console.log(data);
  return (
    <StyledCard>
      <header className='flex-between'>
        <h3 className='heading-3'>recommended companies to follow</h3>
        <Button viewMore>view more</Button>
      </header>
      <section>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data?.slice(0, 3).map((i, idx) => (
            <article key={idx} className='article-network'>
              <div className='images'>
                <Image src={cover} height={75} />
                <Image src={i.logo} preview={false} width={60} height={60} />
              </div>
              <div className='info'>
                <h4 className='heading-4'>{i.name}</h4>
                <p className='p-title'>{i.about.substring(0, 25)}</p>
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
}

export default RecommendComps