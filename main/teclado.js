const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)