// 1. string
let fname= 'nguyen';
let lname= ' huynh';
let fullName = `${fname}${lname}`

// 2. number

// 3. boolean
// 4. underfined
// 5. null 
let index = null;

// 6. symbol
const secretKey = Symbol();

// --- Object ---
let userCustomizeChoice = "customized usename"
let cppCourse = {
    "name": 'CSS 2250',
    "hours": 3,
    semeter: 2025,
    'school name': "Cal Poly Pomona",
    [userCustomizeChoice]: "User name",
}

console.log(cppCourse.name);
console.log(cppCourse['hours']);
console.log(cppCourse['school name']);
console.log(cppCourse[userCustomizeChoice]);

// --- modify ---
cppCourse.name = "Web Development";
cppCourse["school name"] = "CPP";

//--- adding new key-value pair ---
cppCourse['location'] = "Pomona, CA"
cppCourse['Location'] = "CA, USA"

//delete a key-value pair ---
delete cppCourse["Location"];
console.log(cppCourse);





