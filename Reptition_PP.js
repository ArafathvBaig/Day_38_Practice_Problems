console.log("Using For Loop");
//1. To Print Table of 2Power till <=2^n
let n=10;
console.log("Print the Table:: ")
for (let i = 1; i <= n; i++) 
{
    let tab = Math.pow(2,i);
    console.log(tab);
}

//2. To find Harmonic number of given n number
n = 6;
let sum = 0;
for (i = 1; i <= n; i++) 
{
    sum += sum + (1 / i);
}
console.log("Sum of Harmonic series: " + sum);

//3. To find the number is prime number or not
let numb = 7;
let isPrime = true;
for (i = 2; i < numb; i++) 
{
    let output = numb % i;
    if (output == 0) 
    {
        isPrime = false;
        break;
    }
}
if (isPrime==true)
{
    console.log(numb + " is a prime Number");
}
else 
{
    console.log(numb + " is not a prime Number");
}


//4. To find the Prime Numbers in a Range
let numb1 = 1;
let numb2 = 10;
console.log("Prime Numbers between given range ");
for (i = numb1; i <= numb2; i++) 
{
    let isPrime = true;
    if(i>=2)
    {
        for (let j = 2; j < i; j++) 
        {
            if (i % j == 0) 
            {
                isPrime = false;
            }
        }
        if (isPrime == true)
        {
            console.log(i);
        }
    }
}

//5. To find Factorial of given number
numb = 5;
let fact = 1;
for (i = 2; i <=numb; i++) 
{
    fact = fact * i;
}
console.log("The factorial of the number is: "+fact);

//6. To find factors of a given number
numb = 4;
console.log("Factors of the Given Number: ");
for (i = 1; i*i<= numb; i++) 
{
    if (numb % i == 0) 
    {
        console.log(i);
    }
}

console.log("Using While Loop");
//1. To Print Table of 2Power till <=2^n 
let power = 0;
i=1;
console.log("Print the Table:: ")
while(power!=256) 
{
    power = Math.pow(2,i);
    i = i+1;
    console.log(power);
}

//3. Coin Flip
const HEAD =0;
let count=0;
let count1=0;
while(count!=11 && count1!=11)
{
    let toss = Math.floor(Math.random()*10) % 2;
    if(toss == HEAD)
    {
        console.log("Heads");
        count=count+1;
    }
    else
    {
        console.log("Tails");
        count1=count1+1;
    }
}
if(count==11)
{
    console.log("Heads Won");
}
else
{
    console.log("Tails Won");
}

//4. Gambling
const BET =1;
let winCount=0;
let lostCount=0;
let betCount=0;
let balance = 100;
while(balance!=200 && balance!=0)
{
    let play = Math.floor(Math.random()*10) % 2;
    betCount = betCount+1;
    if(play == 0)
    {
        balance = balance-BET;
        lostCount=lostCount+1;
    }
    else
    {
        balance = balance+BET;
        winCount=winCount+1;
    }
}
console.log("Bet Count:: "+betCount);
console.log("Win Count:: "+winCount);
console.log("Lost Count:: "+lostCount);
console.log("Balance:: "+balance);
if(balance == 200)
{
    console.log("Gambler Reached his Goal");
}
else
{
    console.log("Gambler is Broke");
}