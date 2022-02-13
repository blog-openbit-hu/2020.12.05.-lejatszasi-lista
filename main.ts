let list: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let rNum = 0;
let listSize = 9;
input.onButtonPressed(Button.A, function () {
    if (list.length != 0) {
        rNum = randint(0, listSize);
        basic.showNumber(list.removeAt(rNum));
        listSize = listSize - 1;
    } else {
        basic.showString("No more numbers!");
    }
})
