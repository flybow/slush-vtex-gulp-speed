APP.controller.Orders = ClassAvanti.extend({
  init () {
    this.start()
  },

  start () {
    this.removeBoostrap()
  },

  removeBoostrap () {
    $('link[href$="bootstrap.min.css"]').remove()
  }
})
