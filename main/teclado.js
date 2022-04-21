const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)

const tecladoTest= Markup.keyboard([
    [bottom1],
    [bottom2],
    [bottom3]
]).resize().extra()

bot.start(async ctx => {
    await ctx.reply('qual bebida você prefere?')
       Markup.keyboard(['coca', 'pepsi']).resize().oneTime().extra()
})

bot.hears(['coca', 'pepsi'], async ctx => {
    await ctx.reply(`Ai sim, gosto de ${ctx.match} também`)
    await ctx.reply('escolha um botão', tecladoTest)
})

bot.hears('bottom1', ctx => ctx.reply('você teclou no botão 1'))
bot.hears('bottom2', ctx => ctx.reply('você teclou no botão 2'))
bot.hears('bottom3', ctx => ctx.reply('você teclou no botão 3'))

bot.startPolling()