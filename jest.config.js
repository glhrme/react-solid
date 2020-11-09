module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}',
    '<rootDir>/src/**/**/*.{ts, tsx}',
    '<rootDir>/src/**/**/**/*.{ts, tsx}',
    '!<rootDir>/src/setupTests.{ts, tsx}',
    '!<rootDir>/src/**/*.d.{ts, tsx}',
    '!<rootDir>/src/reportWebVitals.{ts, tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  modulePaths: [
    "<rootDir>/src"
  ],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy'
  }
}
