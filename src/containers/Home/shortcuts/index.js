import { Avatar, Divider } from 'antd';
import { ThreeDots } from 'assets/icons';
import React from 'react';
import Card from './shortcuts.style';
import avatar from 'assets/images/node-js.jpg'

const Shortcuts = () => {
  return (
    <Card>
      <header className='flex-between'>
        <h3 className='heading-3'>shortcuts</h3>
        <ThreeDots size={20} />
      </header>
      <section>
        <article>
          <div>
            <button className='noti-wrapper'>#</button>
          </div>
          <div>
            <h4 className='heading-4'># cloud_engineering</h4>
            <p className='p-title'>23 new post</p>
          </div>
        </article>
        <Divider />
        <article>
          <div>
            <button className='noti-wrapper'>#</button>
          </div>
          <div>
            <h4 className='heading-4'>موسم_الرياض #</h4>
            <p className='p-title'>25 new post</p>
          </div>
        </article>
        <Divider />
        <article>
          <div>
            <Avatar shape='square' size={33} src={avatar} />
          </div>
          <div>
            <h4 className='heading-4'>space x</h4>
            <p className='p-title'>1 new post</p>
          </div>
        </article>
        <Divider />
        <article>
          <div>
            <Avatar shape='square' size={33} src={avatar} />
          </div>
          <div>
            <h4 className='heading-4'>airbnb</h4>
            <p className='p-title'>5 new post</p>
          </div>
        </article>
        <Divider />
        <article>
          <div>
            <Avatar shape='square' size={33} src={avatar} />
          </div>
          <div>
            <h4 className='heading-4'>elon musk</h4>
            <p className='p-title'>8 new post</p>
          </div>
        </article>
      </section>
    </Card>
  );
};

export default Shortcuts;
