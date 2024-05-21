import React from 'react'
import logo from "../assets/logo/logo.png"

function Logo({width = "10%"}) {
  return (
    <img src={logo} style={{width, borderRadius: 100}} alt='Logo placeholder' />
  )
}

export default Logo