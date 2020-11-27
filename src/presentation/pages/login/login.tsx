import React from 'react'
import Spinner from 'presentation/components/spinner'
import LoginHeader from 'presentation/components/loginHeader'
import Styles from './login-styles.scss'

const Login: React.FC = () => (
  <div className={Styles.login}>
    <LoginHeader />
    <form className={Styles.form}>
      <h2>Login</h2>
      <div className={Styles.inputWrap}>
        <input type="email" name="email" placeholder="Digite seu e-mail" />
        <span className={Styles.status}>🔴</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type="password" name="password" placeholder="Digite sua senha" />
        <span className={Styles.status}>🔴</span>
      </div>
      <button className={Styles.btnSubmit} type="submit">Entrar</button>
      <span className={Styles.link}>Criar conta</span>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner} />
        <span className={Styles.error}>
          Error
        </span>

      </div>
    </form>
    <div className={Styles.footer} />
  </div>
)
export default Login
