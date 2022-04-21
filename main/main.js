const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const moment = require('moment')

bot.start(ctx => {
    const from = ctx.update.message.from
    const firstName = ctx.update.message.from.first_name
    const lastName = ctx.update.message.from.last_name

    let idAcess = env.idList.filter(from.id)

    if (from.id == idAcess) {
        ctx.reply('Access denied. Contact my master')
        console.log(from)
    }
    else ctx.reply(`Hello,${firstName} ${lastName}! Please select language`)
})

bot.hears(/github/i, ctx => ctx.reply('https://github.com/LowC0ff'))

bot.startPolling()