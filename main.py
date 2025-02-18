def on_logo_pressed():
    while input.is_gesture(Gesture.SCREEN_DOWN):
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.pause(500)
        if input.is_gesture(Gesture.SCREEN_UP):
            basic.show_icon(IconNames.YES)
            break
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    music.play(music.string_playable("G F G A G F E D ", 120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    for index in range(10):
        basic.show_leds("""
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            """)
        basic.pause(500)
        basic.show_leds("""
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            . . . . .
            """)
        basic.pause(500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_leds("""
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    basic.pause(500)
    basic.show_leds("""
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        """)
    basic.pause(500)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.SMALL_HEART)
    basic.pause(100)
    basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("Hello Word!")