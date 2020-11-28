const Utility = require('./Utility');
let readlineSync = require('readline-sync');

checkoption = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        /** take choice input from the user */
        let checkoption = readlineSync.question("\nEner your choice:-\n1.)push\n2.)pop\n3.)print\n4.)peek\n5.)length\n6.)reverse\n7.)exit\n");
        switch (checkoption) {
            case '1': 
		let element = readlineSync.question("Enter the element:");
                Utility.push(element);
                break;
            case '2': 
		Utility.pop();
                break;
            case '3': 
		Utility.print();
                break;
	    case '4': 
		let peek = Utility.peek();
		console.log(peek);    
	    case '5': 
		let lengthofstack = Utility.length();
		console.log(lengthofstack);
	    case '6':
		Utility.reverse();
		break;
            case '7': isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
checkoption();
