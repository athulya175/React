let number=123456.789
number =number.toLocaleString("en-IN",{style:"currency",currency:"INR"})        //tolocaleString has 2 arguments("locale",{options})->locale represent the country or location and the other is objects
console.log(number)