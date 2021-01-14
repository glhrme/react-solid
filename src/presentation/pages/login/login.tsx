import React, { useState } from 'react'
import {
  Footer, Input, FormStatus, LoginHeader
} from 'presentation/components'
import FormContext from 'presentation/contexts/form/form-context'
import Styles from './login-styles.scss'

export type StateProps = {
  isLoading: boolean,
  errorMessage: string
}

const Login: React.FC = () => {
  const [state, setState] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <FormContext.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button className={Styles.btnSubmit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}
export default Login
