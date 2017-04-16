$(function(){
	APP = APP || {};
    APP.View = APP.View || {};
    var page = 1, offset;
    var items_per_page = 4;
    var total_page = Math.floor(_dbData.company.length / items_per_page);

	APP.View.ListingView = Backbone.View.extend({
        el: '#wrapperList',
        template: _.template(APP.View.Listing),
        events:{
            "click .share-top a": "analytics"
        },
        initialize: function(){
            //$("#wrapper").html("<p class='loader'>loading...</p>");
            var that = this;
            this.render();
            $(".load-more").on("click", function(){
            	that.loadData();
            });
        },
        render: function(){
            that = this;
            //, {data: }
            $('p.loader').remove();
            var result = that.paginateData();
            var output=  this.template({listing: result});
            $(this.el).append(output);
            $("#load-data").html(_.template($("#load-data").html()))
        },
        loadData: function(){
        	var result = that.paginateData();
        	var output=  this.template({listing: result});
        	$("#wrapperList").append(output);
        },
        paginateData: function(){
        	offset = (page - 1) * items_per_page;
        	var response = _dbData.company.slice(offset, items_per_page + offset);
        	if(page >= total_page){ $(".load-more").remove() }
        	page++;
        	return response;
        }
    });    

	new APP.View.ListingView();
});