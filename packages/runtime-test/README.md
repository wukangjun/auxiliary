# `runtime-test`

> TODO: 为了提供测试公用方法

## Usage

```
import { createWebpackCompiler } from '@auxiliary/runtime-test'

describe('测试套件', () => {
  const compiler = createWebpackCompiler(__dirname);
  it('测试用例1', async () => {
    const stats = await compiler('path/to/needtest.js');
    expect(stats.toJson().modules[0].source).toBe('your code');
  })
})
```

## 参考
- [loader测试](https://www.webpackjs.com/contribute/writing-a-loader/#%E6%B5%8B%E8%AF%95)