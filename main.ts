input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G F G A G F E D ", 120), music.PlaybackMode.LoopingInBackground)
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            . . . . .
            `)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(500)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
})
basic.showString("Hello Word!")
