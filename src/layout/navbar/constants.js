import React from 'react'
import {
  HomeOutline,
  BagHandleOutline,
  MailOutline,
  Users,
} from 'assets/icons';



export const mainLinks = [
  {
    icon: <HomeOutline size={20} />,
    label: 'home',
    path: '/',
  },
  {
    icon: <Users size={20} />, //
    label: 'network',
    path: '/network',
  },
  {
    icon: <BagHandleOutline size={20} />,
    label: 'jobs',
    path: '/jobs',
  },
  {
    icon: <MailOutline size={20} />,
    label: 'inbox',
    path: '/inbox',
  },
]