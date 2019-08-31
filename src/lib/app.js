export const getAppname1 = () => {
  return new Promise((resolve, reject) => {
    const err= null
    setTimeout(() => {
      if(!err) {
        resolve({
          code: 200,
          info: {
            appName: "newAppname"
          }
        })
      } else {
        reject(err)
      }
    })
  });
}
