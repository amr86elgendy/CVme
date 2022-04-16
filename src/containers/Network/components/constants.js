import React from 'react'
import { FiUserCheck, FiUserPlus } from 'react-icons/fi'
import { BsPatchCheck } from 'react-icons/bs';

export const networkLinks = [
  {
    icon: <FiUserPlus size={20} />,
    label: 'pending requests',
    path: 'pending-requests',
  },
  {
    icon: <FiUserCheck size={20} />, //
    label: 'my network',
    path: 'my-network',
  },
  {
    icon: <BsPatchCheck size={20} />, //
    label: 'companies i follow',
    path: 'companies-i-follow',
  },
];
