import {inc, dec, getCounter} from './counter'

const incBtn = document.createElement('button')
const decBtn = document.createElement('button')

incBtn.innerHTML = 'PLUS'
decBtn.innerHTML = 'MINUS'

incBtn.addEventListener(
    'click',
    () => {
        inc()
        console.log(getCounter())
    }
)

decBtn.addEventListener(
    'click',
    () => {
        dec()
        console.log(getCounter())
    }
)

document.body.appendChild(incBtn)
document.body.appendChild(decBtn)

// we want to import counter from module named counter
// and attach functions from module to buttons
// and display in console actual value of counter
// when it changes