export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 20) {
            if (this.spam[m.sender].count > 20) {
                //global.db.data.users[m.sender].banned = true
             
    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😱', '🦧', '🙄', '🐒','🗿','🤨','😐'])}`,
            key: m.key,
          }})
          
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}