import { API } from '../api'

class ListPaymentService {
  async execute() {
    const guests = await API()

    const stats = {
      confirmed_buyers: guests.filter(guest => guest.pago.value === 'true')
        .length,
      pendent_buyers: guests.filter(guest => guest.pago.value === 'false')
        .length,
      sales: {
        first_lot_30: {
          buyers: guests.filter(
            guest => guest.pago.value === 'true' && guest.lote.value === 'R$30'
          ).length,
          sales:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$30'
            ).length * 30,
          profit:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$30'
            ).length * 5,
        },
        second_lot_35: {
          buyers: guests.filter(
            guest => guest.pago.value === 'true' && guest.lote.value === 'R$35'
          ).length,
          sales:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$35'
            ).length * 35,
          profit:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$35'
            ).length * 10,
        },
        third_lot_40: {
          buyers: guests.filter(
            guest => guest.pago.value === 'true' && guest.lote.value === 'R$40'
          ).length,
          sales:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$40'
            ).length * 40,
          profit:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$40'
            ).length * 15,
        },
        fourth_lot_60: {
          buyers: guests.filter(
            guest => guest.pago.value === 'true' && guest.lote.value === 'R$60'
          ).length,
          sales:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$60'
            ).length * 60,
          profit:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$60'
            ).length * 35,
        },
        fifth_lot_55: {
          buyers: guests.filter(
            guest => guest.pago.value === 'true' && guest.lote.value === 'R$55'
          ).length,
          sales:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$55'
            ).length * 55,
          profit:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$55'
            ).length * 30,
        },
        sixth_lot_50: {
          buyers: guests.filter(
            guest => guest.pago.value === 'true' && guest.lote.value === 'R$50'
          ).length,
          sales:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$50'
            ).length * 50,
          profit:
            guests.filter(
              guest =>
                guest.pago.value === 'true' && guest.lote.value === 'R$50'
            ).length * 25,
        },
      },
    }

    return stats
  }
}

export { ListPaymentService }
