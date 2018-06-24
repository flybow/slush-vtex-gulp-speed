<% if (newStore) { %>APP.controller.Account = ClassAvanti.extend({
  init () {
    this.setup()
    this.start()
    this.bind()
  },

  setup () {
    this.options = {
      $profileModal: $('.av-modal--profile .av-modal__content'),
      $profileContent: $('#editar-perfil-conteudo, #editar-perfil #response-message'),

      $addressEditModal: $('.av-modal--edit-address .av-modal__content'),
      $addressEditContent: $('#form-address'),

      $addressRemoveModal: $('.av-modal--remove-address .av-modal__content'),
      $addressRemoveContent: $('#address-remove #exclude'),

      $addressEditAttributes: $('.edit-address-link .address-update, .account-address .account-btn'),
      $addressRemoveAttributes: $('.account__content .delete')
    }
  },

  start () {
    this.cloneForms()
    this.changeAttributes()
  },

  cloneForms () {
    this._cloneForm('$profileModal', '$profileContent')
    this._cloneForm('$addressEditModal', '$addressEditContent')
    this._cloneForm('$addressRemoveModal', '$addressRemoveContent')
  },

  _cloneForm (modal, content) {
    const {
      [modal]: $modal,
      [content]: $content
    } = this.options

    $modal.html($content)
  },

  changeAttributes () {
    this.setEditAttributes()
    this.setRemoveAttributes()
  },

  setEditAttributes () {
    const { $addressEditAttributes } = this.options

    $addressEditAttributes.each((index, element) =>
      this._attributeFn(element, 'av-modal--edit-address'))
  },

  setRemoveAttributes () {
    const { $addressRemoveAttributes } = this.options

    $addressRemoveAttributes.each((index, element) =>
      this._attributeFn(element, 'av-modal--remove-address'))
  },

  _attributeFn (element, target) {
    const _this = $(element)

    _this
      .addClass('av-modal-open')
      .attr('data-target', target)
  },

  bind () {
    this.bindClose()
  },

  bindClose () {
    $('.av-modal .modal-footer button').on('click', event => {
      event.preventDefault()

      const _this = $(event.currentTarget)
      const $close = _this.parents('.av-modal').find('.av-modal-close')

      $close.trigger('click')
    })
  }
})<% } else { %>APP.controller.Account = ClassAvanti.extend({
  init () {
  }
})<% } %>
