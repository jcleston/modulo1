const promessa = new Promise(function (resolve, reject) {
    return resolve('ok')
    // return reject('error')
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('rodou')
    }
}

start()