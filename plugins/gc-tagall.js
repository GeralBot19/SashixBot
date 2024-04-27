let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐒𝐚𝐬𝐡𝐢𝐱 +𝟓𝟒𝟐𝟔𝟒𝟓𝟒𝟏𝟖𝟓𝟏𝟖 🦇 (𝐑𝐞𝐜𝐥𝐚𝐦𝐨𝐬 𝐲 𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐚𝐬)  ${pesan}`
let teks = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME 
🩷 𝐋𝐢𝐬𝐭𝐚 𝐒𝐚𝐬𝐡𝐢𝐱 𝐁𝐨𝐭 🩷  \n\n ${oi}\n\n 🦇 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 𝐒𝐀𝐒𝐇𝐈𝐗 🦇 \n`
for (let mem of participants) {
teks += `👨🏻‍💻💙≽ @${mem.id.split('@')[0]}\n`}
teks += `🩷 𝐒𝐚𝐬𝐡𝐢𝐱 𝐁𝐨𝐭 🩷 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
