/** 
promisse* 
*/
let aceitar = true

console.log('iniciado')
const promessa = new Promise((resolve,
    reject) => {
    if (aceitar) {
        return resolve('aceito')
    }

    return reject('negado')
})

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizado'))

console.log('aguardando')