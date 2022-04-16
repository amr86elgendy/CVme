import { Image, Skeleton } from 'antd';
import { StyledCard } from '../components/networkLandingPage/recommendComps/recommendComps.style';
import cover from 'assets/images/s6.jpg';
import { MdGroups } from 'react-icons/md';
import { useGetCompaniesIFollow } from 'apis/network';

const CompsIFollow = () => {
  const { data, isLoading } = useGetCompaniesIFollow();
  // console.log(data);
  return (
    <StyledCard>
      <h1 className='heading-1'>companies i follow</h1>
      <section style={{ marginTop: '1.5rem' }}>
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
                <p className='p-title'>jhjhhj</p>
                <div className='article-network-icon'>
                  <MdGroups size={18} /> {i.company_follower} followers
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </StyledCard>
  );
};

export default CompsIFollow;
