export const useDate = () => {
  const formatDateInSpanish = (date: Date) => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    }
    return new Intl.DateTimeFormat('es-ES', options).format(new Date(date))
  }

  return {
    formatDateInSpanish
  }
}
