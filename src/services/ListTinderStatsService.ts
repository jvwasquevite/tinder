import { API } from '../api'

class ListTinderStatsService {
  async execute() {
    const data = await API()

    const users = data.filter(user => user.tinder.value === 'true')

    const stats = {
      users: users.length,
      gender: {
        men: users.filter(user => user.genero.value === 'Masculino').length,
        woman: users.filter(user => user.genero.value === 'Feminino').length,
        other: users.filter(user => user.genero.value === 'Outro').length,
      },
      relationship_status: {
        closed: users.filter(
          user =>
            user.status_de_relacionamento.value ===
            'Em um relacionamento fechado'
        ).length,
        open: users.filter(
          user =>
            user.status_de_relacionamento.value ===
            'Em um relacionamento aberto'
        ).length,
        curled: users.filter(
          user => user.status_de_relacionamento.value === 'Enrolado/a'
        ).length,
        single: users.filter(
          user => user.status_de_relacionamento.value === 'Solteiro/a'
        ).length,
      },
      sexual_orientation: {
        gay: users.filter(user => user.orientacao_sexual.value === 'Gay')
          .length,
        bi: users.filter(
          user => user.orientacao_sexual.value === 'Bi/Bi de Festa'
        ).length,
        hetero: users.filter(user => user.orientacao_sexual.value === 'Hétero')
          .length,
        outro: users.filter(user => user.orientacao_sexual.value === 'Outro')
          .length,
      },
    }

    return stats
  }
}

export { ListTinderStatsService }
