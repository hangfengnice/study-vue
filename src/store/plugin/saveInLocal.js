export default store => {
// console.log('store 初始化')
if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    //  console.log('‘mutations')
    localStorage.state = JSON.stringify(state)
  }) 
}