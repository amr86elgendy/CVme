import { Avatar, Divider, Skeleton } from 'antd';
import Card from './compsToFollow.style';
import Button from 'styles/components/button';
import { Link } from 'react-router-dom';
import { useGetRecommendedComps } from 'apis/network';

const CompsToFollow = () => {
  const { data, isLoading } = useGetRecommendedComps({ limit: 3 });
  return (
    <Card>
      <header className=''>
        <h1 className='heading-2'>recommended to follow</h1>
        <p className='p-title'>companies that related to your industry</p>
      </header>
      <section>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data?.map((i) => (
            <>
              <article>
                <div>
                  <Avatar shape='square' size={40} src={i.logo} />
                </div>
                <div>
                  <h4 className='heading-4'>{i.name}</h4>
                  <p className='p-title'>{`${i.comapny_industries[0].name}, ${i.comapny_industries[1].name}`}</p>
                </div>
                <Button secondary>follow</Button>
              </article>
              <Divider />
            </>
          ))
        )}
        {data && (
          <Button link style={{ alignItems: 'center' }}>
            <Link to='network/companies-to-follow'>
              view more recommendations
            </Link>
          </Button>
        )}
      </section>
    </Card>
  );
};

export default CompsToFollow;
