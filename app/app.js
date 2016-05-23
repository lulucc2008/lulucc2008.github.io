'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
//require('../css/css.less');
//require('bootstrap/dist/css/bootstrap.min.css');
//require('angular-ui-bootstrap/dist/ui-bootstrap-csp.css');


var bootstrap = require('bootstrap');
var angular = require("angular");
var ngAnimate = require('angular-animate');
var uiRouter = require('angular-ui-router');
var uiBootstrap = require('angular-ui-bootstrap');
//var uiBootstrapTpls = require('angular-ui-bootstrap-tpls');

class AppCtrl {
    constructor($scope) {
        var vm = this;
        vm.hello = 'Hello wold!!';
    }
}

angular
    .module('lc', [
        //'i18nService',
        'ui.router',
        'ui.bootstrap',
        'ui.bootstrap.tooltip'
    ])
    .run(function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        //i18nService.setCurrentLang('zh-cn');
    })
    .config(function ($stateProvider, $urlRouterProvider, $uibTooltipProvider) {
        $uibTooltipProvider.setTriggers({
            mouseenter: 'mouseleave',
            click: 'click',
            focus: 'blur',
            hideonclick: 'click'
        });
        $stateProvider
            .state('lc', {
                url: '',
                template: '<div ui-view></div>'
            })
        ;
        $urlRouterProvider.otherwise('/');
    })
    .controller('appCtrl', AppCtrl)
;