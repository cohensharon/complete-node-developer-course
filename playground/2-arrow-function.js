/*const square = function (n) {
    return n * n;
}*/

/*const square = (x) => {
    return x*x
}*/

//const square = (x) => x*x

//console.log(square(7));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Nick', 'Jason'],
    printGuestList() {
        const that = this;

        console.log("guest list for: " + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    },
}

event.printGuestList();