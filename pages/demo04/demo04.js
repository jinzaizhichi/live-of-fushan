// pages/demo04/demo04.js
Page({

  data: {
        num:0
  },
  handleInput(e) {
    
    this.setDate({
      num: e.detail.value
    })
  }
})