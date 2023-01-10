const frontBeginners = [
  { name: 'Carlinhos da massa', age: 25, title: 'JR', test: 35},
  { name: 'Joãozinho do pastel', age: 32, title: 'PL', test: 56},
  { name: 'Harry do potter', age: 80, title: 'SR', test: 90},
  { name: 'Vitinho o pequeno', age: 50, title: 'JR', test: 55 },
  { name: 'Juvenal', age: 80, title: 'SR', test: 55 },
  { name: 'Torquato', age: 32, title: 'JR', test: 55 },
]

let sumTest = 0

for (x = 0; x < frontBeginners.length; x++){
  sumTest += frontBeginners[x].test
}

// console.log(sumTest)

let sumTest2 = 0
frontBeginners.forEach((item) => {
  sumTest2 += item.test
})

// console.log('Resultado2:', sumTest2);

const sumTest3 = frontBeginners.reduce((acc, item) => {
  return acc + item.test
}, 0)

// console.log('Resultado3:', sumTest3);

const reducerDosBeginners = frontBeginners.reduce((acc, item) => {
  return {...acc, maiorIdade: 10, sumTest: acc.sumTest + item.test }
},
  { sumTest: 0, menorIdade: 0, maiorIdade: 0}
)

console.log(reducerDosBeginners);