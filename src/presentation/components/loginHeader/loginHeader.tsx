import React from 'react'
import Logo from 'presentation/components/logo'
import Styles from './loginHeader-styles.scss'

const LoginHeader = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Devs - Enquetes para Programadores</h1>
  </header>
)

export default LoginHeader
