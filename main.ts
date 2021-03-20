radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        if (state == 0) {
            radio.sendNumber(0)
        } else {
            radio.sendNumber(hand)
            if (hand == receivedNumber) {
            	
            } else if (hand == 1 && receivedNumber == 2 || (hand == 2 && receivedNumber == 3 || hand == 3 && receivedNumber == 1)) {
            	
            } else {
            	
            }
            basic.pause(2000)
            init()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    hand += 1
    if (hand >= 4) {
        hand = 1
    }
    RPS(hand)
})
function init () {
    hand = 1
    state = 0
    basic.showIcon(IconNames.Heart)
}
input.onGesture(Gesture.Shake, function () {
    init()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(hand)
    state = hand
})
input.onButtonPressed(Button.B, function () {
    hand += -1
    if (hand <= 0) {
        hand = 3
    }
    RPS(hand)
})
function RPS (数値: number) {
    if (数値 == 1) {
        basic.showIcon(IconNames.Cow)
    }
    if (数値 == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (数値 == 3) {
        basic.showIcon(IconNames.Chessboard)
    }
}
let hand = 0
let state = 0
radio.setGroup(1)
init()
