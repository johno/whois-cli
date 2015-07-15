require('shelljs/global')
var assert = require('assert')
var whoisCli = require('..')

describe('whois-cli', function() {

  it('should retrieve whois data', function() {
    var output = exec('./index.js google.com').output
    assert.ok(output)
  })

  it('should provide error text if given an invalid url', function() {
    var output = exec('./index.js foo').output
    assert.equal(output, 'Please provide a valid url\n')
  })
})
