import '@testing-library/jest-dom'
import { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'

import { render, screen } from '@testing-library/react'

import FadeIn from '.'

const renderComponent = (children: ReactNode, show?: boolean) => {
  act(() => {
    render(<FadeIn show={show}>{children}</FadeIn>)
  })
}

describe('Rendering', () => {
  it('Default', () => {
    renderComponent('Rendering test')

    expect(screen.getByText('Rendering test'))
  })

  it('Animate true', () => {
    renderComponent('Rendering test', true)

    expect(screen.getByText('Rendering test'))
  })

  it('Animate false', () => {
    renderComponent('Rendering test', false)

    expect(screen.getByText('Rendering test'))
  })
})
