export const getRandomNumber= () => {
    return Math.floor((Math.random() * 10) + 1);
  }

export const fakeApiRequest  = () => {
    return new Promise(resolve=> setTimeout(()=>resolve(getRandomNumber()),1000))
}