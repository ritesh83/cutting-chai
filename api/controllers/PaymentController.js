var stripe = require('stripe')('sk_test_DWszSpRh3qUBF84Agavemurc');

module.exports = {

	create: function (req, res) {
		stripe.charges.create(
			{
			  	amount: 1000,
			  	currency: 'usd',
			  	description: 'Example charge',
			  	source: req.param('token'),
			},
			function(err, charge) {
				Payment.create({transaction:charge.id}).exec(function (err) {
				    if (err) {
					    return res.serverError(err);
				    }

				    return res.ok();
				});

				return res.json({charge: charge});
			}
		);
    }

};
