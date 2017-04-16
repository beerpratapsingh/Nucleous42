
var n42 = {
	init: function(){
		var leftVal = 0, rightVal = 100;
		// intialise slider
		$(".range-slider").bootstrapSlider({
			range: true, 
			value: [leftVal, rightVal]
		}).on("slide", function(slideEvt) {
			if(slideEvt.value.length > 0){
				$(".slide-left").val(slideEvt.value[0]);
				$(".slide-right").val(slideEvt.value[1]);
			}
		});
		$(".reset-slider").on("click", function(){
			$(".slide-left").val(leftVal);
			$(".slide-right").val(rightVal);
			$(".range-slider").slider('setValue', [leftVal, rightVal]); 
		});

		//Load more companis data
		$('div.list-inline').slice(0,5).show();
		$(".load-more").on('click',function(){
			if($('div.list-inline:hidden').length>1){
		     $('div.list-inline:hidden').slice(0,2).show();
		     if($('div.list-inline:hidden').length<1){	
		     	$(this).addClass("disabled");
		     }	
			}else{
				$(this).addClass("disabled");
			}
		});

		//Auto Seacrh section
		$( "#searchlocation" ).autocomplete({
	      	source: _dbData.location
	    });
	    $( "#searchMarket" ).autocomplete({
	      	source: _dbData.market
	    });
	    var concatArr =_dbData.location.concat(_dbData.market);     
	    $("#mainSearch").autocomplete({
	    	source: concatArr
	    });    

	    //Auto Search & filter data
	    $(".ui-autocomplete-input").on('autocompletechange change', function () {
	        /*$('#tagsname').html('You selected: ' + this.value);*/
	        var slectedVal = this.value; 
	    	var mainSearch=false;
	    	if($(this).hasClass('global-search')){
	    		mainSearch=true;	    				
	    	}
	    	$(".locationSrchVal li a, .marketSrchVal li a").each(function(i){
	    		var listText = $(this).text();    		
	    		console.log(listText +"======="+ slectedVal);
	    		if(listText == slectedVal){    			    			    			    			
	    			if(mainSearch){
	    				if($('.srch-sec a#' +listText).length < 1)
	    				$('.srch-sec').append('<a href="javascrtip:;" class="link close-lst" id="'+listText+'">' + listText + '<span class="remove">x</span>'+'</a>');	    				
	    				$(".ui-autocomplete-input").val('');

	    				var elewidth = $('.close-lst').outerWidth();	    				
	    				$("#mainSearch").css('padding-left', '+=116');
	    			}
	    			$(this).addClass('active');
	    		}else{
	    			//$(this).removeClass('active');
	    		}
	    	});
	    }).change();
	    
	    $(".locationSrchVal li  a, .marketSrchVal li a").on('click', function(){
	    	$(this).removeClass('active');
	    	$(".ui-autocomplete-input").val('');
	    });


	    //remove slected values
		$('.clear-all').on('click', function(){            	
	    	$('.close-lst').remove();
	    	$('ul>li>a').removeClass('active');
	    	$("#mainSearch").val('');
	    	$("#mainSearch").css('padding-left', 30);
	    });
	    $(document).on('click', '.remove', function(){        
	    	var currVal = $(this).parent('a').attr('id');  	    	
	    	$('ul>li>a:contains('+currVal+')').removeClass('active');
	    	$(this).parent('.close-lst').remove();
	    	$("#mainSearch").css('padding-left', '-=116');
	    });

	    //open customize check list 
	    $(".customize-column").on('click', function(){
	    	$(".checkbox-cont").show();
	    });
	    $(".close-btn").on('click', function(){
	    	$(".checkbox-cont").hide();
	    });


	    //Column filter
		$('[data-id]').hide();
		$('[data-id]').on("click", function(){	
			var checkboxId = $(this).attr('data-id');        		
			if($(this).is(":checked")) {				
				$(this).parent().removeClass('disabled');
				$('[data-id="' + checkboxId + '"]').show();   
		    } else {	    	
		    	$(this).parent().addClass('disabled');
		    	$('[data-id="' + checkboxId + '"]').hide();   
		    }	   	
		});
		$('[data-id]').slice(0,5).trigger('click');

		// Slider for customize columns.
		$('.prev-icon').click(function(e) {      	
		    $('.list-wrap').animate({scrollLeft: "-=177px"}, "slow");
		});
		$('.next-icon').click(function(e) {       	
		    $('.list-wrap').animate({scrollLeft: "+=177px"}, "slow");
		});

	}
}

$(document).ready(function(){	
  n42.init();  
});