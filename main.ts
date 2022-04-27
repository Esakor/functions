input.onPinPressed(TouchPin.P0, function () {
    f3(player, -1)
})
function f3 (sprite: game.LedSprite, num: number) {
    sprite.change(LedSpriteProperty.X, num)
}
input.onButtonPressed(Button.A, function () {
    f2(player, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(add(number))
})
input.onButtonPressed(Button.B, function () {
    f2(player, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    f3(player, 1)
})
function f2 (sprite: game.LedSprite, num: number) {
    sprite.change(LedSpriteProperty.Y, num)
}
function add (num: number) {
    return num + 2
}
let number = 0
let player: game.LedSprite = null
player = game.createSprite(2, 0)
number = 17
