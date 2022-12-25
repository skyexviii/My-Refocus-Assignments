const bankAccountID = 1234567890

const bankAccount = {
    "bankAccountID": bankAccountID,
    "accountNumber": 5487-9658-2545-12,
    "credentials": [{"username": "pabloe", "password": "Narcos2022", "PIN": "420420"}],
    "balance": 2000,
    "createdAt": "12/19/2022"
}
const userAccount = {
    "bankAccount": bankAccount,
    "debitCard": "5142-5896-5814-6234",
    "firstName": "Pablo",
    "lastName": "Escobar",
    "birthDate": "12/01/1949",
    "validID": [
        {"type of ID": "passport", "ID number": "1233456789"},
        {"type of ID": "driver's license", "ID number": "987654321"}],
    "address": "Medellin, Colombia"

};


function getBankAccountDetails(username, password){
    for (user of bankAccount.credentials){
        if ((user.username === username) && (user.password === password)){
            console.log(`Credentials Validated`)
            console.log(bankAccount)
            valid = true;
        }
        else {
            console.log(`Credentials is Invalid`)
            valid = false;
        }
    }
}
function withdrawMoney(username, password, wAmount){
    for (user of bankAccount.credentials){
        if ((user.username == username) && (user.password==password) && (bankAccount.balance >= wAmount)){
            bankAccount.balance -= wAmount;
            console.log(`You have successfully withdrawn ${wAmount}. You now have ${bankAccount.balance} in the bank.`)
        }else if ((user.username !== username) || (user.password !== password)) {
            console.log(`Invalid Credentials`)
        }else if ((user.username == username) && (user.password == password) && (bankAccount.balance < wAmount)){
            console.log(`Insufficient Funds!!!`);
        }else{
            return 0;
        }
    } 
}

function depositMoney(accountNumber, dAmount){
        if (accountNumber !== bankAccount.accountNumber){
            console.log(`Invalid Account Destination`)
        }else{
            bankAccount.balance += dAmount
            console.log(`You have successfully added ${dAmount} to your bank account. Your balance is now ${bankAccount.balance}`)
        }
};


    getBankAccountDetails("pabloe", "Narcos2022")
    withdrawMoney("pabloe", "Narcos2022", 2000)
    depositMoney(5487-9658-2545-12, 5000)