// LICENCE https://github.com/adaptlearning/adapt_authoring/blob/master/LICENSE
define(function(require) {
  var Backbone = require('backbone');
  var UserModel = require('../models/userModel.js');

  var UserCollection = Backbone.Collection.extend({
    model: UserModel,
    comparator: function(model) {
      return model.get('email').toLowerCase();
    },
    url: 'api/user/tenant'
  });

  return UserCollection;
});
