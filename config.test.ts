import { ESLint } from 'eslint'

function getESLintConfig(filePath: string): Promise<unknown> {
  const eslint = new ESLint({})

  return eslint.calculateConfigForFile(filePath)
}

describe('ESLint configuration', () => {
  const files = ['./index.cjs', './react.cjs']

  it.each(files)('should return a configuration for %s', async (filePath) => {
    const config = await getESLintConfig(filePath)
    expect(config).toMatchSnapshot()
  })
})
