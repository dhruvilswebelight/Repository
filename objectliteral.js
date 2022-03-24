// ex 1

let Name = "dhruvil";
let course = "reactJS"

var obj = 
{
    Name,
    course,
};
console.log(obj);

// ex 2

let n = "name";
var obj =
{
    [n] : "dhruvil",
    course : "reactJS"
};
console.log(obj);
console.log(obj.name);

// ex 3

let N = "student";
let obj1 =
{
    [ N + "name"] : "dhruvil",
    tech : "react",
    detail(){
        return `${this.studentname} is a student of ${this.tech}`
    }
};
    console.log(obj1);
    console.log(obj1['detail']());

//  ex 4   

let o = "student";
let obj2 =
{
    [ o + "name"] : "dhruvil",
    tech : "react",
    'detail show'()
    {
        return `${this.studentname} is a student of ${this.tech}`
    }
};
    console.log(obj2);
    console.log(obj2['detail show']());


