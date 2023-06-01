#!/usr/bin/env node

const fs = require('fs')
const R = require('ramda')

const filename = 'records.csv'
const ROWS_COUNT = 10
const CHAR_LIMIT = 5

// Create a random csv file with the following:
const chars = 'ABCD'.split('')

const random = (limit, min = 0) => Math.max(min, Math.floor(Math.random() * limit))
const randomChar = () => chars[random(chars.length)]

const makeChars = R.pipe(
  R.times(randomChar),
  R.join(':')
)

const makeRecords = R.pipe(
  R.times(R.identity),
  R.map(
    (index) => [
      index,
      makeChars(random(CHAR_LIMIT, 1))
    ]
  ),
  R.map(R.join(',')),
  R.join('\n')
)

fs.writeFileSync(
  filename,
  makeRecords(ROWS_COUNT)
)
