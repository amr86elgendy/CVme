import React from 'react'
import {
  IoHomeOutline,
  IoBagHandleOutline,
  IoMailOutline,
} from 'react-icons/io5'
import { FiUsers } from 'react-icons/fi'



export const mainLinks = [
  {
    icon: <IoHomeOutline size={20} />,
    label: 'home',
    path: '/',
  },
  {
    icon: <FiUsers size={20} />, //
    label: 'network',
    path: '/network',
  },
  {
    icon: <IoBagHandleOutline size={20} />,
    label: 'jobs',
    path: '/jobs',
  },
  {
    icon: <IoMailOutline size={20} />,
    label: 'inbox',
    path: '/inbox',
  },
]