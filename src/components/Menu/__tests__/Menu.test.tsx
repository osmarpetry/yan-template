import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'

import Menu from '..'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/application logo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/profile/i)).toBeInTheDocument()
  })
})
