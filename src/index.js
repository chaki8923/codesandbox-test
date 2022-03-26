/** const,let　について */
// const val1 = {
//   name:'chaki',
//   age:'34',
// };

// val1.address = 'saitama';

// console.log(val1);

// // delete val1.address;

// const func1 = (name,age) => {
//   return `名前は、${name}。年齢は${age}`;
// }

// console.log(func1('chaki',34));

// const myprofile = {
//   name:'chaki',
//   age:'34'
// }

// const {　name,age　} = myprofile;
// const message = `私の名前は${name}です。年齢は、${age}だす。`;
// console.log(message);

const sayHello = (name = "chaki") => console.log(`こんにちは、${name}さん`);

sayHello("runa");

//スプレッド構文
// const arr1 = [1,5];
// console.log(...arr1);

// const totalNum = (num1,num2) => console.log(`合計は、${num1 + num2}です。`);

// totalNum(...arr1);
//まとめる

// const arr2 = [1,2,3,4,5];
// const [...arr3] = arr2;
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// //コピー
// const arr6 = [...arr4];
// console.log(arr6);
// arr6[0] = 5;

// //結合
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// //あれ？コピーなら代入すれば良いんじゃない？
// const arr8 = arr4;
// console.log(arr8);
// //arr8のプロパティを変えると・・・
// arr8[0] = 5;
// //arr4の値も変わってしまっている
// console.log(arr4);

// const allArr = [1,2,3,4,5,6];

// //map関数。for文の簡単バージョン
// allArr.map((num,index) => console.log(`${index + 1}番目は${num}`)
// );

// //filter関数。returnの中の条件に合うものだけを取得できる。
// const oddNum = allArr.filter((num,index) => {
//   return num % 2 === 0;
// });

// console.log(oddNum);

const allName = ["田中", "山田", "茶木"];

const newName = allName.map((name) => {
  if (name !== "茶木") {
    return (name += "さん");
  } else {
    return name;
  }
});

console.log(newName);
