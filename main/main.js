const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    const firstName = ctx.update.message.from.first_name
    const lastName = ctx.update.message.from.last_name

    if (from.id != env.idList) {
        ctx.reply('Access denied. Contact my master')
        console.log(from)
    }
    else ctx.reply(`Hello,${firstName} ${lastName}! Please select language`)
})

bot.startPolling()