var APP = APP || {};
APP.View = APP.View || {};

APP.View.Listing = ' \
		<% _.each(listing, function(val, key){ %> <div class="row"> \
			<div class="col-md-3"> \
				<a href="javascript:;"> \
					<div class="company-logo"> \
						<img src="<%= val.logo %>"> \
					</div> \
					<div class="company-desc"> \
						<b class="company-ttl"><%= val.title %></b> \
						<span class="company-sub-ttl"><%= val.description %></span>	\
					</div> \
				</a> \
			</div> \
			<div class="col-md-2"> <%= val.location %> </div> \
			<div class="col-md-2"> <%= val.market.join(", ") %> </div> \
			<div class="col-md-2"> \
				<a class="link" href="javascript:;"><%= val.website %></a> \
			</div> \
			<div class="col-md-1"><%= val.employee %> </div> \
			<div class="col-md-2"><%= val.stage %></div> \
		</div> <% }); %>\
';