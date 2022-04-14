const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

bot.hears(/github/i, ctx => ctx.reply('https://github.com/LowC0ff'))

bot.startPolling()
