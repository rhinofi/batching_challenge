import { describe, it, expect } from '@jest/globals'
import batchRecords from '.'

describe('CSV file reader can batch records', () => {
  it('Correctly batches the given file', async () => {
    const testFilename = 'records.test.csv'   

    const batches = batchRecords(testFilename, 30)

    expect(batches).toEqual([
      [0, 1],
      [2],
      [3],
      [4, 5],
      [6, 7, 8],
      [9],
    ])
  })

  it('If max size is too low to fit any element, exception is thrown', async () => {
    throw new Error('NOT IMPLEMENTED')
  })
})