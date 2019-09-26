var sklad = ["Sneakers", "Running", "Athletic", "Slip-on"];

var username = prompt('Welcome! What is your name?');

console.log('Hi' + username + '!');

document.write('<h1>Welcome,' + username + '!' + '</h1>');

var answer = prompt("Do you want to buy shoes ?")

while ("yes" === answer) {

    var shoes = prompt("What kind of shoe do you want ??");

    if (sklad.includes(shoes)) {

        var shoesSize = prompt("what size of shoes do you need?")

        document.write('<p>Your size is ' + shoesSize + '</p>');

        document.write('<p><img src="shoes/' + shoes + '.jpg"</p > ');
    } else {
        alert("sorry we dont have this shoes");
    }
    answer = prompt("Do you want to buy another shoes ?")
}


// if (wantsToOrder === 'yes') {

//     document.write('<p>We are so happy that you choosed us. </p>');

//     var shoesStyle = prompt('What style of shoes you prefer?')


// } else {
//     documen.write('<p>Thank you for stoping by. If you will have any questions go to contact page and we will happy to help you.</p>');
// }