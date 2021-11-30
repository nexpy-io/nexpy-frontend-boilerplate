import { useTranslate } from 'hooks'

import Div from 'components/atoms/Div'
import P from 'components/atoms/P'

const Offline = () => {
  const { t } = useTranslate()

  return (
    <Div
      display='flex'
      justifyContent='center'
      alignItems='center'
      w='100vw'
      h='100vh'
      p='46px'
      flexDirection='column'
    >
      <P as='h1' fontSize='3rem' textAlign='center'>
        Oops...
      </P>
      <P mt='8px' as='h2' textAlign='center' maxWidth='400px'>
        {t('internal.offline')}
      </P>
    </Div>
  )
}

export default Offline
