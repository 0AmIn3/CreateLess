









function retur(str) {

    let result = [];

    str.split(' ').map(word => word.charAt(0) != '' ? result.push(word.charAt(0)) : '');


    if (result[0] == "-") {
        console.log(false);
    } else if (number == "" || number == " ") {
        console.log(NaN);

    } else {
        console.log(true);

    }
    
    return result;
}

let nbr = prompt().replace(/\s/g, '');

const number = nbr;

retur(number)





