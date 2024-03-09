const account1={
    owner:"Shubham Singh",
    movements:[2000,4500,6000,-3333,245,-8247,-3284,3713,2454,-6638,],
    interestRate:1.2,
    pin:110202
}

const account2={
    owner:"Nikhil Mittal",
    movements:[2000,4533,9000,-3333,244,-8938,-3234,,245,3713,-8998,-8247,-3284,3713,],
    interestRate:1.5,
    pin:567333
}

const account3={
    owner:"Oshank Singhai",
    movements:[454,3336,7777,-3713,2454,-6638,-4434,8844,-15,15,,245,-8247,-3284,3713,],
    interestRate:1.3,
    pin:576888
}

const account4={
    owner:"Amit Kumar Singh",
    movements:[-4432,4533,9000,-773,7334,,245,-8247,-3284,8674,-3343-3227],
    interestRate:1.7,
    pin:198345
}

const account=[account1,account2,account3,account4]

//Element selector
const labelWelcome=document.querySelector('.welcome')
const labelDate=document.querySelector('.date')
const labelBalance=document.querySelector('.balance__value')
const labelSumIn=document.querySelector('.summary__value--in')
const labelSumOut=document.querySelector('summary__value--out')
const labelSumIntreset=document.querySelector('.summary__value--intreset')
const labeltimer=document.querySelector('.timer')

const containerApp=document.querySelector('.app')
const containerMovements=document.querySelector('.movements')

const btnLogin=document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnClose= document.querySelector('.form__btn--close')
const btnSort= document.querySelector('.btn--sort')
const btnLoad=document.querySelector('form__btn--load')

const inputLoginUser=document.querySelector('.login__input--user')
const inputLoginPin= document.querySelector('.login__input--pin')
const inputTransferTo= document.querySelector('.form__input--to')
const inputTransferAmount= document.querySelector('.form__input--amount')
const inputLoanAmount=document.querySelector('.form__input--loan-amount')
const inputCloseUsername= document.querySelector('.form__input form__user')
const inputClosePin= document.querySelector('.form__input--pin')


const displayMovements= function(movements){
    containerMovements.innerHTML=''
    movements.forEach(function(mov,i){
        const type= mov>0?'deposit':"withdrawal";
        const html=`<div class="movement__rows">
        <div class="movement_type movement_type--${type}">${i} ${type}</div>
        <div class="movement__value">${mov} &#8377</div>
    </div>`

    containerMovements.insertAdjacentHTML('afterbegin',html)
    })

}
displayMovements(account1.movements)

const createUsername= function(accs){
    accs.forEach(function(acc){
        acc.username=acc.owner.toLowerCase().split(" ").map(names => names[0]).join('').toUpperCase()
    })
}
createUsername(account)
console.log(account)
