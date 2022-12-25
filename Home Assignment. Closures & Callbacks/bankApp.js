function createBankAccount(name){
    balance = 0;
    console.log(`Congratulations ${name}! You have created a bank account!`);
    function depositeAmount(dAmount){
        balance += dAmount;
        console.log(`You have successfully deposited P${dAmount}, you now have P${balance} in the bank`);
    }
    function checkBalance(){
        console.log(`You currently have P${balance} in the bank`);
    }
    function withdrawAmount(wAmount){
        balance -= wAmount;
        if(wAmount > balance){
            balance += wAmount
            console.log(`Insufficient funds, max withdrawal can only be ${balance}.`);
            return;
        } else
        console.log(`You have successfully withdrawn P${wAmount}, your current balance is P${balance}`);
    }
    return{
        depositeAmount,
        checkBalance,
        withdrawAmount
    }
}

let carloBank = createBankAccount("Carlo");
carloBank.depositeAmount(50000);
carloBank.checkBalance();
carloBank.withdrawAmount(60000);
carloBank.checkBalance()