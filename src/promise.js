import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'reject'
    }
  ],
  methods: {
    onResolve(state, data) {

    },
    onReject(state, data) {

    }
  }
})

class MyPromise {
  constructor(fn) {

  }
}

(function loadImg() {
  let url = 'https://img2.mukewang.com/545846690001c92702200220-140-140.jpg'

  const promise = new Promise((resolve, reject) => {

    let img = document.createElement('img');
    img.onload = () => {
      resolve()
    }
    img.onerror = (err) => {
      reject(err)
    }

    img.src = url;

    document.getElementById('imgContainer').appendChild(img)
  })

  promise.then(data => {
    console.log('加载成功')
  }).catch(err => {
    console.log(err)
  })

})()