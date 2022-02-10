const userInfo = [
  {
    name: "Mr Rashed",
    currentYear: 2022,
    birthYear: 1999,
    postalNo: 1200,
    district: "Dhaka",
    priority: 2
  },
  {
    name: "Mr Raju",
    currentYear: 2022,
    birthYear: 1995,
    postalNo: 1211,
    district: "Rajshahi",
    priority: 1
  },
  {
    name: "Mr Raju",
    currentYear: 2022,
    birthYear: 1995,
    postalNo: 1211,
    district: "Dajshahi",
    priority: 1
  },
  {
    name: "Mr Raju",
    currentYear: 2022,
    birthYear: 1995,
    postalNo: 1211,
    district: "Aajshahi",
    priority: 99
  }
];

function cardDistribution(arr) {
  const uid = [];
  for (const user of arr) {
    const userId = {};
    let id = "";
    let length = (arr.indexOf(user) + 1).toString().length;
    let zeros =
      [...Array(6 - length).fill(0)].join("") +
      (arr.indexOf(user) + 1).toString();
    id += user.district.split("").slice(0, 2).join("").toUpperCase();
    id += user.currentYear.toString().split("").slice(-2).join("");
    id += user.postalNo.toString().split("").slice(0, 2).join("");
    id += user.birthYear;
    id += zeros;
    userId.cardNumber = id;
    if (id.split("").slice(-1).join() % 2) {
      userId.gift = "R";
    } else {
      userId.gift = "W";
    }
    userId.priority = user.priority;
    uid.push(userId);
  }
  uid.sort((a, b) => {
    if (a.cardNumber > b.cardNumber) return 1;
    if (a.cardNumber < b.cardNumber) return -1;
    return 0;
  });
  uid.sort((a, b) => {
    return a.priority - b.priority;
  });
  return uid;
}

console.log(cardDistribution(userInfo));
