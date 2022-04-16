import { memo } from 'react';
import { StyledCard } from './pendingReqs.style';
import { Avatar, Skeleton } from 'antd';
import { useFriendReqAction, useGetPendingRequests } from 'apis/network';
import Button from 'styles/components/button';
import { Link } from 'react-router-dom';
import { UserSlash } from 'assets/icons';

const PendingRequestsCard = () => {
  const { data, isLoading } = useGetPendingRequests({ limit: 4 });
  const { mutate: takeAction } = useFriendReqAction();
  // console.log(data);

  return (
    <StyledCard>
      <header className='flex-between'>
        <h3 className='heading-3'>your pending requests</h3>
        <Button link>
          <Link to='pending-requests'>view more</Link>
        </Button>
      </header>

      {isLoading ? (
        <Skeleton active avatar />
      ) : data.length > 0 ? (
        data.map((i) => (
          <section className='data-container'>
            <article key={i.id} className='article-network'>
              <div className='info'>
                <Avatar shape='square' size={40} src={i.friend.image} />
                <div>
                  <h4 className='heading-4'>{i.friend.name}</h4>
                  <p className='p-title'>{i.friend.title}</p>
                  <div className='buttons'>
                    <Button
                      acceptConnetion
                      onClick={() => takeAction({ id: i.id, status: 'accept' })}
                    >
                      accept
                    </Button>
                    <Button
                      ignore
                      onClick={() => takeAction({ id: i.id, status: 'reject' })}
                    >
                      ignore
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </section>
        ))
      ) : (
        <section className='no-data'>
          <div className='icon'>
            <UserSlash size={120} />
            <h3 className='heading-3'>you don't have any pending requests</h3>
            <p>you will receive requests to connect here</p>
          </div>
        </section>
      )}
    </StyledCard>
  );
};

export default memo(PendingRequestsCard);
