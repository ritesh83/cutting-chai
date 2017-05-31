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

    'POST /api/menu': 'MenuController.create'

};
