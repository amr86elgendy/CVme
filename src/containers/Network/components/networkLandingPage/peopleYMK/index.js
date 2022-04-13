import { Avatar, Skeleton } from 'antd'
import { StyledCard } from './peopleYMK.style'
import { BsIntersect } from 'react-icons/bs'
import { useGetPeopleYMK } from 'apis/network'
import Button from 'styles/components/button'
import { Link } from 'react-router-dom'

const PeopleYMKCard = () => {
  const { data, isLoading } = useGetPeopleYMK();
  
  return (
    <StyledCard>
      <header className='flex-between'>
        <h3 className='heading-3'>people you may know</h3>
        <Button link><Link to='/people-you-may-know'>view more</Link></Button>
      </header>
      <section>
        {isLoading ? (
          <Skeleton active avatar />
        ) : (
          data?.slice(0, 12).map((i, idx) => (
            <article key={idx} className='article-network'>
              <Avatar shape='square' size={56} src={i.image} />
              <h4 className='heading-4'>{i.name}</h4>
              <p className='p-title'>product designer at xo labs</p>
              <div className='article-network-icon'>
                <BsIntersect /> 12 mutual connections
              </div>
              <Button secondary>connect</Button>
            </article>
          ))
        )}
      </section>
    </StyledCard>
  );
}

export default PeopleYMKCard
