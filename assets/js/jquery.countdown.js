/* http://keith-wood.name/countdown.html
   Arabic (عربي) initialisation for the jQuery countdown extension
   Translated by Talal Al Asmari (talal@psdgroups.com), April 2009. */
(function($) {
	'use strict';
	$.countdown.regionalOptions.en = {
		labels: ['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],
		labels1: ['Year','Month','Week','Day','Hour','Minute','Second'],
		compactLabels: ['a', 'm', 's', 'd'],
		whichLabels: null,
		digits: ['0','1','2','3','4','5','6','7','8','9'],
		timeSeparator: ':',
		isRTL: false
	};
	$.countdown.setDefaults($.countdown.regionalOptions.en);
})(jQuery);
