import Image from 'next/image'
import Link from 'next/link'

import { useTranslate } from 'hooks'

import GithubLogo from 'assets/images/logos/GitHub-Mark-120px-plus.png'
import NexpyLogo from 'assets/images/logos/nexpy-logo-square.png'
import World from 'assets/svg/world.svg'

import styles from './Home.module.scss'

const Home = () => {
  const { t, currentLocale } = useTranslate()

  return (
    <>
      <header className={styles.header}>
        {currentLocale === 'pt' ? (
          <Link href='/' locale='en'>
            <a>
              <World />
              <p>en</p>
            </a>
          </Link>
        ) : (
          <Link href='/' locale='pt'>
            <a>
              <World />
              <p>pt</p>
            </a>
          </Link>
        )}
      </header>
      <main className={styles.container}>
        <h1>{t('home.hello')}</h1>
        <section>
          <h2>{t('home.description')}</h2>
          <footer>
            <p>{t('home.use')}</p>
            <div>
              <Link href='https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate'>
                <a target='_blank' rel='noreferrer'>
                  <Image src={GithubLogo} alt='Github Logo' />
                </a>
              </Link>
              <Link href='https://github.com/nexpy-io'>
                <a target='_blank' rel='noreferrer'>
                  <Image src={NexpyLogo} alt='Nexpy Logo' />
                </a>
              </Link>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}

export default Home
