/**
 * CavernController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


  /**
   * Action blueprints:
   *    `/cavern/index`
   *    `/cavern`
   */
  index: function(req, res) {

    // Send a JSON response
    Cavern.find(0).done(function(err, response) {
      if (err) {
        throw (new Error('Error when try to get cavern'));
      }
      return res.json({
        cavern: response
      })
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CavernController)
   */
  _config: {}


};