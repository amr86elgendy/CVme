import { Image, Skeleton } from 'antd';
import { StyledCard } from '../components/networkLandingPage/recommendComps/recommendComps.style';
import cover from 'assets/images/s6.jpg'
import { MdGroups } from 'react-icons/md'
import { useGetRecommendedComps } from 'apis/network';
import Button from 'styles/components/button';

const RecommendCompsRoute = () => {
  const { data, isLoading } = useGetRecommendedComps();
  // console.log(data);
  return (
    <StyledCard>
      <h1 className='heading-1'>recommended companies to follow</h1>
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
}

export default RecommendCompsRoute;