import crypto from 'crypto'
import os from 'os'
import path from 'path'

export function createTmpDir() {
  return path.join(os.tmpdir(), crypto.randomBytes(20).toString('hex'))
}