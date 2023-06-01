module.exports = {
  testEnvironment: 'node',
  coverageReporters: [
    'html'
  ],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  testTimeout: 30000
}
