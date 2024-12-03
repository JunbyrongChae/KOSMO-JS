//닭 -> 달걀 -> 계란후라이

const getHen = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve('🐓'), 1000)
    })
}

const getEgg = (hen) => {
    return new Promise((resolve, reject) =>{
        //setTimeout(() => resolve(`${hen} => 🥚`), 1000)
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
    })
}

const cook  = (egg) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    })
}

getHen()
    .then((hen) => getEgg(hen))
    .catch((error)=>{
        return "🍞"
    })
    .then((egg) => cook(egg))
    .then((meal) => console.log(meal))
    .catch(console.log('error'))
