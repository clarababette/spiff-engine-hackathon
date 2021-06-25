const meals = {
  breakfast: ['cereal', 'porridge', 'milk', 'oatmeal', 'smoothie', 'sheera', 'nutrific', 'banana', 'custard', 'smoothie', 'omelette', 'milkshake'],
  lunch: ['purity', 'potatoes', 'butternut', 'soup', 'mixed veggies', 'carrots', 'avocado', 'watermelon', 'eggs', 'paranthas', 'pudding', 'custard', 'milkshake', 'pancake', 'mince', 'butternut'],
  snack: ['biscuits', 'water', 'Watermelon', 'mango', 'prunes', 'paws', 'yogurt', 'pears', 'apple sauce', 'blueberry', 'cucumber'],
  supper: ['potatoes', 'apple', 'squash', 'butternut', 'wheatgerm', 'parsnip', 'barley', 'spinach', 'rice', 'ragi', 'barley', 'broccoli', 'chicken', 'peas', 'beans', 'noodles', 'spinach', 'rice', 'bhagar', 'hummus', 'turkey', 'beef', 'mince'],
};

const digestion = {
  vomitting: {},
  constipation: {},
  diarrhoea: {},
};

const habits = {
  "didn't eat any": {},
  'ate some': {},
  'ate most': {},
  'ate it all': {},
  'ate it all and wanted': {},
};

const newFeed = {
  time: '',
  'fed by': '',
  contained: '',
};

const startData = {
  '2021-06-24breakfast': { time: '05:00', fedby: 'Zoe', contained: { milk: 'ate some', oatmeal: 'ate some' } },
  '2021-06-11lunch': { time: '11:58', fedby: 'Lolo', contained: { potatoes: 'ate some', soup: 'ate some', watermelon: 'ate it all and wanted more' } },
  '2021-06-19supper': { time: '17:59', fedby: 'Ongie', contained: { potatoes: 'ate some', wheatgerm: "didn't eat any", spinach: "didn't eat any", mince: 'ate it all' } },
  '2021-06-24lunch': { time: '18:00', fedby: 'Yolie', contained: { purity: 'ate it all and wanted more', watermelon: 'ate it all and wanted more', eggs: 'ate it all' } },
  '2021-06-25supper': { time: '19:03', fedby: 'Amanda', contained: { noodles: 'ate most', spinach: 'ate some', beef: 'ate it all' } },
  '2021-06-25breakfast': { time: '09:03', fedby: 'Amanda', contained: { milk: 'ate most', nutrific: 'ate some', milkshake: 'ate most' } },
  '2021-06-25lunch': { time: '13:08', fedby: 'Nzwakie', contained: { butternut: 'ate most', 'mixed veggies': 'ate some', mince: 'ate it all and wanted more' } },
  '2021-06-10supper': { time: '18:06', fedby: 'Ongie', contained: { potatoes: 'ate most', apple: 'ate most', mince: 'ate it all' } },
  '2021-06-17breakfast': { time: '07:07', fedby: 'Kim', contained: { cereal: 'ate it all', milk: 'ate it all' } },
  '2021-06-19breakfast': { time: '06:10', fedby: 'Lina', contained: { milk: 'ate it all and wanted more', oatmeal: 'ate it all', omelette: 'ate it all', milkshake: 'ate it all and wanted more' } },
  '2021-06-26supper': { time: '19:08', fedby: 'Nzwakie', contained: { rice: 'ate most', chicken: 'ate most', peas: 'ate some', spinach: 'ate some' } },
  '2021-06-25snack': { time: '17:15', fedby: 'Abo', contained: { biscuits: 'ate most', water: 'ate it all and wanted more' } },
  '2021-06-23supper': { time: '20:18', fedby: 'Avu', contained: { potatoes: 'ate it all', butternut: 'ate most', rice: 'ate most' } },
};

// //each feed for new meal
// const feeds = {
//     //BREAKFAST
//     breakfast: {
//     milk: 'ate most',
//     date: 2021-06-25,
//     time: '9am',
//     },
//     breakfast: {
//         cereal: 'ate most',
//         date: 2021-06-25,
//         time: '6am',
//     },

//     breakfast: {
//         fruitYoghurt: 'portion',
//         date: 2021-06-25,
//         time: '8pm',
//     },

//     lunch: {
//         butternutSoup: 'ate most',
//         date: 2021-06-25,
//         time: '3pm',
//     },
//     supper: {
//         date: 2021-06-25,
//         time: '9pm',
//         milk: 'ate most',
//     },
//     supper: {
//         mashedPotatoes: 'ate most',
//         date: 2021-06-25,
//         time: '7:30pm',
//     },
//     supper: {
//         butternutSoup: 'ate most',
//         date: 2021-06-25,
//         time: '7:30pm',
//     },
// }
