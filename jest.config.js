module.exports = {
  roots: ['<rootDir>/packages'],
  testMatch: [
    "<rootDir>/packages/**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  testEnvironment: 'node',
  transform: {
    "^.+\\.jsx?$": require.resolve('babel-jest'),
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname')
  ]
}