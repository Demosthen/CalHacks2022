// import {hmSensor} from "hmSensor";
import {Stress} from '@zos/sensor';
var stress = null;
App({
  globalData: {},
  onCreate(options) {
    console.log('app on create invoke')
    const stress_ = new Stress() //Stress.createSensor(hmSensor.id.STRESS)
    stress = stress_
    const {value} = stress.getCurrent()
    console.log(value)
    console.log("aaaaaaaaa")

    const interval = setInterval(function() {
      const {value} = stress.getCurrent()
      console.log(value)
    }, 5000)
  },

  onDestroy(options) {
    console.log('app on destroy invoke')
  }
})
 