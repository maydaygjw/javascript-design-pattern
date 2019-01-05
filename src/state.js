import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {

    //监听执行收藏
    onDoStore() {
      alert('收藏成功')
      updateText()
    },
    //监听取消收藏
    onDeleteStore() {
      alert('已经取消收藏')
      updateText()
    }
  }
})

//更新按钮的文案
function updateText() {
  $btn.text(fsm.state)
}

let $btn = $('#btn1')
//按钮点击事件
$btn.click(() => {
  if(fsm.is('收藏')) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
})
//初始化文案
updateText()


