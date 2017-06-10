module.exports = {

    create: function (req, res) {
        Menu.create({
            name: req.param('name'),
            image: req.param('image'),
            price: req.param('price')
        }).exec(function(err, menu) {
            //
        });
    },

    getAll: function (req, res) {
        Menu.find().exec(function(err, allItems) {
            return res.view('menupage', {
                items: allItems
            });
	    });
    }
};
