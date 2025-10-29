const car1 = {
    brand: "Nissan",
    model: "Juke",
    year: "2015",
};

const car2 = {
    brand: "Citroen",
    model: "C3",
    owner: "Olia",
};

const car3 = { ...car1, ...car2 };

console.log(car3);
