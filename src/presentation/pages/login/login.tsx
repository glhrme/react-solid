import React from 'react'
import Spinner from 'presentation/components/spinner'
import LoginHeader from 'presentation/components/login-header'
import Footer from 'presentation/components/footer'
import Input from 'presentation/components/input'
import Styles from './login-styles.scss'

const Login: React.FC = () => (
  <div className={Styles.login}>
    <LoginHeader />
    <form className={Styles.form}>
      <h2>Login</h2>
      <Input type="email" name="email" placeholder="Digite seu e-mail" />
      <Input type="password" name="password" placeholder="Digite sua senha" />
      <button className={Styles.btnSubmit} type="submit">Entrar</button>
      <span className={Styles.link}>Criar conta</span>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner} />
        <span className={Styles.error}>
          Error
        </span>

      </div>
    </form>
    <Footer />
  </div>
)
export default Login
