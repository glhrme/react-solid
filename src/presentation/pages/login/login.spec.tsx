import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from '.'

describe('Login Component', () => {
  test('Should not render error and spinner on start', () => {
    render(<Login />)

    expect(screen.getByTestId('error-wrap').childElementCount).toBe(0)
  })
})
