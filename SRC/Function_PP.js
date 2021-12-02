//1. Conversion
conversion(100);
function conversion(a)
{
    let choice = 1;
    switch(choice)
    {
        case 1:
            console.log("Given input in Centigrades: ");
            let degC=a;
            if(degC>=0 && degC<=100)
            {
                let degF = (degC * (9/5))+32;
                console.log(degC+" degC in Farenheit is :: "+degF+"degF");
            }
            else
            {
                console.log("degC should be > 0C Freezing point and < 100C Boiling Point of Water");
            }
            break;
        
        case 2:
            console.log("Given input in Farenheits: ");
            let degF=a;
            if(degF>=32 && degF<=212)
            {
                let degC = (degF-32) * (5/9);
                console.log(degF+" degF in Centigrades is :: "+degC+"degC");
            }
            else
            {
                console.log("degF should be > 32F Freezing point and < 212F Boiling Point of Water");
            }
            break;
    
        default :
            console.log("No Such Input Case ::");
            break;
    }
}

//2. Palindrome
palindrome(121, 23432);
function palindrome(...array)
{
    for(let i=0; i<array.length; i++)
    {
        let temp=array[i];
        let r;
        let sum=0;
		while(temp>0)
		{
			r=temp%10;
			sum=Math.round((sum*10),0)+r;
			temp=Math.round((temp/10),0);
		}
        if(array[i]==sum)
		{
			console.log("The given number "+array[i]+" is Palindrome");
		}
		else
		{
			console.log("The given number "+array[i]+" is Not a Palindrome");
		}
    } 
}

//3. Check number is Prime and its Palindrome is Prime or Not
let a=12211;
prime(a);
getPalindrome(a);
function prime(b)
{
    let isPrime = true;
    for (i = 2; i < b; i++) 
    {
        let output = b % i;
        if (output == 0) 
        {
            isPrime = false;
            break;
        }
    }
    if (isPrime==true)
    {
        console.log(b + " is a prime Number");
    }
    else 
    {
        console.log(b + " is not a prime Number");
    }
}
function getPalindrome(c)
{
    let temp=Math.round((c/10),0);
    //let temp=c;
    let r;
    let sum=0;
    let count =0;
	while(temp>0)
	{
		r=temp%10;
		sum=Math.round((sum*10),0)+r;
		temp=Math.round((temp/10),0);
        count++;
	}
    c=(c * Math.pow(10,count))+sum;
    prime(c);
}
