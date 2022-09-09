/* eslint-disable @typescript-eslint/no-explicit-any */
import { slugify } from '../formatters'

describe('Formatters testing', () => {
  it('slugify', () => {
    expect(slugify('slugify test')).toBe('slugify-test')
  })
})
