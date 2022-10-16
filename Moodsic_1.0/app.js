hmApp.setScreenKeep(true)
var logger = DeviceRuntimeCore.HmLogger.getLogger("HelloWorld")
var stress = null
var music = null
var is_happy_music = false
var current_title = null
var last_heart_rate = -64543
App({
  globalData: {},
  onCreate(options) {
    
    stress = hmSensor.createSensor(hmSensor.id.HEART)
    music = hmSensor.createSensor(hmSensor.id.MUSIC)
    const hrCurrListener = function () {
      console.log(stress.last)
    }
    stress.addEventListener(stress.event.CURRENT, hrCurrListener)
    music.audInit()
    music.audPlay()
    console.log(stress.current)
    // console.log(stress.time)
    console.log('app on create invoke')
  
    const interval = setInterval(function() {
      const value = stress.last
      console.log(value)
      logger.log("Current song title is ", current_title)
      if (current_title !== null) {
        if (music.title !== current_title) {
          is_happy_music = !is_happy_music
        }
      }

      current_title = music.title
      console.log(typeof value)
      if (value > 5 ) {
        // high stress, divert
        if (!is_happy_music) {
          logger.log("Song change triggered!", is_happy_music)
          music.audNext()
        }
      }

      last_heart_rate = value
    }, 2000)
    const interval2 = setInterval(function() {
      logger.log("MUAHAHAHAHAHAHAHAHA I changed ur songgggg")
      music.audNext()
      
    }, 30000)
  },


  
  onDestroy(options) {
    console.log('app on destroy invoke')
    stress.removeEventListener(stress.event.CURRENT, hrCurrListener)
  }
})
