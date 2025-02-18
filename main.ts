input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (input.isGesture(Gesture.ScreenDown)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
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
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        if (input.isGesture(Gesture.ScreenUp)) {
            basic.showIcon(IconNames.Yes)
            break;
        }
    }
})
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
if (randint(0, 2) < 1) {
    basic.showString("Hello Word!")
} else {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
