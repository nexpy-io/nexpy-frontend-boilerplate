import { Flex, Text } from '@nexpy/design-system'
import { useTranslate } from 'hooks'

import StarLink from 'components/icons/StarLink'

const Offline = () => {
  const { t } = useTranslate()

  return (
    <Flex flexDirection='column' variant='center' minHeight='42.5vh' mt='2.4rem'>
      <Flex variant='center' flexDirection='column' gap='2.4rem'>
        <StarLink />
        <Text maxWidth={{ _: '20rem', lg: '40rem' }} textAlign='center'>
          {t('internal.dialog.offline')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Offline
