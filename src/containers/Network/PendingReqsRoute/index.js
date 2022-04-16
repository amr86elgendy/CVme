import { UserSlash } from 'assets/icons';
import { Avatar, Skeleton } from 'antd';
import Button from 'styles/components/button';
import { useGetPendingRequests } from 'apis/network';
import { StyledCard } from './pendingRoute.style';

const PendingReqsRoute = () => {
  const { data, isLoading } = useGetPendingRequests();
  return (
    <StyledCard>
      <h1 className='heading-1'>pending requests</h1>
      {isLoading ? (
        <Skeleton active avatar />
      ) : data.length > 0 ? (
        <section className='data-container'>
          {data.map((i) => (
            <article key={i.id} className='article-network'>
              <div className='info'>
                <Avatar shape='square' size={40} src={i.friend.image} />
                <div>
                  <h4 className='heading-4'>{i.friend.name}</h4>
                  <p className='p-title'>{i.friend.title}</p>
                  <div className='buttons'>
                    <Button acceptConnetion>accept</Button>
                    <Button ignore>ignore</Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className='no-data'>
          <div className='icon'>
            <UserSlash size={120} />
            <h3 className='heading-3'>you don't have any pending requests</h3>
            <p>you will receive requests to connect here</p>
          </div>
        </section>
      )}
      {/* <section className='no-data'>
        <div className='icon'>
          <UserSlash size={120} />
          <h3 className='heading-3'>you don't have any pending requests</h3>
          <p>you will receive requests to connect here</p>
        </div>
      </section> */}
    </StyledCard>
  );
};

export default PendingReqsRoute;
