import { Avatar, Divider } from 'antd';
import React from 'react';
import Card from './compsToFollow.style';
import avatar from 'assets/images/node-js.jpg';
import Button from 'styles/components/button';
import { Link } from 'react-router-dom';

const CompsToFollow = () => {
  return (
    <Card>
      <header className=''>
        <h1 className='heading-2'>recommended to follow</h1>
        <p className='p-title'>companies that related to your industry</p>
      </header>
      <section>
        <article>
          <div>
            <Avatar shape='square' size={40} src={avatar} />
          </div>
          <div>
            <h4 className='heading-4'>space x</h4>
            <p className='p-title'>software development</p>
          </div>
          <Button secondary>follow</Button>
        </article>
        <Divider />
        <article>
          <div>
            <Avatar shape='square' size={40} src={avatar} />
          </div>
          <div>
            <h4 className='heading-4'>airbnb</h4>
            <p className='p-title'>travel technology</p>
          </div>
          <Button secondary>follow</Button>
        </article>
        <Divider />
        <article>
          <div>
            <Avatar shape='square' size={40} src={avatar} />
          </div>
          <div>
            <h4 className='heading-4'>dribblee</h4>
            <p className='p-title'>design technology</p>
          </div>
          <Button secondary>follow</Button>
        </article>
        <Divider />
        <Button link style={{ alignItems: 'center' }}>
          <Link to='companies-to-follow'>view more recommendations</Link>
        </Button>
      </section>
    </Card>
  );
};

export default CompsToFollow;
