import { render } from '@testing-library/react'

import FullpageInformation from '../'

describe('<FullpageInformation.test />', () => {
  it('should render the texts', () => {
    const { container, getByRole, getByText } = render(
      <FullpageInformation
        title="Website in works"
        description="Come back later!"
      />
    )

    expect(
      getByRole('heading', { name: /website in works/i })
    ).toBeInTheDocument()

    expect(getByText('Come back later!')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
