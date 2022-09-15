const validCar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const car = {
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carWithoutModel = {
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carWithoutYear = {
  model: "Ferrari Maranello",
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carWithoutColor = {
  model: "Ferrari Maranello",
  year: 1963,
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carWithoutBuyValue = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  seatsQty: 2,
  doorsQty: 2
}

const carWithoutSeatsQty = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2
}

const carWithoutDoorsQty = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
}

const carSeatsQtyLess2 = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 1,
  doorsQty: 2
}

const carDoorsQtyLess2 = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 1
}

const cars = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: "4edd40c86762e0fb12000002",
    model: "Fiat Uno",
    year: 1969,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  }
];

export default {
  validCar,
  car,
  carWithoutModel,
  carWithoutYear,
  carWithoutColor,
  carWithoutBuyValue,
  carWithoutSeatsQty,
  carWithoutDoorsQty,
  carSeatsQtyLess2,
  carDoorsQtyLess2,
  cars,
}