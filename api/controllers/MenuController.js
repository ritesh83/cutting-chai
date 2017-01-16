/**
 * MenuController
 *
 * @description :: Server-side logic for managing menus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `MenuController.create()`
   */
  create: function (req, res) {
    return res.json({
      todo: 'create() is not implemented yet!'
    });
  },


  /**
   * `MenuController.get()`
   */
  get: function (req, res) {
	  Menu.find().exec(function(err, allItems) {
		  return res.json({
			items: allItems
		  });
	  });
  },


  /**
   * `MenuController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `MenuController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

