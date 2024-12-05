const ourKittens = [
  {
    kittyName: "Cercei",
    age: 2,
    color: "white",
    habits: ["bite", "eat on my legs", "sleep"],
    playful: true,
    passport: {
      breed: "semi - Angora",
      mom: "Angora",
      father: "Homeless",
      microchip: {
        address: "Avenida Portugal 1288",
        id: 2582457824,
        vacineDate: "24.10.24",
        procedures: ["exame FIV", "..."],
        vacines: [
          "vacine1",
          "vacine12",
          "vacine16",
          "vacine14",
          "vacine13",
          234,
          false,
          true,
          "dsdsdd",
        ],
      },
      isVacinated: true,
    },
    bonus: "pee on flip flops",
    paws: 4,
  },
  {
    kittyName: "Persik",
    age: 48,
    color: "orange white",
    habits: ["scratch a sofa", "love to be pet", "sleep on lags"],
    playful: false,
    bonus: "morning alarm",
    paws: 4,
    passport: {
      id: 34234,
      address: {
        city: "Munchen",
        country: "Germany",
        street: "Avenida Portgual 1288",
        ZIP: "04559-002",
      },
    },
  },
  {
    kittyName: "Dynya",
    age: 36,
    color: "brown",
    habits: [
      "love treats",
      "spend time on balcony",
      "eat cucumeber",
      {
        loveToPlayWith: [
          "little mouse",
          "fat dog",
          "doll",
          {
            option1: "option1",
            option2: "option2",
            option3: "option3",
            option4: ["item1", "item2", "item3"],
          },
        ],
      },
    ],
    playful: true,
    bonus: "beautiful tail",
    paws: 4,
  },
];

console.log(ourKittens[0].habits[0]);
console.log(ourKittens[0].passport.microchip.procedures[0]);
console.log(ourKittens[2].habits[3].loveToPlayWith[3].option4[1]);


// Задача - вытащить по одному все вакцины в консоль
console.log(
  ourKittens[0].passport.microchip.vacines[
    ourKittens[0].passport.microchip.vacines.length - 1
  ]
);

console.log("==============");

for (let i = 0; i < ourKittens[0].passport.microchip.vacines.length; i++) {
  console.log(ourKittens[0].passport.microchip.vacines[i]);
}

console.log("==============");

for (let vac of ourKittens[0].passport.microchip.vacines) console.log(vac);

console.log("==============");
