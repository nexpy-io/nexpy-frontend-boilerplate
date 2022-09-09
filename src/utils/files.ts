import crypto from 'crypto'
import { saveAs } from 'file-saver'

import { slugify } from 'utils/formatters'

export const download = (source: string, hash = false) => {
  const fileName = slugify(source.split('/').pop() as string)

  if (hash) {
    saveAs(source, crypto.createHash('sha1').update(fileName).digest('hex'))

    return
  }

  saveAs(source, fileName)
}
