input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        CONTADOR_em_letras_minusculas += -1
        basic.showNumber(CONTADOR_em_letras_minusculas)
        basic.pause(1000)
    }
    if (CONTADOR_em_letras_minusculas == 0) {
        basic.showIcon(IconNames.Angry)
        for (let index = 0; index < 10; index++) {
            music.play(music.stringPlayable("G F G F G F G F ", 400), music.PlaybackMode.UntilDone)
        }
    }
})
let CONTADOR_em_letras_minusculas = 0
CONTADOR_em_letras_minusculas = 10
basic.showNumber(CONTADOR_em_letras_minusculas)
