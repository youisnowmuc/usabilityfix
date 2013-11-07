$(document).ready(function () {

	/*
	 *  Simple image gallery
	 */
	$('#thumbImages').click(function () {
		$.fancybox.open([
				{
					href: 'images/2013_07_29/img001.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img002.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img003.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img004.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img005.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img006.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img007.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}, {
					href: 'images/2013_07_29/img008.jpg',
					title: 'UsabilityFix YouIsNow Labs München 27.5.2013'
				}

		], {
			helpers: {
				thumbs: {
					width: 75,
					height: 50
				}
			}
		});
	});

	//play movie in fancybox
	$("#thumbMovie").click(function () {
		$.fancybox.open({
			href: 'movies/index27052013.html',
			type: 'iframe',
			autoSize: false,
			width: '870px',
			height: '525px',
			scrolling: 'no',
			padding: 5
		});
		$(this).unbind('click');
	});


	//arrow down
	var $elem = $('#divContainerMain');
	$('#imgArrowScrollDown').click(function () {
	  $("html, body").animate({ scrollTop: $elem.height() / 3 }, 700);
	  //return false;
	});

});