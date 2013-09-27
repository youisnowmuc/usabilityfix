$(document).ready(function () {
	var strUrl = document.URL.toLowerCase();
	var strCookieDomain = 'usabilityfix.de';

	//DEV strUrl = "file:///S:/YouIsNow/CI/WebseiteUsabilityFix/index.html#";
	var strToCheck = ("WebseiteUsabilityFix").toLowerCase();
	var n = strUrl.indexOf(strToCheck);
	if (n > -1) {
		strCookieDomain = 'none';
	}

	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments);
		}, i[r].l = 1 * new Date(); a = s.createElement(o),
		m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
		m.parentNode.insertBefore(a, m);
	})(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'gaTracker');

	//create default tracker object
	//cookieDomain differs between local environment and PROD environment
	gaTracker('create', 'UA-41425770-1', {
		'cookieDomain': strCookieDomain
	});

	//gaTracker('set', 'page', '/index.html');

	gaTracker('send', 'pageview', {
		'page': '/index.html',
		'hitCallback': function () {
			//alert('analytics.js done sending data');
		}
	});

	// event tracking:
	$('#lnkDownloadHandoutFirst').click(function () {
		gaSendTracking('event', 'hyperlink', 'click', 'click handout pdf download first');
	});
	$('#lnkDownloadHandoutSecond').click(function () {
		gaSendTracking('event', 'image', 'click', 'click handout pdf download second');
	});
	$('#imgArrowScrollDown').unbind('click').click(function () {
		gaSendTracking('event', 'image', 'click', 'click scroll down arrow');
	});
	$('#thumbImages').click(function () {
		gaSendTracking('event', 'image', 'click', 'click pictures thumb');
	});
	$('#thumbMovie').click(function () {
		gaSendTracking('event', 'image', 'click', 'click movie thumb');
	});
	$('#lnkImpressum').click(function() {
		gaSendTracking('event', 'hyperlink', 'click', 'click impressum hyperlink');
	});
	$('#spnPoweredByTop').click(function () {
		gaSendTracking('event', 'image', 'click', 'click YIN Logo on top');
	});
	$('#spnPoweredByBottom').click(function () {
		gaSendTracking('event', 'image', 'click', 'click YIN Logo on bottom');
	});
	$('#lnkJetztBewerben').click(function () {
		gaSendTracking('event', 'hyperlink', 'click', 'click jetzt bewerben');
	});
	$('#lnkMailtoLenaHoeck').click(function () {
		gaSendTracking('event', 'hyperlink', 'click', 'click Mail an Lena');
	});
	$('#lnkWeitereInfosAufFacebook').click(function () {
		gaSendTracking('event', 'hyperlink', 'click', 'click weitere Infos auf Facebook');
	});
	$('#btnEmailAboSubmit').click(function () {
		gaSendTracking('event', 'hyperlink', 'click', 'click Newsletter abonnieren');
	});

	
	

	
	

	//main tracker object method for "send"
	//requires
	// - event
	// - category
	// - action
	// - label
	function gaSendTracking(strEvent, strCategory, strAction, strLabel) {
		//alert('in gaSendTracking');
		//gaTracker('send', strEvent, strCategory, strAction, strLabel);
		
		gaTracker('send', strEvent, {
			'eventCategory': strCategory,
			'eventAction': strAction,
			'eventLabel': strLabel,
			'hitCallback': function () {
				//alert('analytics.js done sending data');
			}
		});
	}
	
	//The type of hit. Must be one of 'pageview', 'appview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'.
	//e.g.:
	//gaTracker('send', {
	//	'hitType': 'pageview',
	//	'page': '/home'
	//});

});