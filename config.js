/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
   * No Enc? Ga Dijual Om 🤣
   * Gausah Reupload Kontol!
   * */

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner2}`,`${setting.nomerowner3}`] //Kalo Mau Lebih Tambahin Aja Dari Setting.json nya
    global.packname = `${setting.namaowner}`
    global.author = `© ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = '⭔'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: '*Ciuh, Najiz Sok Admin Padalah Member🗿*',
    botAdmin: '*Anu Jadiin Bot Admin Napa😴*',
    owner: '*Lu Tinggal Make Jan Pake MenuOwner😉*',
    group: '*Di Grup Bisanya😗*',
    private: '*Chat Pribadi Jan Disini🤭*',
    bot: '*KHUSUS PENGGUNA NOMER BOT*',
    wait: '*Tunggu Banh ...*',
    done: '*Nih Dasar Kuota Chat🗿*',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
