input.onSound(DetectedSound.Loud, function () {
    palmadas = !(palmadas)
    if (palmadas) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        soundExpression.happy.play()
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        soundExpression.sad.play()
    }
})
let palmadas = false
input.setSoundThreshold(SoundThreshold.Loud, 160)
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(500)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
