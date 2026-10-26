

// length mujhe array me jitna data h usko count karke bata deta hai
let array = ["faizee", "kaif", { name: "salman" }, 6]
console.log(array.length);



// index start hota hai zero se [2] hai iski value = 6
let array1 = ["faizee", "kaif", 6, { name: "shazli" }, 9]
console.log(array1[2]);


// array me agar 200 value h aur mujhe sabse last ki value chahiye h to hum use karte hai at ka - ke sth console result=e
// at positive aur negative dono value receive krta hai  
let array2 = ["a", "b", "c", "d", "e", "f"]
console.log(array2.at(-2));


// push add karta hai last me
let array3 = ["a", "b"]
array3.push("c")
console.log(array3);



// pop last  value remove karta hai
let array4 = ["a", "b", "c", "d"]
array4.pop()
console.log(array4);



// shift array ki first value remove karta hai
let array5 = ["a", "b", "c", "d", "e"]
array5.shift()
console.log(array5);


// unshift array ke start  me add karta hai
let array6 = ["b", "c", "d", "e"]
array6.unshift("a")
console.log(array6);



// includes return karta hai true false
// includes check karta hai value hai ya nhi
let array7 = ["faizee", "kaif", "salman", "shazli"]
console.log(array7.includes("kaif")); true
console.log(array.includes("asif")); false





// indexOf km karta hai jo value array me nhi hai 
// negative -1 console me show hoga
let array8 = ["salman", "shazli", "kaif", "faizee"]
console.log(array8.indexOf("saeed"));
// result = -1




// toString mera array se string me convert karta hai 
// lkn purane array ko change nhi karta hai 
let animals = ["dog", "cat", "lion", "tiger"]
let arrToStr = animals.toString()
console.log(arrToStr);




// join 
let animal = ["dog", "cat", "lion", "tiger"]
let arrWithJoin = animal.join("-")
console.log(arrWithJoin);
// dog-cat-lion-tiger




// flat method aray ke andr array hote h usko ek array me karne ke km me ata hai
// nested array
let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, [11, 12]]]]
let flatArr = arr.flat(3)
console.log(flatArr);
// [1,2,3,4,5,6,7,8,9,10,11,12]



// concat do array ko ek add karta hai
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]
let arrConcat = arr1.concat(arr2, arr2)




// Reverse array ko last value ko first value me convert karta hai
let ar = ["apple", "cat", 1, "#"]
let arReverse = ar.reverse()
console.log(arReverse);
// ["#","1","cat","apple"]




// slice value jaha se jitni leni h index 0 se start hota h 
let arrr = ["faizee", "kaifee", "salman", "shazli", 7, 9]
let arrSlice = arrr.slice(1, 4)
// ["kaifee","salman","shazli"]




// splice method remove aur add hone ke km ata hai
let arrr1 = ["@", "%", "$", "*", "+", "&"]
let arrSplice = arrr1.splice(1, 3)
// "%","$",
let arrSplice2 = arr1.splice(1, 0, "-", "()")
//"@","-","()","%","$","*","+","&"




// sort serial me lata hai 
let arrrr1 = ["f", "e", "d", "c", "b", "a"]
let numArr = [9, 8, 7, 5, 6, 4, 2, 3, 1]
let arrSort = arr.sort()
let numSort = arr.sort()
// ["a","b","c","d","e","f"]
// [1,2,3,4,5,6,7,8,9]



// some return true /false
let numbers = [10, 15, 17, 6, 80, 45]
let result = numbers.some((num) => {
    return num > 40
})
console.log(result);
// true 45,80



// every me sari value match hogi tbhi true return karega vrna false
let number = [10, 20, 30, 40]
let result1 = number.every((num) => {
    return num > 5
})
console.log(result1);
// false/ kyu ki 10,20,30,40 sabhi 5 se bade hain







// ForEach loop chalata hai hai new array return nhi karta hai
// new array return nhi karta hai
let ar1 = ["a", "b", "c", "d", "e", "f"]
ar1.forEach((elem, index) => {
    console.log(ar1);
    // 0index a
    // 1 b
    // 2 c
    // 3 d
})



// map har elemt pr opertion krta h... new array return karta hai
let Ar = [1, 2, 3, 4]
let arValue = Ar.map((ele, index) => {
    return elem * 2
    // [2,4,6,8]
})



// filter condition ke according multiple elemt nklta h
let num = [10, 15, 20, 25, 30]
let Result = num.filter((item) => {
    return item > 20
    // [25,30]
})





// reduce/ array ki value ko combine karke single result banata hai
let num1 = [10, 20, 30, 40]
let result2 = num1.reduce((total, item) => {
    return total + item
}, 0)





1 // length// array ki lenght count krta h

2 // index // index [0 ] se start hota h

3// at // arry me 200 value h aur last ki value mujhe chahiye h uske km ata h -1 positive aur negative value deta h

4  //  push// last me value add

5
// pop // last value remove

6
// shift // starting [0] ki value remove

7
// unshift starting [0] me value add
8
// includes // arry me value h aur includes me vo value nhi h to mujhe false milega
9
// indexoff 
10
// toString //string me convert krta h
11
// join // join ("-")array ke n
12
// flat // array ke andar array hote h unko ek hi array me show krta h 
13
// concat do array ko ek me combine krta h
14
// reverse array me last value ko first value banata h
15
// slice array me (0,3) value chahiye h waha km aata
16
// splice add remove ke km ata h
17
// sort serial me lane ke km ata h
18
// some greater then less then me km ata h
19
// every  me sari value match hogi tbhi true dega vrna false
20
// map array ke har element par km krta h neya array return krta h
21
// filter condition lagata h true false return krta
22
// reduce array ki sari value ko count krke ek value banata h
23
// foreach ek ek chiz pr loop chalata h


