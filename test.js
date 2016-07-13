import test from 'ava'
import cp from 'child_process'

test.cb('returns data with a valid url', t => {
  t.plan(1)

  cp.execFile('./index.js', ['johnotander.com'], (_err, stdout) => {
    t.regex(stdout, /Domain Name/)
    t.end()
  })
})

test.cb('errors data without a valid url', t => {
  t.plan(1)

  cp.execFile('./index.js', ['foo'], (_err, _stdout, stderr) => {
    t.regex(stderr, /Please provide a valid url/)
    t.end()
  })
})
