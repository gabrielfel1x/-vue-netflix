export async function loginUser(email: string, password: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'gabrieldoreact@gmail.com' && password === 'gabriel123') {
        resolve({
          id: 1,
          name: 'Gabriel Felix',
          email: 'gabrieldoreact@gmail.com',
          token: 'token',
        })
      } else {
        reject('senha ta errada men kk')
      }
    }, 1000)
  })
}
