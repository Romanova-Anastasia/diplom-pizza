// Вместо сервера, получение данных

export default class ServicePizza {
  data = [
    {
      id: 1,
      name: "Додо",
      description:
        "Бекон, митболы из говядины, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус",
      price: 20.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/502543d83da14915b76c5363f62d27d1_366x366.jpeg",
      categories: ["grill", "meat"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
    {
      id: 2,
      name: "Пепперони",
      description: "Томатный соус, пикантная пепперони, моцарелла",
      price: 11.4,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/efebb8f86a87431ca2c0137103fb5d27_366x366.jpeg",
      categories: ["meat", "hot"],
      dough: ["traditional"],
      sizes: ["medium", "large"],
    },
    {
      id: 3,
      name: "Диабло",
      description:
        "Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
      price: 18.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/2f181edc78624745a4810fbe8bb85f0e_366x366.jpeg",
      categories: ["meat", "hot"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
    {
      id: 4,
      name: "Сырный цыпленок",
      description:
        "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
      price: 18.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/52d4303272ef4b97b286d6f2d09a4979_366x366.jpeg",
      categories: ["meat"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
    {
      id: 5,
      name: "Овощи и грибы",
      description:
        "Итальянские травы, томатный соус, томаты, кубики брынзы, маслины, красный лук, сладкий перец, моцарелла, шампиньоны",
      price: 11.4,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/81553a94d32e44f6aa35a98c4813a452_366x366.jpeg",
      categories: ["sweetness", "vega"],
      dough: ["thin"],
      sizes: ["medium", "large"],
    },
    {
      id: 6,
      name: "Новогодний цыпленок",
      description:
        "Цыпленок, мандарины, моцарелла, цитрусовый соус, сыры чеддер и пармезан, соус альфредо",
      price: 18.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/02617195593b4963a33e50bfaeb4c6c9_366x366.jpeg",
      categories: ["meat", "sweetness"],
      dough: ["traditional", "thin"],
      sizes: ["medium", "large"],
    },
    {
      id: 7,
      name: "Сырная",
      description: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
      price: 7.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/2ea16022779e4e46acd70a19f397ba8f_366x366.jpeg",
      categories: ["vega"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
    {
      id: 8,
      name: "Четыре сыра",
      description:
        "Сливочный соус, сыры пармезан и чеддер, сыр блю чиз, моцарелла",
      price: 18.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_366x366.jpeg",
      categories: ["vega"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
    {
      id: 9,
      name: "Пицца-пирог",
      description: "Ананасы, молоко сгущеное, брусника",
      price: 5.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/85ee29544cc2478cb89c9fad605a7e93_366x366.jpeg",
      categories: ["vega", "sweetness"],
      dough: ["thin", "traditional"],
      sizes: ["medium", "large"],
    },
    {
      id: 10,
      name: "Маргарита",
      description: "Итальянские травы, томатный соус, томаты, моцарелла",
      price: 5.9,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/abd511029f4e4d11ac06f63eb798b7d8_366x366.jpeg",
      categories: ["vega"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
    {
      id: 11,
      name: "Гавайская",
      description: "Ветчина, ананасы, моцарелла, томатный соус",
      price: 16.4,
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/4aec6cc08719404e94262698eb014cba_366x366.jpeg",
      categories: ["vega", "grill"],
      dough: ["traditional", "thin"],
      sizes: ["small", "medium", "large"],
    },
  ];

  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1500);
    });
  }
}
