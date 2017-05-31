module.exports = {

    getAll: function (req, res) {
        Menu
            .find({
                id: req.session.cart
            })
            .exec(function (err, items){
                return res.view('cartpage', {
                    items: items
                });
            });
    },

    addToCart: function (req, res) {
        if (!req.session.cart) {
            req.session.cart = [];
        }

        req.session.cart.push(req.param('id'));

        return res.json({
            "message": "success"
        });
    }

};
