
/**
 * <type>(<scope>): <subject>
 */
const msgPath = process.env.GITT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRegexp = /^(revert:)?(feat|fix|docs|style|refactor|test|chore|perf|build|ci)(\(.+\))?: .{1, 50}/

if(!commitRegexp.test(msg)) {
  console.log()
  console.error(
    `invalid commit message format.`
  )
  console.error(
    `for example: feat(page): add new feature`
  );
  process.exit(1)
}