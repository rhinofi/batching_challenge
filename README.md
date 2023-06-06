# RhinoFi backend challenge

## Batching challenge
The goal of this exercise is as follows:
* Read a CSV file (check `records.csv` for format)
* Parse the records and use `SIZE_MAPPINGS` to convert each character to a weight, sum them up per row to get the total weight of the row
* Group rows sequentially by how many can fit within the `maxSize`
* Optional improvement: entire CSV file cannot file within memory ensure the logic can handle such a case

## Example
```
MAX_SIZE = 30
SIZE_MAPPINGS = {
  A: 4,
  B: 5,
  C: 6,
  D: 7,
}

CSV
0,D:D:C     --> value = 20
1,B:B       --> value = 10
2,D:D:B:B   --> value = 24

Expected result
[
  [0, 1],
  [2],
]
```