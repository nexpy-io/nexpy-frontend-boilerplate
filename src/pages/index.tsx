import styled from '@xstyled/styled-components'

type Home = {
  temp: string
}

const Home = ({ temp }: Home) => <Text>{temp}</Text>

const Text = styled.pBox`
  color: blue;
`

export default Home
