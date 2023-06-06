import fs from 'fs'

const SIZE_MAPPING = {
  A: 4,
  B: 5,
  C: 6,
  D: 7
}

const INDEX_DELIMITER = ','
const SYMBOLS_DELIMITER = ':'

const getRowValue = (symbols: string): number => {
  const symbolsArray = symbols.split(SYMBOLS_DELIMITER)
  return symbolsArray.reduce((acc, symbol) => acc + SIZE_MAPPING[symbol], 0)
}

/**
 * Batch the records by ids depending on the maxSize
 */
export default (filename: string, maxSize: number): number[][] => {
  const file = fs.readFileSync(filename, 'utf8')
  const rows = file.split(/\r?\n/)

  const rowValues: Record<number, number> = {}

  const result = rows.reduce((acc, row) => {
    const [indexString, symbols] = row.split(INDEX_DELIMITER)
    const index = Number(indexString)
    const rowValue = getRowValue(symbols)

    rowValues[index] = rowValue

    if (acc.length === 0) {
      return [[index]]
    }

    const lastBatchValue = acc[acc.length - 1].reduce(
      (acc, index) => acc + rowValues[index],
      0
    )
    if (lastBatchValue === 0 && rowValue > maxSize) {
      throw new Error('Max size cannot fit some row')
    }

    if (lastBatchValue + rowValue <= maxSize) {
      acc[acc.length - 1].push(index)
      return acc
    }

    acc.push([index])
    return acc
  }, [])

  return result
}
