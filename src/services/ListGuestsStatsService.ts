import { API } from '../api'

class ListGuestsStatsService {
  async execute() {
    const guests = await API()

    const stats = {
      guests: guests.length,
      tinder_users: guests.filter(guest => guest.tinder.value === 'true')
        .length,
      gender: {
        men: guests.filter(guest => guest.genero.value === 'Masculino').length,
        woman: guests.filter(guest => guest.genero.value === 'Feminino').length,
        other: guests.filter(guest => guest.genero.value === 'Outro').length,
      },
      relationship_status: {
        closed: guests.filter(
          guest =>
            guest.status_de_relacionamento.value ===
            'Em um relacionamento fechado'
        ).length,
        open: guests.filter(
          guest =>
            guest.status_de_relacionamento.value ===
            'Em um relacionamento aberto'
        ).length,
        curled: guests.filter(
          guest => guest.status_de_relacionamento.value === 'Enrolado/a'
        ).length,
        single: guests.filter(
          guest => guest.status_de_relacionamento.value === 'Solteiro/a'
        ).length,
      },
      sexual_orientation: {
        gay: guests.filter(guest => guest.orientacao_sexual.value === 'Gay')
          .length,
        bi: guests.filter(
          guest => guest.orientacao_sexual.value === 'Bi/Bi de Festa'
        ).length,
        hetero: guests.filter(
          guest => guest.orientacao_sexual.value === 'Hétero'
        ).length,
        outro: guests.filter(guest => guest.orientacao_sexual.value === 'Outro')
          .length,
      },
    }

    return stats
  }
}

export { ListGuestsStatsService }
