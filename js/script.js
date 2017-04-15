$(function(){
	var leftVal = 0,
		rightVal = 100;
	// intialise slider
	$(".range-slider").bootstrapSlider({
		range: true, 
		value: [leftVal, rightVal]
	}) 
	.on("slide", function(slideEvt) {
		if(slideEvt.value.length > 0){
			$(".slide-left").val(slideEvt.value[0]);
			$(".slide-right").val(slideEvt.value[1]);
		}
	});
	$(".reset-slider").on("click", function(){
		$(".slide-left").val(leftVal);
		$(".slide-right").val(rightVal);
		$(".range-slider").slider('setValue', [leftVal, rightVal]); 
	})

	$( "#location" ).autocomplete({
      	source: _dbData.location
    });

    $( "#searchMarket" ).autocomplete({
      	source: _dbData.market
    });

    var concatArr =_dbData.location.concat(_dbData.market);     
    $("#mainSearch").autocomplete({
    	source: concatArr
    });


    $(".customize-column").on('click', function(){
    	$(".checkbox-cont").show();
    });
    $(".close-btn").on('click', function(){
    	$(".checkbox-cont").hide();
    });

    //$(".global-search").select2();
    
    $(".ui-autocomplete-input").keyup(function(){    	
    	var slectedVal = $(this).val();
    	
    	$(".marketSrchVal li a").each(function(i){
    		var myArr = [];
    		//myArr.push[slectedVal];    		
    	});
    });
    $.each(newcol,function(key,value){
     //alert(key);
    });

})


