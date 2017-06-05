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

    get: function (req, res) {
	    Menu.find().exec(function(err, allItems) {
		    return res.view('menupage', {
                items: allItems
            });
	    });
    },

    update: function (req, res) {
        return res.json({
            todo: 'update() is not implemented yet!'
        });
    },

    delete: function (req, res) {
        return res.json({
            todo: 'delete() is not implemented yet!'
        });
    }

};
