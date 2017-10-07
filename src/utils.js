export function toDateString (date) {
  return date.toISOString().slice(0, 10)
}

export function todayIfEmpty (dateString) {
  return dateString || toDateString(new Date())
}

export function lowestDate (a, b) {
  return new Date(a) < new Date(b) ? a : b
}

export function highestDate (a, b) {
  return new Date(a) > new Date(b) ? a : b
}

export function findFirstMonday (year) {
  let date = new Date(year, 0, 1)

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() + 1)
  }

  return date
}

export function generateId () {
  return 'RG' + (Math.floor(Math.random() * 1e15) + 1e12).toString(36)
  .replace(/i|o/, '').substring(0, 3).toUpperCase()
}

/**
 * Calculate Epi Week of the given date.
 * The first Epi Week of the year is the week starting with the first Monday of
 * the year.
 * */
export function calculateEpiWeek (dateString) {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return
  const weekLength = 7 * 24 * 60 * 60 * 1000
  let firstMonday = findFirstMonday(date.getFullYear())

  // Search starting from last year for the first days of the year
  if (date < firstMonday) {
    firstMonday = findFirstMonday(date.getFullYear() - 1)
  }

  return Math.floor((date - firstMonday) / weekLength) + 1
}

export function filterCases (user) {
  return (doc) => {
    if (user.user === doc.user) {
      return true
    } else if (user.facility) {
      return user.facility === doc.registrationInfo.reportingFacility
    } else if (user.district) {
      return user.district === doc.registrationInfo.reportingDistrict
    } else if (user.county) {
      return user.county === doc.registrationInfo.reportingCounty
    } else {
      return false
    }
  }
}

export function getValueFromProps (props) {
  return prop => props[prop]
}

export function optionsMapper (valueProp, nameProp = 'name') {
  return (option) => ({
    name: option[nameProp],
    value: option[valueProp]
  })
}
