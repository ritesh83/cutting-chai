/**
 * CartController
 *
 * @description :: Server-side logic for managing cart
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getAll: function (req, res) {
    return res.view('cartpage', {
        items: [
            {
                name: 'Cherry Vanilla',
                price: 15,
                quantity: 3,
                image: 'fl_icecream_cherryvanilla_hero.jpg'
            },
            {
                name: 'Green Tea',
                price: 12,
                quantity: 2,
                image: 'fl_icecream_greentea_hero.jpg'
            },
            {
                name: 'Belgian Chocolate',
                price: 7,
                quantity: 1,
                image: 'fl_icecream_belgianchocolate_hero.jpg'
            }
        ]
    });
  }
};
