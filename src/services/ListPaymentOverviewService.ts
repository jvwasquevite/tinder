import { API } from '../api'

class ListPaymentOverviewService {
  async execute() {
    const guests = await API()

    const stats = {
      tickets_sold: guests.filter(guest => guest.pago.value === 'true').length,
      remaining_tickets:
        200 - guests.filter(guest => guest.pago.value === 'true').length,
      total_sales:
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$30'
        ).length *
          30 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$35'
        ).length *
          35 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$40'
        ).length *
          40 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$60'
        ).length *
          60 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$55'
        ).length *
          55 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$50'
        ).length *
          50,
      total_profit:
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$30'
        ).length *
          5 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$35'
        ).length *
          10 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$40'
        ).length *
          15 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$60'
        ).length *
          35 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$55'
        ).length *
          30 +
        guests.filter(
          guest => guest.pago.value === 'true' && guest.lote.value === 'R$50'
        ).length *
          25,
      openbar_sales:
        guests.filter(guest => guest.pago.value === 'true').length * 25,
    }

    return stats
  }
}

export { ListPaymentOverviewService }
