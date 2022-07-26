export const parseUTCDate = (apiDate) => {
  const utcDate = apiDate.split('')
  utcDate.splice(4, 0, '-')
  utcDate.splice(7, 0, '-')
  utcDate.splice(13, 0, ':')
  utcDate.splice(16, 0, ':')
  return new Date(utcDate.join(''))
}
// Const pour tchek les minute
export const getFullMinutes = (date) => {
  // on return l'Affichage des minutes si il et plus petit que 10
  if (date.getMinutes() < 10) {
    return `0${date.getMinutes()}`
  }
  // Tu me retourne les minutes normal
  return date.getMinutes()
}

export const calculateDelay = (baseDepartureTime, realDepartureTime) => {
  if (baseDepartureTime.getTime() !== realDepartureTime.getTime()) {
    const minutesDelay =
      (realDepartureTime.getTime() - baseDepartureTime.getTime()) / (1000 * 60)

    if (minutesDelay >= 60) {
      return `retard ${Math.floor(minutesDelay / 60)} h ${minutesDelay % 60}`
    }
    return `retard ${minutesDelay} min`
  }
  return "à l'heure"
}
