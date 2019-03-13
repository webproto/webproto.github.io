$(function () {
	// Tot
	var headerScroll = $('header');
	var footer = $('footer');
	var footerHeight = footer.height();
	var headerHeight = headerScroll.height();


	var ulNavigWrapScroll = $('#navigation-wrap');
	var ulNavigWrapInnerScroll = ulNavigWrapScroll.find('.navigation-wrap__inner');

	$(window).on('scroll', function () {

		var footerOffsetTop = footer.offset().top;
		var ulNavigWrapOffsetLeft = ulNavigWrapScroll.offset().left;
		var ulNavigWrapWidth = ulNavigWrapInnerScroll.width();
		var ulNavigWrapHeight = ulNavigWrapInnerScroll.height();
		var ulNavigWrapOffsetTop = ulNavigWrapScroll.offset().top;

		if ($(window).width() > 991) {
			if ((window.pageYOffset > ulNavigWrapOffsetTop) && (window.pageYOffset < footerOffsetTop - ulNavigWrapHeight - 200)) {
				ulNavigWrapInnerScroll.css({
					"position": "fixed",
					"top": ulNavigWrapOffsetTop / 2 + 10,
					"width": ulNavigWrapWidth,
				});
				ulNavigWrapInnerScroll.addClass('mx-0');
			} else {
				ulNavigWrapInnerScroll.css({
					"position": "",
					"top": "",
					"width": "",
				});
				ulNavigWrapInnerScroll.removeClass('mx-0');
			}
		}
	});
})