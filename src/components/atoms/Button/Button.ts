import styled from '@xstyled/styled-components'

const Button = styled.buttonBox`
  transition: background-color 80ms ease;

  &:active {
    background-color: buttonActive;
  }
`

export default Button
