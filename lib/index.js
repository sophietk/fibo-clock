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
  this.getFiboValue = (() => fiboValue)
  this.setFiboValue = ((newFiboValue) => {
    fiboValue = newFiboValue
    return this
  })
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

function getClockForTime (time) {
  let hoursLeft = time.getHours() % 12
  let minutesLeft = time.getMinutes()

  return [1, 1, 2, 3, 5]
    .reverse()
    .map((fiboValue) => new ClockElement().setFiboValue(fiboValue))
    .map((clockElement) => {
      if (hoursLeft >= clockElement.getFiboValue()) {
        clockElement.markForHours()
        hoursLeft -= clockElement.getFiboValue()
      }
      if (minutesLeft / 5 >= clockElement.getFiboValue()) {
        clockElement.markForMinutes()
        minutesLeft -= clockElement.getFiboValue() * 5
      }
      return clockElement
    })
    .map((clockElement) => clockElement.getColor())
    .reverse()
}

const fiboClock = {
  getClockForTime: getClockForTime,
  objects: {
    ClockElement: ClockElement
  }
}

// Exports
module.exports = fiboClock
