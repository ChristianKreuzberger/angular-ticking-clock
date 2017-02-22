(function() {
    "use strict";

    var module = angular.module('angular-ticking-clock', []);

    /**
     * Angular Ticking Clock
     * 
     * A fast and simple directive for displaying the current time without the use of $interval or $timeout,
     * avoiding any digest cycles.
     */
    module.directive('tickingClock', ['$filter', function($filter) {
        return {
            restrict: 'E', // this directive should always be used as an element, never as an attribute or comment
            scope: {
                updateInterval: '=?',
                dateTimeFormat: '@'
            },
            link: function(scope, element, attrs) {
                /**
                 * Timer for canceling/clearing
                 **/
                var updateTimer = undefined;

                /**
                 * Update Date Time with pure javascript for performance reasons
                 */
                var updateDateTime = function() {
                    if (attrs.dateTimeFormat)
                        element.text($filter('date')(new Date(), attrs.dateTimeFormat));
                    else
                        element.text($filter('date')(new Date()));
                };


                /**
                 * Initialize the clock and the updateTimer 
                */
                var init = function() {
                    console.log('in init');
                    // clear existing interval timers
                    if (updateTimer) {
                        clearTimeout(updateTimer);
                        updateTimer = undefined;
                    }

                    // if attributes.updateInterval is set, keep updateing by using an setInterval
                    if (attrs.updateInterval) {
                        updateTimer = setInterval(updateDateTime, attrs.updateInterval);
                    }

                    // update current time once
                    updateDateTime();
                };


                // watch for any changes on updateInterval or dateTimeFormat and re-initialize 
                scope.$watchGroup(['updateInterval', 'dateTimeFormat'], init);

                /**
                 * On Destroy of this directive, we need to cancel the timer
                */
                scope.$on(
                    "$destroy",
                    function( event ) {
                        if (updateTimer)
                            clearTimeout(updateTimer);
                    }
                );

            }
        };
    }]);
})();