const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')


const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

var _0xb2c7=["\x20","\x43\x20","\x43\x20\x4F\x20","\x43\x20\x4F\x20\x4E\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20\x49\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20\x49\x20\x4E\x20","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20\x49\x20\x4E\x20\x47","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20\x49\x20\x4E\x20\x47\x20\x2E","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20\x49\x20\x4E\x20\x47\x20\x2E\x2E","\x43\x20\x4F\x20\x4E\x20\x4E\x20\x45\x20\x43\x20\x54\x20\x49\x20\x4E\x20\x47\x20\x2E\x2E\x2E"];const spinner={"\x69\x6E\x74\x65\x72\x76\x61\x6C":150,"\x66\x72\x61\x6D\x65\x73":[_0xb2c7[0],_0xb2c7[0],_0xb2c7[0],_0xb2c7[1],_0xb2c7[2],_0xb2c7[3],_0xb2c7[4],_0xb2c7[5],_0xb2c7[6],_0xb2c7[7],_0xb2c7[8],_0xb2c7[9],_0xb2c7[10],_0xb2c7[10],_0xb2c7[11],_0xb2c7[12],_0xb2c7[13]]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }
 
var _0xcb35=["\x53\x59\x4B\x53\x45\x53\x0A\x42\x4F\x54\x20\x57\x41","\x73\x6C\x69\x63\x6B","\x73\x79\x73\x74\x65\x6D","\x6C\x65\x66\x74","\x72\x65\x64","\x77\x68\x69\x74\x65","\x72\x65\x6E\x64\x65\x72","\x42\x59\x20\x4D\x55\x48\x41\x4D\x4D\x41\x44\x20\x49\x4C\x48\x41\x4E\x0A\x48\x20\x41\x20\x4E\x20\x4E\x20\x20\x53\x20\x59\x20\x4B\x20\x45\x20\x53\x0A\x0A\x2D\x20\x49\x6E\x73\x74\x61\x67\x72\x61\x6D\x20\x3A\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x69\x6E\x73\x74\x61\x67\x72\x61\x6D\x2E\x63\x6F\x6D\x2F\x6D\x75\x68\x6D\x64\x69\x6C\x68\x61\x6E\x5F\x0A\x2D\x20\x59\x6F\x75\x74\x75\x62\x65\x20\x3A\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x2F\x48\x61\x6E\x6E\x53\x79\x6B\x65\x73\x0A\x2D\x20\x47\x69\x74\x68\x75\x62\x20\x3A\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x48\x61\x6E\x6E\x53\x79\x6B\x65\x73","\x63\x6F\x6E\x73\x6F\x6C\x65"];const banner=cfonts[_0xcb35[6]]((_0xcb35[0]),{font:_0xcb35[1],color:_0xcb35[2],align:_0xcb35[3],gradient:[_0xcb35[4],_0xcb35[5]],lineHeight:2});const ilhanstart=cfonts[_0xcb35[6]]((_0xcb35[7]),{font:_0xcb35[8],color:_0xcb35[2],align:_0xcb35[3],gradient:[_0xcb35[4],_0xcb35[5]],lineHeight:0})



module.exports = { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, ilhanstart, close }
