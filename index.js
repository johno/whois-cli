#!/usr/bin/env node

'use strict'

const meow = require('meow')
const shtml = require('shtml')
const isUrl = require('is-url')
const whois = require('node-whois')
const isPresent = require('is-present')
const normalizeUrl = require('normalize-url')

const cli = meow(shtml`
  <div>
    <underline>Usage</underline>

    $ whois [url]<br><br>

    <underline>Options</underline>

    -h, --help - Get help menu
    -v, --version - Get the version<br><br>

    <underline>Example</underline>

    $ whois johnotander.com
    $ whois www.google.com
    $ whois -v
    $ whois -h
  </div>
`, {
	alias: {
		v: 'version',
		h: 'help'
	}
})

const url = isPresent(cli.input[0]) && normalizeUrl(cli.input[0])

if (isUrl(url)) {
  whois.lookup(cli.input[0], (err, data) => {
    if (err) {
      console.error(shtml`
        <red>whois-cli encountered an error</red>
      `)
      console.error(err)
    } else {
      console.log(data)
    }
  })
} else {
  console.error(shtml`
    <red>Please provide a valid url</red>
  `)
  process.exit(1)
}
