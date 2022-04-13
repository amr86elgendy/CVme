import { StyledCard } from './pendingReqs.style'
import { Avatar, Skeleton } from 'antd';
import { useGetPendingRequests } from 'apis/network';
import Button from 'styles/components/button';
import { Link } from 'react-router-dom';


const PendingRequestsCard = () => {
  const { data, isLoading } = useGetPendingRequests();
  // console.log(data);
  return (
    <StyledCard>
      <header className='flex-between'>
        <h3 className='heading-3'>your pending requests</h3>
        <Button link>
          <Link to='/pending-requests'>view more</Link>
        </Button>
      </header>
      <section>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data.slice(0, 4).map((i, idx) => (
            <article key={idx} className='article-network'>
              <div className='info'>
                <Avatar shape='square' size={40} src={i.image} />
                <div>
                  <h4 className='heading-4'>{i.name}</h4>
                  <p className='p-title'>product designer at xo labs</p>
                  <div className='buttons'>
                    <Button acceptConnetion>accept</Button>
                    <Button ignore>ignore</Button>
                  </div>
                </div>
              </div>
            </article>
          ))
        )}
      </section>
    </StyledCard>
  );
}

export default PendingRequestsCard