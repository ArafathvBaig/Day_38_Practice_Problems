    // to get single digit random function
    let num = Math.floor(Math.random()*10);
    console.log("Single Random :"+num);

    // to get random dice num
    let dice = Math.floor(Math.random()*10)%6 +1;
    console.log("Single Dice :"+dice);

    // Adding two random dice and printing result
    let dice1 = (Math.floor(Math.random()*10)%6) +1;
    let dice2 = (Math.floor(Math.random()*10)%6) +1;
    let result=dice1+dice2;
    console.log("Dice 1: "+dice1);
    console.log("Dice 2: "+dice2);
    console.log("Addition of two Dice Numbers is: "+result);

    // Reads 5, 2 digits random number and to find average of random number
    let a = 5;
    result = 0;
    for(let i=0;i<a;i++)
    {
        let random = (Math.floor(Math.random()*100)%89)+10;
        console.log("Random is: "+random);
        result = result + random;
    }
    let average = result/5;
    console.log("Sum of 5 Randoms: "+result);
    console.log("Average of 5 Randoms: "+average);

    // unit conversion inch to feet
    let oneFoot = 12 ; 
    result = 42/oneFoot;
    console.log("42 inches is equal to :" + result + " feets");

    // unit conversion feet to Squaremeters
    let oneSquareFeet = 10.764; 
    result = ((60 * 40)/oneSquareFeet);
    console.log("60ft X 40ft value in Squaremeters is : " + result);

    // unit conversion to acres
    let oneAcre = 43650;
    result = ((60 * 40 * 25)/oneAcre);
    console.log("Area of 25 plots of 60ft X 40ft in acres is : " + result);