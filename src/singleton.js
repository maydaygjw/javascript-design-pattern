class SingleObject {

  constructor() {
  }

  login() {

    return 'login'
    
  }
}

SingleObject.getInstance = (function() {

  let instance

  return function() {
    if(!instance) {
      instance = new SingleObject()
    }
    return instance
  }
    
})()

let o1 = SingleObject.getInstance()
let o2 = SingleObject.getInstance()

console.log(o1 === o2)