import { API } from '../api'
import sendpulse from 'sendpulse-api'

interface ITinderRequest {
  from: string
  to: string
}

class SendLikeService {
  async execute({ from, to }: ITinderRequest) {
    const API_USER_ID = '69409b2579f2c9b24b19aeda1de1cdde'
    const API_SECRET = '66c870606c232cabeef6da941e803f35'
    const TOKEN_STORAGE = '/tmp/'

    sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, () =>
      console.log('SMTP Initialized')
    )

    const data = await API()

    const from_user = data.filter(user => user.email.value === from)
    const to_user = data.filter(user => user.email.value === to)

    if (from_user.length === 0 || to_user.length === 0) {
      throw new Error('Usuário(s) não encontrado(s)')
    }

    const email = {
      html: `<p>Olá, <b>${to_user[0].firstname.value}</b>!</p><p>Aqui é a Sonza passando para avisar que você acabou de receber um like de <b>${from_user[0].firstname.value}</b> no Tinder dos <b>#MeusDoce22</b>! ✨</p><p>Para entrar em contato, <a href="https://www.instagram.com/${from_user[0].instagram.value}" target="_blank"><b>clique aqui</b></a> para acessar seu <b>Instagram</b> ou envie uma mensagem via <b>Whatsapp</b> <a href="https://api.whatsapp.com/send/?phone=55${from_user[0].phone.value}" target="_blank"><b>clicando aqui</b></a>.</p><p>Para participar também, <a href="https://jvwasquevite.com/doce22/tinder"><b>clique aqui</b></a> e prospecte muita gente bonita para os <b>#MeusDoce22</b>! 🔥</p><p>Com amor, <b>Luísa Sonza</b>. 💛</p>`,
      subject: `${from_user[0].firstname.value} curtiu você!`,
      from: {
        name: 'Luísa Sonza',
        email: 'joao@jvwasquevite.com',
      },
      to: [
        {
          name: to_user[0].firstname.value,
          email: to,
        },
      ],
    }

    sendpulse.smtpSendMail(data => response(data), email)

    const response = data => {
      return data
    }
  }
}

export { SendLikeService }
