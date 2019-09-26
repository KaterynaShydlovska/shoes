var username = prompt('Welcome! What is your name?');

console.log('Hi' + username + '!');

document.write('<h1>Welcome,' + username + '!' + '</h1>');

console.log('<p>Hi,' + username + '</p>');

var shoesSize = prompt(' What is your shoes size?');

console.log(shoesSize);

document.write('<p>Your size is ' + shoesSize + '</p>');

var wantsToOrder = prompt('Do you wanna order new kicks?');

if (wantsToOrder === 'yes') {

    document.write('<p>We are so happy that you choosed us. </p>');

    var shoesStyle = prompt('What style of shoes you prefer?')

    document.write('<p><img src="shoes/' + shoesStyle + '.jpg"</p > ');
} else {
    documen.write('<p>Thank you for stoping by. If you will have any questions go to contact page and we will happy to help you.</p>');
}