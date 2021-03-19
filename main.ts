input.onButtonPressed(Button.A, function () {
    number += 2
    basic.showString("" + (number))
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showNumber(0)
        basic.showIcon(IconNames.No)
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(1000)
    basic.showString("Game over")
    number = 0
})
input.onButtonPressed(Button.B, function () {
    number += -3
    basic.showString("" + (number))
})
let number = 0
number = 0
basic.showString("" + (number))
