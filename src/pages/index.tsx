import { GetServerSideProps } from 'next'

import Translate, { AvailableLocaleKeys } from 'components/Translate'

import CodeBrackets from 'assets/svg/code-brackets.svg'

type HomeProps = {
  currentLocale: AvailableLocaleKeys
}

const Home = ({ currentLocale }: HomeProps) => (
  <>
    <Translate identifier='welcome-home-page' locale={currentLocale} />
    <CodeBrackets />
  </>
)

export const getStaticProps: GetServerSideProps = async context => {
  return {
    props: { currentLocale: context.locale ?? context.defaultLocale },
  }
}

export default Home
