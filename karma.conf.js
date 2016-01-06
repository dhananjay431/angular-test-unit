// Karma configuration
// Generated on Wed Jan 06 2016 12:36:30 GMT+0530 (India Standard Time)
/*


'scripts/third-party/jquery-1.11.3.min.js',
'scripts/third-party/angular-ui-router.js',
'scripts/third-party/xeditable.js',
'scripts/third-party/xeditable.min.js',
'scripts/third-party/spin.min.js',
'scripts/third-party/angular-spinner.js',
'scripts/third-party/ui-bootstrap-tpls-0.13.3.min.js',
'scripts/third-party/angular-animate.min.js',
'scripts/third-party/bootstrap-switch.min.js',
'scripts/third-party/jquery-ui.js',
'scripts/third-party/select.min.js',
'scripts/third-party/focusif.js',
'scripts/third-party/Chart.min.js',
'scripts/third-party/angular-chart.js',
'scripts/third-party/hotkeys.min.js',
'scripts/third-party/bootstrap.min.js',
'scripts/third-party/ng-csv.min.js',
'scripts/third-party/angular-sanitize.min.js',
'scripts/third-party/isteven-multi-select.js',
'scripts/app/module.app.js',
'scripts/app/services/apiUtility.js',
'scripts/app/services/userService.js',
'scripts/third-party/angucomplete.js',
'scripts/third-party/angular-toastr.tpls.min.js',
'scripts/third-party/multiple.js',
'scripts/third-party/nprogress.js',
'scripts/third-party/toastr.js',
'scripts/third-party/toastr.tpl.js',
'scripts/third-party/angular-permission.js           ',
'scripts/third-party/ngDialog.min.js ',
'scripts/third-party/date.js ',
'scripts/third-party/bootstrap-select.min.js',
'scripts/third-party/jquery.selectBox.js',
'scripts/third-party/angular-growl-notifications.min.js',
'scripts/third-party/jquery.stickyheader.js',
'scripts/app/directives/header.js',
'scripts/third-party/bootstrap-multiselect.js',
'scripts/third-party/bootstrap-multiselect-collapsible-groups.js',
'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js',
'scripts/third-party/angularjs-dropdown-multiselect.js',
'scripts/third-party/d3.min.js',
'scripts/third-party/nv.d3.min.js',
'scripts/third-party/angular-nvd3.js',

        scripts/app/features/user/userCtrl.js
        scripts/app/features/customer/customerCtrl.js
        scripts/app/features/home/homeCtrl.js    
        scripts/app/features/admin/adminCtrl.js    
        scripts/app/features/products/prodCtrl.js 
        scripts/app/features/distributors/distCtrl.js   
        scripts/app/features/PurchaseOrder/poCtrl.js
        scripts/app/features/report/reportCtrl.js 
        scripts/app/features/PurchaseInvoice/piCtrl.js
        scripts/app/features/stock/stockCtrl.js
        scripts/app/features/alert/alertCtrl.js
        scripts/app/features/PurchaseInvoice/piDetailCtrl.js"></script--> 
        scripts/app/features/bank/bankCtrl.js
        scripts/app/features/Return/returnCtrl.js
        scripts/app/features/userBranch/userBranchController.js
        scripts/app/features/MainCtrl.js

        



   

    <link href="styles/thirdParty/nv.d3.min.css" rel="stylesheet" type="text/css">
<!-- report -->



*/


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	'node_modules/angular/angular.js',
    'node_modules/angular/angular-ui-router.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'app/*.js',
    'tests/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
