import path from 'path'
import webpack from 'webpack'
import MemoryFileSystem from "memory-fs"

export function createWebpackCompiler(context, test=/\.js|jsx|ts|tsx$/) {
  return function createWebpackCompiler(entry, use) {
    const compiler = webpack({
      context,
      entry,
      output: {
        path: path.resolve(context),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test,
            use
          }
        ]
      }
    });
    compiler.outputFileSystem  = new MemoryFileSystem();
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) reject(err)
        resolve(stats)
      });
    })
  }
}