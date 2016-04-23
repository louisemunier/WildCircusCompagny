

var popupActive = 0;
function load() {

	if(popupActive == 0) {
				$('#background').css({
					"opacity": "0.6"
				});
				$('#background').fadeIn('slow');
				$('#popup').fadeIn('slow');
				popupActive = 1;
	}
}

function centerElement(popup) {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	var popupHeight = $("#popup").height();
	var popupWidth = $("#popup").width();

	$('#popup').css({
		"position": "absolute",
		"top": windowHeight/2*popupHeight/2,
		"left": windowWidth/2*popupWidth/2,
	});
}

function disable() {
	if(popupActive == 1) {
		$('#background').fadeOut('slow');
		$('#popup').fadeOut('slow');
			popupActive = 0;
	}
}

$(document).ready(function() {
	$('#btn_login').click(function() {
		load();
		center();
	});

	$('#close_popup').click(function() {
		disable();
	});
});

// open popup2

var popup2Active = 0;
function load2() {

	if(popup2Active == 0) {
				$('#background').css({
					"opacity": "0.6"
				});
				$('#background').fadeIn('slow');
				$('#popup2').fadeIn('slow');
				popup2Active = 1;
	}
}

function centerElement2(popup2) {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	var popup2Height = $("#popup2").height();
	var popup2Width = $("#popup2").width();

	$('#popup2').css({
		"position": "absolute",
		"top": windowHeight/2*popup2Height/2,
		"left": windowWidth/2*popup2Width/2,
	});
}

function disable2() {
	if(popup2Active == 1) {
		$('#background').fadeOut('slow');
		$('#popup2').fadeOut('slow');
			popup2Active = 0;
	}
}

$(document).ready(function() {
	$('#btn_create').click(function() {
		load2();
		center2();
	});

	$('#close_popup2').click(function() {
		disable2();
	});
});

// 
confirm('This my first Web site. Would you want to continue?');
