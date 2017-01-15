/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var stripe = require('stripe')('sk_test_DWszSpRh3qUBF84Agavemurc');

module.exports = {

	create: function (req, res) {
		return stripe.charges.create(
			{
			  	amount: 1000,
			  	currency: 'usd',
			  	description: 'Example charge',
			  	source: req.param('token'),
			},
			function(err, charge) {
			  	return res.json({charge: charge});
			}
		);
    }

};
