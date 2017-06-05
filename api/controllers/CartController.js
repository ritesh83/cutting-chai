module.exports = {

    getAll(req, res) {

        if (req.session.cart) {
            let itemIds = Object.keys(req.session.cart);

            Menu.find({
                id: itemIds
            }).exec((err, items) => {
                if (!err) {
                    items.forEach((item) => {
                        item['quantity'] = req.session.cart[item['id']];
                    })

                    return res.view('cartpage', {
                        items: items
                    });
                }
            });
        } else {
            return res.view('cartpage', {
                items: []
            });
        }
    },

    addToCart(req, res) {
        if (!req.session.cart) {
            req.session.cart = {};
        }

        if (!req.session.cart[req.param('id')]) {
            req.session.cart[req.param('id')] = 0;
        }

        req.session.cart[req.param('id')] = req.session.cart[req.param('id')] + 1;

        return res.json({
            'message': 'success'
        });
    },

    updateQuantity(req, res) {
        const itemId = req.param('item_id');
        const action = req.param('action');

        if (action === 'increment') {
            req.session.cart[itemId] = req.session.cart[itemId] + 1;
        } else if (action === 'decrement') {
            req.session.cart[itemId] = req.session.cart[itemId] - 1;
        }

        return res.json({
            'message': 'success'
        });
    },

    removeItem(req, res) {
        const itemId = req.param('item_id');

        delete req.session.cart[itemId];

        return res.json({
            'message': 'success'
        });
    }

};
