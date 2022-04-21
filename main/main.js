const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const moment = require('moment')

bot.start(ctx => {
    const from = ctx.update.message.from
    const firstName = ctx.update.message.from.first_name
    const lastName = ctx.update.message.from.last_name

    ctx.reply(`Hello, ${firstName} ${lastName}!`)
})

bot.hears(/lillyan/i, ctx => ctx.reply('eu lhe avisei que ela não é de confiança...'))
bot.hears(/conselho/i, ctx => ctx.reply('foi bom porque agora você vai ter a prova que ela não é confiável'))

bot.hears(/github/i, ctx => ctx.reply('https://github.com/LowC0ff'))

bot.startPolling()