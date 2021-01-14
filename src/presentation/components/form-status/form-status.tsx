import React, { useContext } from 'react'
import Spinner from 'presentation/components/spinner'
import FormContext from 'presentation/contexts/form/form-context'
import { StateProps } from 'presentation/pages/login/login'
import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext<StateProps>(FormContext)

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && (<Spinner className={Styles.spinner} />)}
      {errorMessage && (
        <span className={Styles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export default FormStatus
