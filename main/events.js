const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${name}!`)
})

bot.on('text', ctx => {
    const text = ctx.update.message.text
    ctx.reply(`Texto '${text}' recebido com sucesso`)
})

bot.startPolling()