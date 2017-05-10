'use strict';

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
<<<<<<< HEAD
    var randomIndex = Math.floor(Math.random() *
    data.length)
    vm.data = data[randomIndex];
    }
=======
    var randomIndex = Math.floor(Math.random() * data.length)
    vm.data = data[randomIndex];
  }

>>>>>>> b8038d4fe76c1cf32c4a48458c2c10b6cb064515
}());
