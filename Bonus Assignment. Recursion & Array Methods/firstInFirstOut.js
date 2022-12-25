let InvoiceList = [
    "Invoice 008",
    "Invoice 007",
    "Invoice 006",
    "Invoice 005"
]

function insertToBottom(array){
    InvoiceList.push("Invoice 004");
    InvoiceList.push("Invoice 003");
    InvoiceList.push("Invoice 002");
    InvoiceList.push("Invoice 001");
    console.log(InvoiceList)
}

function reverseList(){
    InvoiceList.reverse(
    console.log(InvoiceList.sort((a, b) => a - b)))
}



insertToBottom(InvoiceList)

reverseList()

//console.log(InvoiceList.join(" "));
//reverseList();
//console.log(InvoiceList.join(" "));