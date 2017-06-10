module.exports.routes = {

    '/': {
        view: 'homepage'
    },

    '/menu': 'MenuController.getAll',

    '/checkout': {
        view: 'checkout'
    },

    '/cart': 'CartController.getAll',

    '/add-to-cart': 'CartController.addToCart',

    '/update-quantity': 'CartController.updateQuantity',

    '/remove-item': 'CartController.removeItem',

    'POST /api/menu': 'MenuController.create'

};
