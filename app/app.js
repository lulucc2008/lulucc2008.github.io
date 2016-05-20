'use strict';
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
    .controller('appCtrl', function ($scope) {
        var vm = this;
        vm.hello = 'Hello wold!!';
    })
;