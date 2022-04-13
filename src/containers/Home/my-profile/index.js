import React from 'react'
import Card from './myProfile.style';
import avatar from 'assets/images/home/avatar-rect.png'
import { Avatar, Divider } from 'antd';
import Button from 'styles/components/button';
import { EyeOutline, Users } from 'assets/icons';
const MyProfile = () => {
  return (
    <Card>
      <div className='info'>
        <Avatar shape='square' size={56} src={avatar} />
        <h4 className='heading-4'>mohamed talal</h4>
        <p className='p-title'>product designer at spaceX</p>
      </div>
      <Divider />
      <h4 className='heading-4'>
        <EyeOutline size={20} /> 25 <span>profile views</span>
      </h4>
      <h4 className='heading-4'>
        <Users size={20} /> 325 <span>connections</span>
      </h4>
      <Button secondary>my profile</Button>
    </Card>
  );
}

export default MyProfile