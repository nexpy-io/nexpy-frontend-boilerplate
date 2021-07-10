import { useTranslate } from 'hooks'

const Home = () => {
  const { t } = useTranslate()

  return <p>{t('welcome-home-page')}</p>
}

export default Home
