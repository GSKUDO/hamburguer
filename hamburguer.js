let breadValue
let breadName
let burguerValue
let burguerName
let saladValue
let saladName
let cheeseValue
let cheeseName

function bread(name, price){
    console.log(name, price)
    breadName = name;
    breadValue = price;
}

function burguer(name, price){
    console.log(name, price)
    burguerName = name;
    burguerValue = price;
}

function salad(name, price){
    console.log(name, price)
    saladName = name;
    saladValue = price;
}

function cheese(name, price){
    console.log(name, price)
    cheeseName = name;
    cheeseValue = price;
}

function conta() {
    let conta = breadValue+burguerValue+saladValue+cheeseValue;
    console.log(conta);
    let html = "<tr>";
        html +="<td>" + "Pão" + "</td>"
        html +="<td>" + breadName + "</td>"
        html +="<td>" + breadValue + "</td>"
        html +="</tr>"
        document.getElementById("tablebody").innerHTML +=html;
        html = "<tr>";
        html +="<td>" + "Hambúrguer" + "</td>"
        html +="<td>" + burguerName + "</td>"
        html +="<td>" + burguerValue + "</td>"
        html +="</tr>"
        document.getElementById("tablebody").innerHTML +=html;
        html = "<tr>";
        html +="<td>" + "Salada" + "</td>"
        html +="<td>" + saladName + "</td>"
        html +="<td>" + saladValue + "</td>"
        html +="</tr>"
        document.getElementById("tablebody").innerHTML +=html;
        html = "<tr>";
        html +="<td>" + "Queijo" + "</td>"
        html +="<td>" + cheeseName + "</td>"
        html +="<td>" + cheeseValue + "</td>"
        html +="</tr>"
        document.getElementById("tablebody").innerHTML +=html;
        html = "<tr>";
        html +="<td>" + "Valor" + "</td>"
        html +="<td>" + "Total" + "</td>"
        html +="<td>" + conta + "</td>"
        html +="</tr>"
        document.getElementById("tablebody").innerHTML +=html;
    return true;
}
