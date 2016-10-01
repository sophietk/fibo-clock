const chai = require('chai')
const objects = require('../lib/index.js').objects
const ClockElement = objects.ClockElement

chai.should()

describe('ClockElement', function () {
  describe('getColor', function () {
    it('should return default element color', function () {
      const element = new ClockElement()
      element.getColor().should.equal('white')
    })

    it('should return `red` color if hours only', function () {
      const element = new ClockElement()
      element.markForHours()
      element.getColor().should.equal('red')
    })

    it('should return `green` color if minutes only', function () {
      const element = new ClockElement()
      element.markForMinutes()
      element.getColor().should.equal('green')
    })

    it('should return `blue` color if hours & minutes', function () {
      const element = new ClockElement()
      element.markForHours()
      element.markForMinutes()
      element.getColor().should.equal('blue')
    })
  })
})
