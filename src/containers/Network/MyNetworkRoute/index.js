import { Intersect, UserSlash } from 'assets/icons';
import { Avatar, Skeleton } from 'antd';
import { useGetAllMyFriends } from 'apis/network';
import { StyledCard } from './myNetwork.style';
import Button from 'styles/components/button';

const MyNetworkRoute = () => {
  const { data, isLoading } = useGetAllMyFriends();
  console.log(data);
  return (
    <StyledCard>
      <h1 className='heading-1'>my network</h1>
      {isLoading ? (
        <Skeleton active avatar />
      ) : data.length > 0 ? (
        <section className='data-container'>
          {data.map((i) => (
            <article key={i.id} className='article-network'>
              <Avatar shape='square' size={56} src={i.friend.image} />
              <h4 className='heading-4'>{i.friend.name}</h4>
              <p className='p-title'>{i.friend.title}</p>
              <div className='article-network-icon'>
                <Intersect />
                {i.friend.mutual_friends} mutual connections
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className='no-data'>
          <div className='icon'>
            <UserSlash size={120} />
            <h3 className='heading-3'>you don't have any connections yet</h3>
            <p>You can discover and find new connections in your industry</p>
            <Button secondary>Find new connections</Button>
          </div>
        </section>
      )}
      {/* <section className='no-data'>
        <div className='icon'>
          <UserSlash size={120} />
          <h3 className='heading-3'>you don't have any connections yet</h3>
          <p>You can discover and find new connections in your industry</p>
          <Button secondary>Find new connections</Button>
        </div>
      </section> */}
    </StyledCard>
  );
};

export default MyNetworkRoute;
