import { Flex, Text } from '@nexpy/design-system'
import { useTranslate } from 'hooks'

import ErrorSign from 'components/icons/ErrorSign'

const Error = () => {
  const { t } = useTranslate()

  return (
    <Flex flexDirection='column' variant='center' minHeight='42.5vh' mt='2.4rem'>
      <Flex variant='center' flexDirection='column' gap='2.4rem'>
        <ErrorSign />
        <Text maxWidth={{ _: '20rem', lg: '40rem' }} textAlign='center'>
          {t('internal.dialog.server_error')}
        </Text>
      </Flex>
    </Flex>
  )
}

export default Error
