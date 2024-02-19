// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
for (let i = 5; i <= 100; i++) {
    console.log(i);
}

// მოცემულია მასივი:
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
for (let num of array1) {
    if (num > 0 && num < 10) {
        console.log(num);
    }
}

// მოცემულია მასივი
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
for (let number of array2) {
    if (number === 5) {
        console.log("არის");
        break;
    }
}


// მოცემულია მასივი:
let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let sum = 0;

for (let i = 0; i < array3.length; i++) {
    sum += array3[i];
}

console.log(sum);

// მოცემულია მასივი:
let array4= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)
let x = 0;
let y = array4.length;

for (let i = 0; i < array4.length; i++) {
    x += array4[i];
}
let z = x / y;
console.log(z);

// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
 let array5 = [1, 2, 3, 7, 6, 9];
for (let num of array5) {
    if (num === 7) {
        continue;
    }
    console.log(num);
}

//  მოცემულია ობიექტი:
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,  
  studentstatus: "active"
};
// ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let printName = `${user.studentstatus}`;
console.log(printName);



// მოცემულია ობიექტი:
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
};

// თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;
if (user2.age < 18 && user2.studentstatus === 'active') {
    console.log('hello user')
} if (user2.name === 'levan') {
    console.log('hello levani')
} if (user2.studentstatus === 'active' || user2.age < 25) {
    console.log('hello anna');
} else  {
    console.log('error');
}


// მოცემულია მასივი:
let array6 = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6,7, 10 ]
// ამოიღეთ მხოლოდ ლუწი რიცხვები
for (let item of array6) {
    if (item % 2 == 0) {
        console.log(item);
    }
}

//  მოცემულია მასივი
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

// კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

for (let i of Object.values(users)) {
    if (i.status === true) {
        console.log(i);
    }
}

// Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია:
let array7 = [32, 14, 10, "hello", null, "40", 50];

for (let item of array7) {
    if (typeof item == "number" && item % 5 == 0) {
      console.log(item);
    }
  }


// Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];

for (num = 0; num < array8.length; num++) {
    let nestedNum = array8[num];
    for (let i = 0; i < nestedNum.length; i++) {
        let number = nestedNum[i]
        if (number > 0) {
            console.log(number);
        }
    }
}