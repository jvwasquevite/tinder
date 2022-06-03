import axios from 'axios'

export async function API() {
  try {
    /**
     * Get request from Hubspot API
     */
    const { data: response } = await axios.get(
      'https://api.hubapi.com/contacts/v1/lists/11/contacts/all?hapikey=14ed68c8-fde2-40c2-809d-05d3fbeca83f&count=250&property=firstname&property=genero&property=phone&property=instagram&property=email&property=photos&property=bio&property=orientacao_sexual&property=status_de_relacionamento&property=tinder&property=lote&property=jobtitle&property=pago',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )

    /**
     * Cleaning unused data from Hubspot API
     */
    const data = response.contacts.map(user => user.properties)

    data.map(user => {
      /**
       * Cleaning relationship status values
       */
      switch (user.status_de_relacionamento.value) {
        case 'solteiro':
          user.status_de_relacionamento.value = 'Solteiro/a'
          break
        case 'enrolado':
          user.status_de_relacionamento.value = 'Enrolado/a'
        case 'relacionamento-aberto':
          user.status_de_relacionamento.value = 'Em um relacionamento aberto'
          break
        case 'relacionamento-fechado':
          user.status_de_relacionamento.value = 'Em um relacionamento fechado'
          break
      }

      /**
       * Cleaning sexual orientation values
       */
      if (user.orientacao_sexual.value === 'Bissexual ⚤') {
        user.orientacao_sexual.value = 'Bi/Bi de Festa'
      } else if (user.orientacao_sexual.value === 'Hétero 🤮') {
        user.orientacao_sexual.value = 'Hétero'
      } else if (user.orientacao_sexual.value === 'Outro') {
        user.orientacao_sexual.value = 'Outro'
      } else {
        user.orientacao_sexual.value = 'Gay'
      }

      // if (user.lote !== undefined) {
      //   user.lote.value = user.lote.value.slice(2, 4)
      // }
    })

    return data
  } catch (error) {
    return error.message
  }
}
