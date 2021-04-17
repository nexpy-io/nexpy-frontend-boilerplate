import styled from '@xstyled/styled-components'

type HomeProps = {
  temp: string
}

const Text = styled.pBox`
  color: blue;
`

const Home = ({ temp }: HomeProps) => <Text>{temp}</Text>

export default Home
