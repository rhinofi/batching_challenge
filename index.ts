/*
  Backend live exercise
  The goal is as follows:
   - Read a CSV file (check records.csv for format)
   - Group the elemtnts sequantially in batches based on max size
   - Optional improvement: entire CSV file cannot file within memory
      ensure the logic can handle such a case
*/

const SIZE_MAPPING = {
  A: 4,
  B: 5,
  C: 6,
  D: 7,
}


/**
 * Batch the records by ids depending on the maxSize
 */
export default (filename: string, maxSize: number): number[][] => {

  // read and parse the csv file
  // group the records sequentially into lists that fit within
  // the max size, size of each record is the sum of all its chars
  // according to SIZE_MAPPING
  return [[]]
}
