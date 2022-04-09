import { NetworkCardWrapper } from './networkRoutes.style'
import React from 'react'
import { BsPatchCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { networkLinks } from '../constants'
import { Divider } from 'antd'

const NetworkCard = () => {
  return (
    <NetworkCardWrapper>
      <h1>network</h1>
      {networkLinks.map((item) => (
        <div className="sub-title" key={item.label}>
          <button>{item.icon}</button>
          <Link to={item.path}>
            <p>{item.label}</p>
          </Link>
        </div>
      ))}
      <Divider />
      <div className="sub-title">
        <button>
          <BsPatchCheck size={20} />
        </button>
        <Link to='/companies-i-follow'>
          <p>companies i follow</p>
        </Link>
      </div>
    </NetworkCardWrapper>
  )
}

export default NetworkCard
