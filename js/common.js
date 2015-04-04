jQuery(function($) {
    $(document).ready(function() {
        if ($('body').hasClass('home')) {
            initFrontpage();
        }

        switchSlide(location.hash.slice(1));

        $('a.map-link').on('click', function(e) {
            var currentAttrValue = $(this).attr('href');
            switchSlide(currentAttrValue.slice(1));
            // e.preventDefault();
        });
    });

    $(window).resize(function() {
        var $window = $(window);
        var new_height = $window.height();
        var new_width = $window.width();
        $('#slides .slide').each(function() {
            $(this).height(new_height);
            $(this).width(new_width);
        });
    });
    
    function switchSlide(slide) {
        // console.log('switching "' + slide + '"');
        $('#slides').find('.slide').each(function() {
            $(this).animate({opacity: 0}, 1000);
        })
        $('#slides .slide').each(function() {
            $(this).css('opacity', 0);
            $(this).hide();
        });
        var current = $('#' + slide);

        if (current.length == 0) {
            $('#home').show();
            $('#home').addClass('show').animate({opacity: 1.0}, 1000);
        } else {
            $(current).show();
            $(current).animate({opacity: 1.0}, 1000);
        }
    }
    
    function initFrontpage() {
        // slides setup
        $('#slides .slide').height($(window).height() - $('.footer').height());
        // $('#slides .slide.start').css({'opacity':1}).removeClass('start');
        $('#slides .slide .fade-first, #slides .slide .fade-second, #slides .slide .blur').css({'opacity': 0});
    
        setTimeout(function() {
            $('#slides .slide.show .fade-first').animate({opacity: 1.0}, 1000);
        }, 1000);
    
        $slides = $('#slides');
        
        imagesLoaded('#slides slide-1', function() {
                        // console.log($slides.find('.slide.show'));
    					$slides.find('.slide.show').animate({opacity: 1}, 1000);
    					});
    					
    					setTimeout(function() { 
    					    $slides.find('.slide.show .bg-img.blur').animate({opacity: 1}, 1000);
    					    $slides.find('.slide.show .front-container').animate({opactity: 1}, 1000);
    				    }, 2000);
    	
        /*
        // intro slide
        setTimeout(function() {
            $('#slides .slide.show .fade-first').animate({opacity: 1.0}, 1000);
        }, 1000);
    
        // (re)setup slideshow timer when images are loaded
        $('#slides').imagesLoaded(function() {
            setTimeout(function() { 
    			$('#slides .slide.show .fade-second').animate({opacity: 1.0}, 1000);
    		}, 4000);
    		
    		setTimeout(function() { 
    			$('#slides .slide.show .bg-img.blur').animate({opacity: 1.0}, 2000);
    		}, 3000);
    		
    		if ((typeof timerSlideshow !== "undefined")) {
    			clearTimeout ( timerSlideshow );
    		}
    		timerSlideshow = setTimeout('gallery()',8000);
        });
        */
    }
    
    function gallery(target) {
        jQuery(function($) {
            $slides = $('#slides');	
    		
    		//timer
    		if ((typeof timerSlideshow !== "undefined")) {
    			clearTimeout ( timerSlideshow );
    		}
    		timerSlideshow = setTimeout('gallery()',10000);
    		
    		//if no elements have the show class, grab the first image
    		var current = ($slides.find('.slide.show') ?  $slides.find('.slide.show') : $slides.find('.slide:first'));		
    		
    		
    		if (current.index() != target) {
    			if (target == 'previous') {
    				var next = ((current.prev().length) ? ((current.prev().hasClass('caption'))? $slides.find('.slide:last') :current.prev()) : $slides.find('.slide:last'));
    			}
    			else if (!isNaN(parseFloat(target)) || target == 0) {
    				//load target image
    				var next = $slides.find('.slide:eq('+target+')');
    			} else {
    				//load next image
    				var next = ((current.next().length) ? ((current.next().hasClass('caption')) ? $slides.find('.slide:first') :current.next()) : undefined);
    			}
    			
    			//if not at end of slideshow, continue
    			if (next != undefined) {
    				//reset styles for animations
    				next.find('.fade-first').css({'opacity':0});
    				next.find('.fade-second').css({'opacity':0});
    				next.find('.bg-img.blur').css({'opacity':0});
    				
    				//start video
    				if (next.find('#slide_video').length) {
    					next.find('#slide_video').get(0).play();
    				}
    				
    				//show next slide
    				next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
    			
    				//hide current slide
    				current.animate({opacity: 0.0}, 1000).removeClass('show');
    				
    				//navigation
    				//$('#mobile-nav-dots span').removeClass( 'nav-dot-current' );
    				//$('#mobile-nav-dots span').eq(next.index()).addClass( 'nav-dot-current' );
    				
    				//internal animations
    				setTimeout(function() { 
    					$slides.find('.slide.show .fade-first').animate({opacity: 1.0}, 1000);
    				}, 3000);
    				
    				setTimeout(function() { 
    					$slides.find('.slide.show .fade-second').animate({opacity: 1.0}, 1000);
    				}, 5000);
    				
    				setTimeout(function() { 
    					$slides.find('.slide.show .bg-img.blur').animate({opacity: 1}, 1000);
    				}, 2000);
    				
    			} else {
    				clearTimeout ( timerSlideshow );
    			}
    			
    		}
        });
    }

});