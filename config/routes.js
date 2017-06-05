module.exports.routes = {

    '/': {
        view: 'homepage'
    },

    '/menu': 'MenuController.get',

    '/checkout': {
        view: 'checkout'
    },

    '/cart': 'CartController.getAll',

    '/add-to-cart': 'CartController.addToCart',

    '/update-quantity': 'CartController.updateQuantity',

    'POST /api/menu': 'MenuController.create'

};
