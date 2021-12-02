console.log("Using if else");
//1. To check the min and max number
let array=new Array();
for(let i=0;i<5;i++)
{
   let randomCheck=(Math.floor(Math.random()*1000)%899)+100;
   console.log("Random number is: " +randomCheck);
   array.push(randomCheck); 
}
console.log("Maximum number is: "+Math.max(...array));
console.log("Minimum number is: "+Math.min(...array));

//3. To check weather the year is leap year or not
const year = 2200;
checkLeapYear(year);
function checkLeapYear(year)
{
    if ((year % 4 ==0) && (year % 100 != 0) || (year % 400 == 0)) 
    {
        console.log(year + ' is a leap year');
    }
    else 
    {
        console.log(year + ' is not a leap year');
    }
}

//4. Fliping coin
const HEAD =0;
let toss = Math.floor(Math.random() * 10) % 2;
if(toss == HEAD)
console.log("Heads");
else
console.log("Tails");

console.log("Using if else if and else");
//1. Reading a Single digit number in Word 
let number = Math.floor(Math.random()*10);
console.log("Random is: "+number);
if(number ==0)
console.log("Zero");
else if(number == 1)
console.log("One");
else if(number == 2)
console.log("Two");
else if(number == 3)
console.log("Three");
else if(number == 4)
console.log("Four");
else if(number == 5)
console.log("Five");
else if(number == 6)
console.log("Six");
else if(number == 7)
console.log("Seven");
else if(number == 8)
console.log("Eight");
else
console.log("Nine");

//2. Reading a number and display WeekDay
let daynumber = (Math.floor(Math.random() * (10))% 7)+1 ;
let day;
if( number == 1) {
    day = 'Sunday';
} else if (number == 2) {
    day = 'Monday';
}else if (number == 3) {
    day ='Tuesday';
}else if (number == 4) {
    day ='Wednesday';
}else if (number == 5) {
    day ='Thursday';
}else if (number == 6) {
    day ='Friday';
}else if (number == 7) {
    day ='Saturday';
}else{
    day = 'invalied day number';
}
console.log('The day is :'+ day)

//3. Reading a random number and printing Unit, Ten and Hunderds
let num = (Math.floor(Math.random()*1000)%1000)+1;
console.log("Number is: "+num);
if(num >=0 && num <=9) 
console.log("The number is in: UNITS")
else if( num>=10 && num<=99) 
console.log("The number is in: TENS");
else if(num >=100 && num <=999)
console.log("The number is in: HUNDERDS");
else
console.log("The number is in: THOUSANDS")

//4. Reading 3 numbers and doing operations and finding min and max
let a = 10;
let b = 20;
let c = 30;
let op1 = (a+b)*c;
let op2 = (a%b)+c;
let op3 = c+(a/b);
let op4 = (a*b)+c;
console.log("OutPut of Operation 1:"+op1);
console.log("OutPut of Operation 2:"+op2);
console.log("OutPut of Operation 3:"+op3);
console.log("OutPut of Operation 4:"+op4);
console.log("Maximum number is: "+Math.max(op1,op2,op3,op4));
console.log("Minimum number is: "+Math.min(op1,op2,op3,op4));

console.log("Using Switch Cases");
//1. Reading a Single digit number in Word 
number = Math.floor(Math.random()*10);
console.log("Random is: "+number);
switch(number)
{
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default :
        console.log("Zero");
        break;
}

//2. Reading a number and display WeekDay
daynumber = (Math.floor(Math.random() * (10))% 7)+1 ;
switch(daynumber)
{
    case 1:
        day = 'Sunday';
        break;
    case 2:
        day = 'Monday';
        break;
    case 3:
        day = 'Tuesday';
        break;
    case 4:
        day ='Wednesday';
        break;
    case 5:
        day ='Thursday';
        break;
    case 6:
        day ='Friday';
        break;
    case 7:
        day ='Saturday';
        break;
    default :
        day = 'invalied day number';
        break;
}
console.log('The day is :'+ day)

//3. Reading a random number and printing Unit, Ten and Hunderds
num = (Math.floor(Math.random()*1000)%1000)+1;
console.log("Number is: "+num);
let choice;
if(num >=0 && num <=9) 
    choice = 1;
else if(num>=10 && num<=99) 
    choice = 2;
else if(num >=100 && num <=999) 
    choice = 3;
else
    choice = 4;

switch(choice)
{
    case 1:
        console.log(num+" Number is a Unit Value");
        break;
    case 2:
        console.log(num+" Number is a Tens Value");
        break;
    case 3:
        console.log(num+" Number is a Hundreds Value");
        break;
    default :
        console.log(num+" Number is a Thousands Value");
        break;
}

// 4. Unit Conversion
let feet = 6;
let inches = 12;
let meters = 10;
choice = 4;
switch(choice)
{
    case 1:
        console.log("Converting Feet to Inches ::");
        console.log(feet+"feet is equal to "+(feet*12)+"inches");
        break;
    case 2:
        console.log("Converting Inches to Feet ::");
        console.log(inches+"inches is equal to "+(inches/12)+"feet");
        break;
    case 3:
        console.log("Converting Feet to Meters ::");
        console.log(feet+"feet is equal to "+(feet/3.281)+"meters");
        break;
    case 4:
        console.log("Converting Meters to Feet ::");
        console.log(meters+"meters is equal to "+(meters*3.281)+"feet");
        break;
    default :
        console.log("Wrong Input");
        break;
}
