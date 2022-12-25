function createBankAccount(name){
    balance = 0
    console.log(`Congratulations ${name}! You have created a bank account!`);
}

function depositAmount(name, dAmount, callback){
    balance += dAmount;
    console.log(`You have successfully deposited P${dAmount}, you now have P${balance} in the bank`);
    callback(name, dAmount);
}

function checkBalance(){
    console.log(`You currently have P${balance} in the bank`);
}

function withdrawAmount(name, wAmount, callback){
    balance -= wAmount
    if (wAmount > balance){
        balance += wAmount
        console.log(`Insufficient Funds`); return;
    } else {console.log(`You have successfully withdraw ${wAmount}, remaining balance is ${balance}`)}
    callback(name, wAmount);
}

createBankAccount("Carlo");
depositAmount("Carlo", 500, checkBalance);
withdrawAmount("Carlo", 600, checkBalance);
checkBalance();