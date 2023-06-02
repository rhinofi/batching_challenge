import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      // Use test specific tsconfig, in case we want to
      // use different config for tests and build.
      { tsconfig: './tsconfig.json' },
    ],
  },
  clearMocks: true,
}

export default config
