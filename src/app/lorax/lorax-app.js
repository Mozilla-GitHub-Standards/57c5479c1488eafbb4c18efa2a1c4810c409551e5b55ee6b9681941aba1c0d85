/**
 * loraxApp is the core module.
 * It serves as bootstrap for the app.
 *
 * @mixin lorax/loraxApp
 *
 */
define([
    'lorax/config/routes',

    // controller
    'lorax/controllers/core',

    // directives
    'lorax/directives/window',
    'lorax/directives/prevent-default',
    'lorax/directives/modal-email',
    'lorax/directives/modal-issue',
    'lorax/directives/modal-about',
    'lorax/directives/chart-civility',
    'lorax/directives/chart-common-languages',
    'lorax/directives/chart-world-map',
    'lorax/directives/chart-accessible',
    'lorax/directives/chart-platform-neutrality',
    'lorax/directives/chart-lobbying',
    'lorax/directives/chart-data-portability',
    'lorax/directives/chart-open-source',
    'lorax/directives/chart-surveillance',
    'lorax/directives/chart-security',
    'lorax/directives/chart-data-tracking',
    'lorax/directives/chart-concentration-power',
    'lorax/directives/chart-public-trust',
    'lorax/directives/chart-infrastructure',
    'lorax/directives/chart-intellectual-property',
    'lorax/directives/chart-identity-control',
    'lorax/directives/chart-cloud-security',
    'lorax/directives/experience',

    // services
    'lorax/services/window',
    'lorax/services/utils',
    'lorax/services/pubsub',
    'lorax/services/data',
    'lorax/services/experience',
    'lorax/services/routes',
    'lorax/services/share',

    // filters
    'lorax/filters/encode-uri',

    // Extras
    'lorax/browser-detection',

    'angular',
    'angular-route',
    'angular-animate'
], function (
    RouteConfig,

    // controllers
    CoreCtrl,

    // directives
    WindowDirective,
    PreventDefaultDirective,
    ModalEmailDirective,
    ModalIssueDirective,
    ModalAboutDirective,
    ChartCivilityDirective,
    ChartCommonLanguagesDirective,
    ChartWorldMapDirective,
    ChartAccessibleDirective,
    ChartPlatformNeutralityDirective,
    ChartLobbyingDirective,
    ChartDataPortabilityDirective,
    ChartOpenSourceDirective,
    ChartSurveillanceDirective,
    ChartSecurityDirective,
    ChartDataTrackingDirective,
    ChartConcentrationPowerDirective,
    ChartPublicTrustDirective,
    ChartInfrastructureDirective,
    ChartIntellectualPropertyDirective,
    ChartIdentityControlDirective,
    ChartCloudSecurityDirective,
    ExperienceDirective,

    // services
    windowService,
    utilsService,
    pubSubService,
    dataService,
    experienceService,
    routesService,
    shareService,

    // filters
    EncodeUriFilter,

    // Extras
    browserDetection,

    angular
) {
    'use strict';

    angular.module('loraxApp', [
        'ngRoute',
        'ngAnimate'
    ])

        // Set up routing
        .config(RouteConfig)

        /**
         * Injects {@link lorax/controllers/CoreCtrl} as 'CoreCtrl'
         * @method lorax/loraxApp~controller
         */
        .controller('CoreCtrl', CoreCtrl)

        /**
         * Injects {@link lorax/directives/WindowDirective} as 'WindowDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxWindow', WindowDirective)

        /**
         * Injects {@link lorax/directives/WindowDirective} as 'WindowDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxPreventDefault', PreventDefaultDirective)

        /**
         * Injects {@link lorax/directives/ModalEmailDirective} as 'ModalEmailDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxModalEmail', ModalEmailDirective)

        /**
         * Injects {@link lorax/directives/ModalIssueDirective} as 'ModalIssueDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxModalIssue', ModalIssueDirective)

        /**
         * Injects {@link lorax/directives/ModalAboutDirective} as 'ModalAboutDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxModalAbout', ModalAboutDirective)

        /**
         * Injects {@link lorax/directives/ChartCommonLanguagesDirective}
         * as 'ChartCommonLanguagesDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartCommonLanguages', ChartCommonLanguagesDirective)

        /**
         * Injects {@link lorax/directives/ChartWorldMapDirective}
         * as 'ChartLineGraphDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartWorldMap', ChartWorldMapDirective)

        /**
         * Injects {@link lorax/directives/ChartAccessibleDirective}
         * as 'ChartAccessibleDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartAccessible', ChartAccessibleDirective)

        /**
         * Injects {@link lorax/directives/ChartPlatformNeutralityDirective}
         * as 'ChartPlatformNeutralityDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartPlatformNeutrality', ChartPlatformNeutralityDirective)

        /**
         * Injects {@link lorax/directives/ChartLobbyingDirective}
         * as 'ChartLobbyingDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartLobbying', ChartLobbyingDirective)

        /**
         * Injects {@link lorax/directives/ChartDataPortabilityDirective}
         * as 'ChartDataPortabilityDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartDataPortability', ChartDataPortabilityDirective)

        /**
         * Injects {@link lorax/directives/ChartOpenSourceDirective}
         * as 'ChartOpenSourceDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartOpenSource', ChartOpenSourceDirective)

        /**
         * Injects {@link lorax/directives/ChartSurveillanceDirective}
         * as 'ChartSurveillanceDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartSurveillance', ChartSurveillanceDirective)

        /**
         * Injects {@link lorax/directives/ChartSecurityDirective}
         * as 'ChartSecurityDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartSecurity', ChartSecurityDirective)

        /**
         * Injects {@link lorax/directives/ChartDataTrackingDirective}
         * as 'ChartDataTrackingDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartDataTracking', ChartDataTrackingDirective)

        /**
         * Injects {@link lorax/directives/ChartConcentrationPowerDirective}
         * as 'ChartConcentrationPowerDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartConcentrationPower', ChartConcentrationPowerDirective)

        /**
         * Injects {@link lorax/directives/ChartPublicTrustDirective}
         * as 'ChartPublicTrustDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartPublicTrust', ChartPublicTrustDirective)

        /**
         * Injects {@link lorax/directives/ChartInfrastructureDirective}
         * as 'ChartInfrastructureDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartInfrastructure', ChartInfrastructureDirective)

        /**
         * Injects {@link lorax/directives/ChartIntellectualPropertyDirective}
         * as 'ChartIntellectualPropertyDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartIntellectualProperty', ChartIntellectualPropertyDirective)

        /**
         * Injects {@link lorax/directives/ChartIdentityControlDirective}
         * as 'ChartIdentityControlDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartIdentityControl', ChartIdentityControlDirective)

        /**
         * Injects {@link lorax/directives/ChartCloudSecurityDirective}
         * as 'ChartCloudSecurityDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartCloudSecurity', ChartCloudSecurityDirective)

        /**
         * Injects {@link lorax/directives/ChartCivilityDirective}
         * as 'ChartCivilityDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxChartCivility', ChartCivilityDirective)

        /**
         * Injects {@link lorax/directives/ExperienceDirective}
         * as 'ExperienceDirective'
         * @method lorax/loraxApp~directive
         */
        .directive('loraxExperience', ExperienceDirective)

        /**
         * Inject {@link lorax/services/windowService} as 'windowService'
         * @method lorax/loraxApp~service
         */
        .service('windowService', windowService)

        /**
         * Inject {@link lorax/services/utilsService} as 'utilsService'
         * @method lorax/loraxApp~service
         */
        .service('utilsService', utilsService)

        /**
         * Inject {@link lorax/services/experienceService} as 'experienceService'
         * @method lorax/loraxApp~service
         */
        .service('experienceService', experienceService)

        /**
         * Inject {@link lorax/services/routesService} as 'routesService'
         * @method lorax/loraxApp~service
         */
        .service('routesService', routesService)

        /**
         * Inject {@link lorax/services/shareService} as 'shareService'
         * @method lorax/loraxApp~service
         */
        .service('shareService', shareService)

        /**
         * Inject {@link lorax/services/pubSubService} as 'pubSubService'
         * @method lorax/loraxApp~factory
         */
        .factory('pubSubService', pubSubService)

        /**
         * Inject {@link lorax/services/dataService} as 'dataService'
         * @method lorax/loraxApp~factory
         */
        .factory('dataService', dataService)

        /**
         * Inject {@link lorax/services/encodeUriFilter} as 'encodeUri'
         * @method lorax/loraxApp~filter
         */
        .filter('encodeUri', EncodeUriFilter);

    // Initialize extras before the app is started.
    browserDetection.init();

    /**
    * Bootstrap the application
    */
    return angular.bootstrap(document, ['loraxApp']);
});
