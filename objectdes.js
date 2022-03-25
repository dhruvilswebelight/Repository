// ex 1

const biodata =
{
    name : "divyash",
    age : "55",
    deg : "bsc"

}
let {name,age,deg} = biodata;
console.log(`my name is ${name}. my age is ${age}. my qua. is ${deg}.`);

// ex 2

const Biodata =
{
    NAME: "Divyash",
    Age : "55",
    DeG : "bsc",
    hobby :
    {
        first : "playing",
        sec : "traveling"
    }

}

let {NAME:MYNAME,Age:AGES,DeG,hobby} = Biodata;
console.log(`my name is ${MYNAME}. my age is ${AGES}. my qua. is ${DeG}. i love ${hobby.sec}`);
