const path = require('path')
const { getBabelOutputPlugin } = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const resolverootPath = p => path.resolve(__dirname, p)

const packagesDir = resolverootPath('packages');
const babelConfig = resolverootPath('babel.config.js')
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const resolvePackage = p => path.resolve(packageDir, p);
const pkg = require(resolvePackage('package.json'))

function createInputOptions() {
  const inputOptions = {
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
      ...['path', 'os', 'crypto', 'fs']
    ],
    plugins: [
      json(),
      nodeResolve(),
      commonjs({
        sourceMap: false
      }),
      require('rollup-plugin-node-builtins')(),
      getBabelOutputPlugin({
        configFile: babelConfig
      })
    ]
  };
  return inputOptions;
}

function createOutputOptions() {
  const outputOptions = {
    file: resolvePackage('dist/index.js'),
    format: 'cjs'
  }
  return outputOptions;
}

function createConfig() {
  return {
    input: resolvePackage('src/index.js'),
    ...createInputOptions(),
    output: createOutputOptions()
  }
}

export default createConfig();