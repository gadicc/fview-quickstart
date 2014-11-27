# To use this file
#
#   meteor add coffeescript
#
# and then delete routing.js

Router.configure layoutTemplate: "layout"

Router.route "/",
  template: "home"

Router.route "page2"