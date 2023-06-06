import { describe, it, expect } from '@jest/globals'
import batchRecords from '.'

const testFilename = 'records.csv'

describe('CSV file reader can batch records', () => {
  it('Correctly batches the given file', async () => {
    const batches = batchRecords(testFilename, 30)
    expect(batches).toEqual([[0, 1], [2], [3], [4, 5], [6, 7, 8], [9]])
  })

  it('If max size is too low to fit any element, exception is thrown', async () => {
    try {
      batchRecords(testFilename, 3)
    } catch (error) {
      expect(error).toBe('Max size cannot fit some row')
    }
  })
})
