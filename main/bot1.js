const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    const firstName = ctx.update.message.from.first_name
    const lastName = ctx.update.message.from.last_name

    if (from.id != env.myId) {
        ctx.reply(`Desculpa, ${firstName} ${lastName}, só falo com o Sr. LowC0ff...`)
    }
    else ctx.reply(`Olá Sr. ${firstName} ${lastName} Como posso lhe ser útil?`)

    console.log(from)
})

bot.startPolling()