$(function(){
	$("a[href$='#about']").bind({
		click: display_cover,
	});

	$('#about-btn-close').click( function() {
		
		
		$('#cover')
			.animate({opacity: 0}, 'fast', function() {
	        	$(this)
	         	   .css({'background-image': "url('/images/bg.png')"})
	            		.animate({opacity: 1});
	   		});

	   	$('#cover')
	   		.css("background-size", "auto 100%, auto 100%");
	   		
    });
});

function display_cover(event) {
		$('#cover').css("background-image", "url('/images/cover.jpg')");  
		$('#cover').css("background-size", "cover");
	}	
