var stress = null
var music = null
App({
  globalData: {},
  onCreate(options) {
    const stress_ = hmSensor.createSensor(hmSensor.id.STRESS)
    const music_ = hmSensor.createSensor(hmSensor.id.MUSIC)
    stress = stress_
    music = music_
    music.audInit()
    music.audPlay()
    console.log(stress.current)
    console.log(stress.time)
    console.log('app on create invoke')

    const interval = setInterval(function() {
      const value = stress.current
      console.log(value)
    }, 5000)
    const interval2 = setInterval(function() {
      music.audPause()
    }, 5000)
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
  }
})
