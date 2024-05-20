const account1 = {
    owner: "Shubham Singh",
    movements: [2000, 4500, 6000, -3333, 245, -8247, -3284, 3713, 2454, 6638],
    interestRate: 1.2,
    pin: 111,
    movementsDates: [
        '2024-03-27T00:31:17.178Z',
        '2024-03-26T07:42:02.383Z',
        '2024-03-23T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
        '2020-01-30T22:01:34.790Z',
        '2024-09-23T15:54:44.790Z'
    ],
    currency: 'INR',
    locale: 'en-IN', // de-DE
}

const account2 = {
    owner: "Nikhil Mittal",
    movements: [2000, 4533, 9000, -3333, 244, -8938, -3234, , 245, 3713, -8998, -8247, -3284, 3713,],
    interestRate: 1.5,
    pin: 222,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
        '2020-01-30T22:01:34.790Z',
        '2024-09-23T15:54:44.790Z',
        '2020-04-01T10:17:24.185Z'
    ],
    currency: 'USD',
    locale: 'en-IN',
}

const account3 = {
    owner: "Oshank Singhai",
    movements: [454, 3336, 7777, -3713, 2454, -6638, -4434, 8844, -15, 15, , 245, -8247, -3284, 3713],
    interestRate: 1.3,
    pin: 333,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}

const account4 = {
    owner: "Amit Kumar Singh",
    movements: [-4432, 4533, 9000, -773, 7334, , 245, -8247, -3284, 8674, -3343, -3227],
    interestRate: 1.7,
    pin: 444,
    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}

const account = [account1, account2, account3, account4]

//Element selector
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelBalanceDate = document.querySelector('.balance__date')
const labelDateValue = document.querySelector('.movement__date')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumIntrest = document.querySelector('.summary__value--interset')
const labeltimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.button__nav')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')
const btnLoan = document.querySelector('.form__btn--loan')

const inputLoginUser = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')


const formatMovementDate = function(date){
    const caldaysPassed = (date1,date2)=> Math.round(Math.abs(date2-date1)/(1000*60*60*24))
    const daysPassed= caldaysPassed(new Date(), date);
    // console.log(daysPassed)
    if (daysPassed == 0) return "Today"
    if(daysPassed == 1) return "Yesterday"
    if(daysPassed <=7) return `${daysPassed} Days ago`
    else{
        const datenOW = `${date.getDate()}`.padStart(2, 0);
        const month = `${(date.getMonth() + 1)}`.padStart(2, 0);
        const year = `${date.getFullYear()}`.padStart(2, 0);
        return `${datenOW}/${month}/${year}`
    }
}

const formatCurrency =function(value,locale,currency){
    return new Intl.NumberFormat(locale,{
        style   :"currency",
        currency:"INR"
    }).format(value)
}

const displayMovements = function (acc) {
    currentAccount = account.find(acc => acc.username === inputLoginUser.value)
    containerMovements.innerHTML = ''
    acc.movements.forEach(function (mov, i) {
        const date = new Date(acc.movementsDates[i])
        // console.log(date)
        
        // const dateLabel = `${datenOW}/${month}/${year}`
        const dateLabel = formatMovementDate(date);
        console.log(currentAccount.locale)

        const type = mov > 0 ? 'deposit' : "withdrawal";
        const html = `<div class="movement__rows">
        <div class="movement_type movement_type--${type}">${i} ${type}</div>
        <div class="movement__date"> ${dateLabel} </div>
        <div class="movement__value">${formatCurrency(mov,currentAccount.locale,currentAccount.currency)}</div>
    </div>`

        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

// const displayDates=function(x){
//     console.log(x)
//      labelDateValue.innerHTML = ' '


//         const html=
//         console.log("reached")
//          labelDateValue.insertAdjacentHTML('afterbegin', html)
//     }) 
// }

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(" ").map(names => names[0]).join('').toLowerCase()
    })
}
createUsername(account)

const updateUi = function (acc) {
    // displayDates(acc.movementsDates)
    displayMovements(acc)
    currentbal(acc.movements)
    console.log(currentbal(acc.movements))
    currentAccount.balance =  currentbal(acc.movements)
    labelBalance.innerHTML = formatCurrency(currentbal(acc.movements),acc.locale,acc.currency) //`&#8377 ${currentbal(acc.movements)}`//
    displaySummary(acc)
}


// console.log(account)

// const deposits= (accountvalue) =>{
//     account.forEach((accountinsideaccount)=>{
//         accountinsideaccount.movements.filter((movv) =>{
//             accountinsideaccount.deposits=[]
//           if (movv>0) {
//             console.log(movv)
//             accountinsideaccount.deposits.push(movv)}
//         })
//     })
// }
// const depo=deposits(account)
// console.log(account1)


// Highest Value in movements
movements = [2000, 4500, 6000, -3333, 245, -8247, -3284, 3713, 2454, -6638, 10345]
// const currentbal= (val) =>{

//     const x = val.movements.reduce((acc,mov)=>{
//             if(acc > mov) return acc ; 
//             else return mov;  
//         },val.movements[0])
//         return x

// }
// console.log(currentbal(account1))


// --------------Setting Total Balance----------------------//
function currentbal(val) {
    const x = val.reduce((acc, mov) => {
        return acc + mov
    }, val[0])

    return x

}


// --------------Setting Out/In/Interset Balance----------------------//
const displaySummary = function (value,acc) {
    currentAccount = account.find(acc => acc.username === inputLoginUser.value)
    const income = value.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => {
            return acc + mov;
        }, 0)
        // console.log(Math.floor(income))
        // console.log(acc)
        // console.log(acc.currency)
        // console.log(acc.locale)
        
    labelSumIn.innerHTML = formatCurrency(Math.floor(income),currentAccount.locale,currentAccount.currency)
    /*`&#8377 ${Math.floor(income)} */ 

    const out = value.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => {
            return acc + mov
        }, 0)
    labelSumOut.innerHTML = formatCurrency(Math.floor(out * -1),currentAccount.locale,currentAccount.currency)
    // `&#8377 ${Math.floor(out)}`

    const interest = value.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * value.interestRate) / 100)
        .filter(mov => mov > 1)
        .reduce((acc, mov) => acc + mov, 0)
    labelSumIntrest.innerHTML = formatCurrency(Math.floor(interest.toFixed(2)),currentAccount.locale,currentAccount.currency)
    // `&#8377 ${Math.floor(interest.toFixed(2))}`
}



// -----------------.find-------------------//
const prices = [12.5, 8.9, 25.7, 10.2, 8.6]
const x = prices.find(mov => mov.toFixed(1))
// console.log(x)


// -----------------event Handlers-------------------//
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = account.find(acc => acc.username === inputLoginUser.value)
    // console.log(currentAccount)
    if (currentAccount && currentAccount.pin === +(inputLoginPin.value)) {
        // if(currentAccount ?. currentAccount.pin === +(inputLoginPin.value))
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
        const dateNow = new Date;
        // console.log(dateNow)
        const options = {
            hour: "numeric",
            minutes: "numeric",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
        // console.log(currentAccount.locale)
        // console.log(new Intl.DateTimeFormat(currentAccount.locale, options).format(dateNow))
        // console.log(x)
        // console.log(currentAccount.locale)
        labelBalanceDate.innerHTML = `As of ${new Intl.DateTimeFormat(currentAccount.locale, options).format(dateNow)}`

        containerApp.style.opacity = '1'


        //------------calling functions---------------------//
        updateUi(currentAccount)
    }
    else {
        labelWelcome.textContent = `Wrong pin or username`
    }

    //------------clearing inputs------------------------//
    inputLoginUser.value = inputLoginPin.value = ""
})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = account.find(acc => acc.username === inputLoginUser.value)
    const amount = Math.floor(inputTransferAmount.value)
    // console.log(amount)
    const receiveaccount = account.find(acc => acc.username === inputTransferTo.value)


    inputTransferAmount.value = inputTransferTo.value = ''
console.log("heyy"+currentAccount.balance)
    if (amount > 0 && receiveaccount && currentAccount.balance > amount &&
        receiveaccount.username !== currentAccount.username) {
        console.log("Valid")
    }

    currentAccount.movements.push(-amount)
    currentAccount.movementsDates.push(new Date().toISOString())
    receiveaccount.movements.push(amount)
    receiveaccount.movementsDates.push(new Date().toISOString())
    updateUi(currentAccount)
    // console.log(currentAccount)
    // console.log(receiveaccount)
})


//-------------------------close-account----------------------//
btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log("closing intialized")
    // console.log(inputCloseUsername.value)
    // console.log(currentAccount.username)
    // console.log(+(inputClosePin.value))
    // console.log(currentAccount.pin)
    if (inputCloseUsername.value === currentAccount.username && +(inputClosePin.value) == currentAccount.pin) {
        // console.log(currentAccount.username)
        const index = account.findIndex(
            acc => acc.username === currentAccount.username
        )
        account.splice(index, 1);
        console.log("account closed ")
        console.log(account)
        inputCloseUsername.value = inputClosePin.value = ''
        containerApp.style.opacity = '0'
    }
})


//----------------------------Request-Loan-----------------------//

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const Amount = Math.floor(inputLoanAmount.value)
    // console.log(Amount)
    if (Amount > 0 && Amount >= currentAccount.movements.some(mov => mov > Amount * 0.1)) {
        console.log("Loan Approved")
        currentAccount.movements.push(Amount)
        currentAccount.movementsDates.push(new Date())
        updateUi(currentAccount)

    }
    inputLoanAmount.value = ''
})


//--------------------------------Login-Date----------------------//
// const dateNow = new Date()
// const datenOW = `${date.getDate()}`.padStart(2, 0);
// const month = `${(date.getMonth() + 1)}`.padStart(2, 0);
// const year = `${date.getFullYear()}`.padStart(2, 0);
// const hour = `${date.getHours()}`.padStart(2, 0);
// const min = `${date.getMinutes()}`.padStart(2, 0);
// const sec = `${date.getSeconds()}`.padStart(2, 0);
// console.log(date)
// labelBalanceDate.innerHTML = `As of ${datenOW}/${month}/${year}, ${hour}:${min}:${sec}`
// const dateNow = new Date;
// const options = {
//     hour: "numeric",
//     minutes: 'numeric',
//     year: "numeric",
//     month: "long",
//     day: "long"
// }

// labelBalanceDate.innerHTML = `As of ${new Intl.DateTimeFormat(currentAccount.locale, options).format(dateNow)}`

