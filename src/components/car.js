class Car {
    model = ""
    year = ""
    color = ""

    constructor(props) {
        this.model = props.model
        this.year = props.year
        this.color = props.color
    }

    print() {
        console.log(`This car is ${this.color} ${this.model} ${this.year}`)
    }

    changeColor(color) {
        if (color !== "Purple") {
            this.color = color
        }
    }
}

let mycar = new Car({ model: "Honda", year: 2013, color: "Black" })
mycar.print()
mycar.changeColor("Blue")
mycar.changeColor("Pink")
mycar.print()

let another = new Car({ model: "Honda", year: 2013, color: "Black" })
another.print()
another.changeColor("Pink")
another.print()

// Inheritance
class Bwm extends Car {
    cost = ""

    constructor(cost, year, color) {
        super({ model: "BWM", year: year, color: color })

        this.cost = cost
    }

    // Override
    print() {
        console.log(`This car is a ${this.color} ${this.model} ${this.year} and costs ${this.cost}`)
    }

    changeCost(cost) {
        this.cost = cost
    }
}

let rahel = new Bwm(1000, 2013, "Green")
rahel.print()
rahel.changeColor("Blue")
rahel.changeCost(2000)
rahel.print()