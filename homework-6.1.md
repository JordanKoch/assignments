`https://blog.avast.com/2014/03/07/google-play-whats-the-newest-threat-on-the-official-android-market/`
```javascript
Account localAccount1 = arrayOfAccount [k];
label90:
int m;
// If localAccount type is a WhatsApp account do following;
if (localAccount1.type.equals ("com.whatsapp"))
{
    str1 = localAccount1.name;
    break label217;
    m = arrayOfAccount.length;
}
// For interger n equals 0; notepad++??
for (int n = 0;; n++)
{
    //If n is greater or equal to m(arrayOfAccount.length)
    if (n >= m)
    {
        //If str1(localAccount1.name) does not equal null, str3 is created and returned.
        if (str1 != null)
        {
            String str3 = e(str1);
            a = str3;
            return str3;
        }
    }
    //Else different account/array
    else
    {
        Account localAccount2 = arrayOfAccount [n];
        //If localAccount2.type.eqauls whatever that is, continue; str1 becomes localAccount2.name, continue
        if (!localAccount2.type.equals("org.telegram.messenger.account")) {
            continue;
        }
        str1 = localAccount2.name;
        continue;
    }
    int i1 = arrayOfAccount.length;
    // For ???
    for (;;)
    {
        //If i is greater or equal to 11; str1 double equals null, break; str4 is created and returned
        if (i >= 11)
        {
            id(str1 == null) {
                break;
            }
            String str4 = e(str1);
            a = str4;
            return str4;
        }
        //For this account, if it is true, str1 equals localAccount3.name
        Account localAccount3 = arrayOfAccount [i];
        if (localAccount3 = arrayOfAccount[i];
            str1 = localAccount3.name;
        }
        i++;
```

`http://eloquentjavascript.net/chapter2.html/  Excercise 2.2`
```javascript
//This program does the math problem: 2^10
//var result is.....the result; var counter is the exponent.
var result = 1;
var counter = 0;
//while the counter remains less than 10; multiply result by two and counter by 1.
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
//Once that loop is completed, print result.
show(result);
```

`http://eloquentjavascript.net/chapter2.html/  Excercise 2.3`
```javascript
//This program basically prints half a triangle.
//var line is an empty string and var counter is 0.
var line = "";
var counter = 0;
//While counter is less than 10, add a '#' to line, then print and add 1 to counter.
while (counter < 10) {
  line = line + "#";
  print(line);
  counter = counter + 1;
}
```