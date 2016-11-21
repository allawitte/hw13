'use strict';

angular.module('myApp.home', [])
    .controller('MainController', [function () {
        var mc = this;
        mc.menu = [
            {sref: "/home.view1", title:"view1"},
            {sref: "/home.view2", title:"view2"}
            ];
    }]);
/**
 * Created by HP on 11/20/2016.
 */




