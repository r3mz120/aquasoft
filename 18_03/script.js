// Task 1 : diferenta dintre var, let, const
console.log("\nTask 1");

let z = [1, 2, 3];
for (let i of z) {
  console.log(i);
}

const f1 = (x, y = 10) => {
  return x + y;
};
console.log(f1(5)); //poate sa accepte doar parametrii care nu au fost initializati
console.log(f1(1, 3));

const f2 = (...params) => {
  // poate sa accepte un nr nedefinit de parametri
  return params;
};

console.log(f2(1, 2, 3));

const f3 = (value, index, array) => {
  return value > 10;
};

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(f3); //returneaza prima valoare care indeplineste conditia
let index = numbers.findIndex(f3); //returneaza indexul valorii care indeplineste conditia
console.log(first + " index: " + index);

// Task 2 : diferenta dintre var, let, const
console.log("\nTask 2");
const x = 3;
// x = 2; // o variabila const nu poate fi reinitializata;

let y = 3;
console.log(y);
y = 2;

console.log(y); // o variabila let poate fi reinitializata

for (let i = 1; i < 3; i++) {
  let t = 0;
}

// console.log(t); // o variabila let declarata intr-un block(for/functie etc.) etc.
// nu poate fi accesata in afara block-ului

for (let i = 0; i < 3; i++) {
  var t = 0;
}

console.log(t);

//variabila var poate fi reinitializata si poate fi accesata si in afara blocului
//in care a fost declarata

// Task 3 : spread operator
console.log("\nTask 3");
const suma = (x, y, z) => {
  console.log(x + y + z);
};

const v = [1, 2, 3];

suma(v);

suma(...v); // spread operator poate fi folosit pentru a returna elementele unui vector separat

let v1 = [1, 2, 3];
let v2 = [4, 5, 6];
let v3 = [...v1, ...v2];
console.log(v3);

v3 = [v1, v2];
console.log(v3);

//Task 4 : obiecte - cum iterezi un obiect, deep copy
console.log("\nTask 4");
let obj = {
  p1: "aa",
  p2: "bb",
  p3: "cc",
};

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

Object.entries(obj).forEach(([key, value]) => console.log(key + " " + value));

//shallow copy
console.log("\n Shallow copy");
let obj2 = obj;
console.log(obj);
console.log(obj2);

obj.p1 = "dd";
console.log(obj);
console.log(obj2);

//deep copy;
console.log("\n Deep copy");
obj2 = {};
obj.p1 = "aa";
Object.entries(obj).forEach(([key, value]) => {
  obj2[key] = value;
});

console.log(obj);
console.log(obj2);

obj.p1 = "dd";
console.log(obj);
console.log(obj2);

//Task 5 : arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc)
console.log("\nTask 5");

let arr = [1, 2, 3, 4];
console.log(arr[0]);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach((element) => {
  console.log(element);
});

arr.pop(); //elimina ultimul element din vector
console.log(arr);

arr.shift(); // elimina primul element din vector
console.log(arr);

arr.push(4); // adauga un element sau mai multe la finalul unui vector
console.log(arr);

arr.push(5, 6);
console.log(arr);

arr.unshift(1); // adauga un element sau mai multe la inceputul unui vector
console.log(arr);

arr.splice(0, 2, 7); //sterge elementele de pe pozitiile (0,1)(2 elemente) si adauga 7 pe pozitia 0
console.log(arr);

arr.splice(5, 0, 7); // adauga 7 pe pozitia 5;
console.log(arr);

arr.splice(0, 1); // sterge elementul de pe pozitia 0
console.log(arr);

arr.reverse(); // inverseaza ordinea
console.log(arr);

arr.sort(); // ordoneaza elementele crescator/alfabetic(nu este bun pt numere)
console.log(arr);

arr.fill(0); // schimba toate elementele cu o valoare aleasa
console.log(arr);

//Task 8 :closures
console.log("\n Task 8");

function outer() {
  var b = 10;
  var c = 100;
  function inner() {
    var a = 20;
    console.log("a= " + a + " b= " + b);
    a++;
    b++;
  }
  return inner;
}
var X = outer();
var Y = outer();

X();
X();
X();
Y();

//Task 6 : promise, callback
console.log("\n Task 6");

const promise = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Good");
  } else {
    reject("Bad");
  }
});
promise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

const functieAcceptaCallback = (f) => {
  return f(1, 2);
};

const callback = (x, y) => {
  return x + y;
};

const r = functieAcceptaCallback(callback);
console.log(r);

//Task 7 : async, await
console.log("\n Task 7");

const get = async () => {
  try {
    const rezultate = await (1 + 2 + 3);
    console.log(rezultate);
  } catch (err) {
    console.log(err);
  }
};

get();
