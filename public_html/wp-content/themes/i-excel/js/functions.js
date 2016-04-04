/**
 * Functionality specific to i-excel.
 *
 * Provides helper functions to enhance the theme experience.
 */

( function( $ ) {
	var body    = $( 'body' ),
	    _window = $( window );
	
	/**
	 * Enables menu toggle for small screens.
	 */
	( function() {
		var nav = $( '#site-navigation' ), button, menu;
		if ( ! nav )
			return;

		button = nav.find( '.menu-toggle' );
		if ( ! button )
			return;

		// Hide button if menu is missing or empty.
		menu = nav.find( '.nav-container' );
		if ( ! menu || ! menu.children().length ) {
			button.hide();
			return;
		}

		$( '.menu-toggle' ).on( 'click.iexcel', function() {
			//nav.toggleClass( 'toggled-on' );
		} );
	} )();

	/**
	 * Makes "skip to content" link work correctly in IE9 and Chrome for better
	 * accessibility.
	 *
	 * @link http://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
	 */
	_window.on( 'hashchange.iexcel', function() {
		var element = document.getElementById( location.hash.substring( 1 ) );

		if ( element ) {
			if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
				element.tabIndex = -1;

			element.focus();
		}
	} );

		
} )( jQuery );

/* scripts to run on document ready */
jQuery(document).ready(function($) {
	// 
	/* ================================================
       Google Map
       ================================================ */
      if (document.getElementById('map')) {
      var mapStyle = [
      {
        'stylers': [
          {
            'hue': '#ff1a00'
          }, {
            'invert_lightness': true
          }, {
            'saturation': -100
          }, {
            'lightness': 33
          }, {
            'gamma': 0.5
          }
        ]
      }, {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#414042'
          }
        ]
      }
    ];
    // Language
      var language = location.href.indexOf('/uk/');
      var content = {
        ua:{
          marker1:{
            title: "Термоком",
            description:"Будівництво систем теплопостачання"
          }
        },
        en:{
          marker1:{
            title:"",
            description:""
          }
        }
      }
      function getConcatValue(object) {
        return ['<div id="content" style="width:200px;max-height:115px;">',
          '<h4 style="margin:0" id="firstHeading" class="firstHeading">',
            object.title,
          '</h4>',
          '<div id="bodyContent">',
            '<p>',
              object.description,
            '</p>',
          '</div>',
        '</div>'].join('');
        
      }
      var a = Object.keys(content).map(function (lang) {
        return Object.keys(content[lang]).map(function(marker){
          return getConcatValue(content[lang][marker]);
        });
      })
      // Map initialization
      var myLatLng = {lat: 49.802215, lng: 24.052889};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false
      });
      var styledMap = new google.maps.StyledMapType(mapStyle, {
        name: 'Styled Map'
      });
      map.mapTypes.set('map-style', styledMap);
      map.setMapTypeId('map-style');

      // Markers
      var markersLatLng = {
        position1: {lat: 49.802215, lng: 24.052889},
      };
      var markers = {};
      for (var i=1; i<10; i++) {
        markers["marker"+i] = new google.maps.Marker({
          position: markersLatLng["position"+i],
          map: map,
          animation: google.maps.Animation.DROP,
        })
      }
      // Info Window
      var markerWindows = [];
      if (language > 0) {
        for (var i = 1; i < 10; i++) {
          markerWindows["window"+i] = new google.maps.InfoWindow({
            content: a[1][i-1]
          });
        }
      } else {
        for (var i = 1; i < 10; i++) {
          markerWindows["window"+i] = new google.maps.InfoWindow({
            content: a[0][i-1]
          });
        }
      }
      
      var lastOpenedInfoWindow = false;
      for (var i in markers) {
        (function(i){
            markers[i].addListener('click', function() {
              closeLastOpenedInfoWindo();
              markerWindows["window"+i.slice(-1)].open(map, markers[i]);
              lastOpenedInfoWindow = markerWindows["window"+i.slice(-1)];
            });
        })(i);
      }
      function closeLastOpenedInfoWindo() {
        if (lastOpenedInfoWindow) {
            lastOpenedInfoWindow.close();
        }
      }
    }

	
	/* customizing the drop down menu */
	jQuery('div.nav-container > ul > li > a').append( '<span class="colorbar"></span>' );
    jQuery('div.nav-container ul > li').hover(function() {
        jQuery(this).children('ul.children,ul.sub-menu').stop(true, true).slideDown("fast");
    }, function(){
        jQuery(this).children('ul.children,ul.sub-menu').slideUp("fast");
    });
	
	jQuery('.search-form').append( '<span class="searchico genericon genericon-search"></span>' );
	
	
	
	/* adding class for no featured image posts */
	$( "div.entry-nothumb" ).parent(".meta-img").addClass("no-image-meta");
	
	/* Go to top button */
	jQuery('body').append('<a href="#" class="go-top animated"><span class="genericon genericon-collapse"></span></a>');
                        // Show or hide the sticky footer button
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
        	jQuery('.go-top').fadeIn(200).addClass( 'bounce' );
        } else {
            jQuery('.go-top').fadeOut("slow");
        }
    });


    // Animate the scroll to top
    jQuery('.go-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, 1000);
    });	
	
	
	/* Side responsive menu	 */
	$('.menu-toggle').sidr({
      	name: 'sidr-left',
      	side: 'left',
		source: '.nav-container',
			onOpen: function() {
				$('.menu-toggle').animate({
					marginLeft: "260px"
				}, 200);
			},
			onClose: function() {
				$('.menu-toggle').animate({
					marginLeft: "0px"
				}, 200);
			}
    });
	
	$(window).resize(function () {
        if ($(window).width() > 1070) {
            $.sidr('close', 'sidr-left');
        }
	  	equalheight('#ft-post article');
    });	
	
	/*equal height for featured post for two column view */
	
	equalheight = function(container){
	
		var currentTallest = 0,
			 currentRowStart = 0,
			 rowDivs = new Array(),
			 $el,
			 topPosition = 0;
		$(container).each(function() {
		
		   $el = $(this);
		   $($el).height('auto')
		   topPostion = $el.position().top;
		
		   	if (currentRowStart != topPostion) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			   		rowDivs[currentDiv].height(currentTallest);
			 	}
			 	rowDivs.length = 0; // empty the array
			 	currentRowStart = topPostion;
			 	currentTallest = $el.height();
			 	rowDivs.push($el);
		   	} else {
			 	rowDivs.push($el);
			 	currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		  	}
		   	for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			 	rowDivs[currentDiv].height(currentTallest);
		   	}
		});
	}

  	equalheight('.main article');
	


	/*
	$(window).scroll(function(){
		var newvalue = parseInt($(this).scrollTop()*0.25)-64;
    	$('.ibanner').css('background-position', '0px '+newvalue+'px');
	});
	*/
	
	

	$(window).load(function(){	
		
		// footer area masonry	
		$('#footer-widgets').each(function () {
			$(this).masonry({});
		});
		
		// Two column Blog layout masonry
		$('#blog-cols').each(function () {
			$(this).masonry({});
		});		
		
	});		
	
	
	// slider
	$('#da-slider').each(function() {
		
		_this = $(this);
		var slider_speed = _this.data('slider-speed');
	
		_this.owlCarousel({
	 		
			navigation : true,
			autoPlay : slider_speed,
			paginationSpeed : 600,
			singleItem: true,
			rewindSpeed: 600,
			stopOnHover: true,
			navigationText: ['<span class="genericon genericon-leftarrow"></span>','<span class="genericon genericon-rightarrow"></span>'],
			addClassActive: true,
			theme : "owl-theme1",
			goToFirstSpeed : 1000,
			slideSpeed : 600,
			autoHeight: true			
	 
		});
	 
	});

	
});

/* scripts to run as loads */

(function($) {
	
	/* acrolling header */
	var nav_container = $(".headerwrap");
	var nav = $(".site-header");

	var top_spacing = 30;
	var waypoint_offset = 60;
	
	if( $( window ).width() > 999 )
	{
		if ( $(".admin-bar").length>0 )
		{
			if($( window ).width()<766)
			{
				var top_spacing = 0;
			} else
			{
				var top_spacing = 30;
			}
		} else
		{
			var top_spacing = 0;
		}
		nav_container.waypoint({
			handler: function(direction) {
				
				if (direction == 'down') {
					nav_container.css({ 'height':nav.outerHeight() });		
					nav.stop().addClass("fixeddiv").css("top",-nav.outerHeight()).animate({"top":top_spacing});
				} else {
				
					nav_container.css({ 'height':'auto' });
					nav.stop().removeClass("fixeddiv").css("top",nav.outerHeight()).animate({"top":""});
				}
				
			},
			offset: function() {
				return -nav.outerHeight()-waypoint_offset;
			}
		});
	}

	/* no utility bar class addition */
	if ( $('.utilitybar').length == 0 )
	{
		$('.headerwrap').addClass('noutility');
	}
	
	/* featured post on scroll animation 
	$('div#featured .post').css("opacity","0.0");
	
	$('div#featured').waypoint(function() {
		$( "div#featured .post" ).each(function(index) {
			var _this = $(this);
			setTimeout( function () {
				$('div#featured .post').show();
				_this.addClass( 'animated fadeInUp' );
				_this.css("opacity","1.0");
   			}, (index+1) * 200);
		});
	},
	{
		offset: '100%',
		triggerOnce: true
	});
	*/
	
	/*
	$('#primary .entry-thumbnail').waypoint(function() {
		$(this).addClass( 'animated fadeInLeft' );
	},
	{
		offset: '100%',
		triggerOnce: true
	});
	
	$('div#primary div.post-mainpart').waypoint(function() {
		$(this).addClass( 'animated fadeInUp' );
	},
	{
		offset: '100%',
		triggerOnce: true
	});
	*/	
		
		
})(jQuery);
/**/
