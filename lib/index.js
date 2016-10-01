const COLORS = {
  hours: 'red',
  minutes: 'green',
  hoursAndMinutes: 'blue',
  empty: 'white'
}

function ClockElement () {
  this.hasHours = false
  this.hasMinutes = false
  this.markForHours = function () {
    this.hasHours = true
  }
  this.markForMinutes = function () {
    this.hasMinutes = true
  }
  this.getColor = function () {
    if (this.hasHours && this.hasMinutes)
      return COLORS.hoursAndMinutes
    if (this.hasHours)
      return COLORS.hours
    if (this.hasMinutes)
      return COLORS.minutes

    return COLORS.empty
  }
}

module.exports = {
  objects: {
    ClockElement: ClockElement
  }
}
