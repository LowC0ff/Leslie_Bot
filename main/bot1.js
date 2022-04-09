const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from

    if (from.id != env.myId) {
        ctx.reply(`Desculpa, ${from.first_name} ${from.last_name}, só falo com o Sr. LowC0ff...`)
    }
    else ctx.reply(`Olá Sr. ${from.first_name} ${from.last_name} Como posso lhe ser útil?`)

    console.log(from)
})

bot.startPolling()