import { Avatar, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import Card from './createPost.style';
import avatar from 'assets/images/home/avatar-rect.png';
import Button from 'styles/components/button';
import { CameraVideo, FilePlus, ImageIcon } from 'assets/icons';
const CraetePost = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onUploadFile = (file) => {
    console.log(file);
  };
  return (
    <Card gap_y={8}>
      <section>
        <Avatar src={avatar} shape='square' size={40} />
        <div className='input-container'>
          <input
            type='text'
            placeholder='Write a new post'
            onClick={showModal}
          />
          <div className='share'>
            <span>
              <ImageIcon size={18} /> image
            </span>
            <span>
              <CameraVideo size={18} /> video
            </span>
            <span>
              <FilePlus size={18} /> document
            </span>
          </div>
        </div>
      </section>
      <Modal
        title='Create New Post'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <footer key='footer' className='flex-between'>
            <Upload
              fileList={[]}
              onChange={onUploadFile}
              multiple
              listType='picture'
            >
              <div className='share'>
                <span>
                  <ImageIcon size={18} /> image
                </span>
                <span>
                  <CameraVideo size={18} /> video
                </span>
                <span>
                  <FilePlus size={18} /> document
                </span>
              </div>
            </Upload>
            <Button primary>post</Button>
          </footer>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Card>
  );
};

export default CraetePost;
