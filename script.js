/*//a...............odd numbers in an array  using arrow function

let array = [1,2,3,6,5,4,7,8];
let evenorodd =(arr)=>{
    let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
       arr2.push(arr[i]) ;
    }
}
return arr2;
}
console.log(evenorodd(array));

//c..............sum of all numbers in an array

let array2 = [1,2,3,6,5,4,7,8];
let sum2 = (arr2)=>{
    let sum = 0;
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
    }
    return sum;
}

console.log(sum2(array2));

//e..........return all the palindromes in an array

let array3 = ['madam','code','did'];
let a;
let palindrome = (arr3)=>{
    let b=[];
    for(let i=0;i<arr3.length;i++){
     a = arr3[i].split('').reverse().join('');
    if(arr3[i]==a){
        b.push(arr3[i]);
    }
}
    return b;
}

console.log(palindrome(array3));
*/
/*
//d.....return all the prime numbers in an array
let array5 = [1,2,3,4,5,6,7,8,9,11,12,13]

let primenum = (arr)=>{
    let primes = [];
    arr.forEach(num => {
        let factors = 0;
        for(let i=1;i<=num;i++){
        if(num%i == 0){
            factors++;
        }
    }
    if(factors == 2){
        primes.push(num);
    }
    });
    return primes;
}

console.log(primenum(array5));
*/
/*
//b....capitalize the first letter in the string

let sentence = 'hi i am trying to make the first letter caps of each word';

let changedsen = (sen)=>{
   let step1 =  sen.split(' ');
   let step2 = step1.map(words=>words.charAt(0).toUpperCase()+words.slice(1).toLowerCase());
   let step3 = step2.join(' ');
   return step3;
}
console.log(changedsen(sentence));

*/
/*
//..................odd numbers(IIFE)
let array = [1,2,3,6,5,4,7,8];
(function evenorodd(arr){
    let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
       arr2.push(arr[i]) ;
    }
}
console.log(arr2);
})
(array);
*/

/*
//................sum of all numbers on array(IIFE)
let array2 = [1,2,3,6,5,4,7,8];
(function sum2(arr2){
    let sum = 0;
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
    }
    console.log(sum);
})

(array2);
*/

/*
//.........return all the palindromes in an array(IIFE)

let array3 = ['madam','code','did'];
let a;
(function palindrome (arr3){
    let b=[];
    for(let i=0;i<arr3.length;i++){
     a = arr3[i].split('').reverse().join('');
    if(arr3[i]==a){
        b.push(arr3[i]);
    }
}
    console.log(b);
})

(array3);
*/
/*
//.....return all the prime numbers in an array(IIFE)
let array5 = [1,2,3,4,5,6,7,8,9,11,12,13]
(function primenum (array5){
    let primes = [];
    array5.forEach(num => {
        let factors = 0;
        for(let i=1;i<=num;i++){
        if(num%i == 0){
            factors++;
        }
    }
    if(factors == 2){
        primes.push(num);
    }
    })
   console.log(primes) ;
})

(array5);
*/
/*
//....capitalize the first letter in the string(IIFE)

let sentence = 'hi i am trying to make the first letter caps of each word';

(function changedsen (sen){
   let step1 =  sen.split(' ');
   let step2 = step1.map(words=>words.charAt(0).toUpperCase()+words.slice(1).toLowerCase());
   let step3 = step2.join(' ');
   console.log(step3) ;
})
(sentence);
*/
/*
//....remove duplicates from an array(IIFE)

let array = [1,2,3,6,5,4,1,2,3,5,3];

(function removeduplicates(arr){
    let unique = [];
    for(let i=0;i<arr.length;i++){
        if(unique.indexOf(arr[i]) == -1){
            unique.push(arr[i]);
        }
    }
    console.log(unique);
})
(array);
*/
/*
//......rotate the array by K times(IIFE)

let array = [1,2,3,4,5,6]
let k = 3;
(function rotation(arr){
    for(let i=0;i<k;i++){
       arr.push((arr.shift()));
    }
    console.log(arr)
})
(array);
*/

/*
//......rotate the array by K times(anonymous func)

let array = [1,2,3,4,5,6]
let k = 3;
let rotation=function (arr){
    for(let i=0;i<k;i++){
       arr.push((arr.shift()));
    }
    console.log(arr)
}
rotation(array);
*/

/*
//....remove duplicates from an array(anonymous func)

let array = [1,2,3,6,5,4,1,2,3,5,3];

let removeduplicates = function (arr){
    let unique = [];
    for(let i=0;i<arr.length;i++){
        if(unique.indexOf(arr[i]) == -1){
            unique.push(arr[i]);
        }
    }
    console.log(unique);
}
removeduplicates(array);
*/

/*
//....capitalize the first letter in the string(anonymous func)

let sentence = 'hi i am trying to make the first letter caps of each word';

let changedsen = function (sen){
   let step1 =  sen.split(' ');
   let step2 = step1.map(words=>words.charAt(0).toUpperCase()+words.slice(1).toLowerCase());
   let step3 = step2.join(' ');
   console.log(step3) ;
}
changedsen(sentence);
*/

/*
//.........return all the palindromes in an array(anonymous func)

let array3 = ['madam','code','did'];
let a;
let palindrome = function  (arr3){
    let b=[];
    for(let i=0;i<arr3.length;i++){
     a = arr3[i].split('').reverse().join('');
    if(arr3[i]==a){
        b.push(arr3[i]);
    }
}
    console.log(b);
}

palindrome(array3);
*/

/*
//................sum of all numbers on array(anonymous func)
let array2 = [1,2,3,6,5,4,7,8];
let sum2 = function (arr2){
    let sum = 0;
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
    }
    console.log(sum);
}

sum2(array2);
*/

/*
//..................odd numbers(anonymous func)
let array = [1,2,3,6,5,4,7,8];
let evenorodd =  function (arr){
    let arr2=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
       arr2.push(arr[i]) ;
    }
}
console.log(arr2);
}
evenorodd(array);
*/

//d.....return all the prime numbers in an array(anonymous func)
let array5 = [1,2,3,4,5,6,7,8,9,11,12,13]

let primenum = function (arr){
    let primes = [];
    arr.forEach(num => {
        let factors = 0;
        for(let i=1;i<=num;i++){
        if(num%i == 0){
            factors++;
        }
    }
    if(factors == 2){
        primes.push(num);
    }
    });
    console.log (primes);
}
primenum(array5);