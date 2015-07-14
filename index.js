#!/usr/bin/env node

'use strict'

var meow = require('meow')
var isUrl = require('is-url')
var whois = require('node-whois')

var cli = meow({
  help: [
    'Example',
    '  whois google.com'
  ]
})

whois.lookup(cli.input[0], function(err, data) {
  if (err) {
    console.log('whois-cli encountered an error')
    console.log(err)
  } else {
    console.log(data)
  }
})
