import counterInIndexJS, { inc as incFromFirstModule } from './first-module'


//when using export default we can name imported value as we want

// we can change name of named import using as 

const declaredVariable = 'Ala ma kota'

console.log(declaredVariable)

console.log(this)

console.log(counterInIndexJS)

console.log(incFromFirstModule)