const COLORS = {
  hours: 'red',
  minutes: 'green',
  hoursAndMinutes: 'blue',
  empty: 'white'
}

function ClockElement () {
  let hasHours = false
  let hasMinutes = false
  let fiboValue = 1
  this.setFiboValue = function (newFiboValue) {
    fiboValue = newFiboValue
    return this
  }
  this.markForHours = function () {
    hasHours = true
  }
  this.markForMinutes = function () {
    hasMinutes = true
  }
  this.getColor = function () {
    if (hasHours && hasMinutes)
      return COLORS.hoursAndMinutes
    if (hasHours)
      return COLORS.hours
    if (hasMinutes)
      return COLORS.minutes

    return COLORS.empty
  }
}

module.exports = {
  objects: {
    ClockElement: ClockElement
  }
}
