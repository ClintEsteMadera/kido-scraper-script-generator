'use strict';
require('angular');
require('angular-route');
require('angular-loading-bar');
require("simple-errors");

var Site = require('./model/Site');

module.exports = angular.module('KidoScraper', ['ngRoute',
                                                'angular-loading-bar',
                                                'ui.bootstrap',
                                                'ng-breadcrumbs',
                                                'toggle-switch',
                                                'ui.ace',
                                                'ui.grid',
                                                'ui.grid.resizeColumns',
                                                'ui.grid.autoResize',
                                                'ui.grid.moveColumns']);
