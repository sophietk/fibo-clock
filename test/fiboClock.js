const chai = require('chai')
const fiboClock = require('../lib')

chai.should()

describe('fiboClock', function () {
  describe('getClockForTime', function () {
    it('should return clock with one element marking hours', function () {
      fiboClock.getClockForTime(new Date('1/10/16 15:00')).should.deep.equal([
        'white', 'white', 'white', 'red', 'white'
      ])
    })
    it('should return clock with one element marking minutes', function () {
      fiboClock.getClockForTime(new Date('1/10/16 00:07')).should.deep.equal([
        'white', 'green', 'white', 'white', 'white'
      ])
    })
    it('should return clock with several elements marking minutes', function () {
      fiboClock.getClockForTime(new Date('1/10/16 00:59')).should.deep.equal([
        'white', 'green', 'green', 'green', 'green'
      ])
    })
    it('should return clock with several elements marking hours & minutes', function () {
      fiboClock.getClockForTime(new Date('1/10/16 14:21')).should.deep.equal([
        'white', 'green', 'red', 'green', 'white'
      ])
    })
  })
})
