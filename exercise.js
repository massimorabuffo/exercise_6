function printName() {
    let helloName = "Hello John";
    console.log(helloName);
};

function inner() {
    return printName();
};

inner();
