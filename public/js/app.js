/* Application Sripts */

$(window).load(function() {
	// Load List of Forms
	$.ajax({
		'url': '/Forms/',
		'success': function(data) {
			var html = '<ul>';
			for(var i = 0; i<data.length;i++) {
				html+= '<li data-url="/Forms/'+i+'">';
				html+= data[i];
				html+= '</li>'
			}
			html+= '</ul>';
			$("#formList").html(html);
			$("#formList li").click(function(e) {
				console.log('click')
				var url = $(this).data("url");
				var type = url.match(/\d/)[0];
				$.ajax({
					'url': url,
					'success': function(data) {
						presentForm(data, type);
					},
					'error': function(err) {
						console.log(err);
					}
				})
			})
		},
		'error': function(err) {
			console.log(err)
		}
	})
});

function presentForm(data, type) {
	$("#docForm").remove();
	var html = '<form id="docForm" enctype="multipart/form-data" action="/Forms/';
	html+= type;
	html+= '" method="POST">';
	$(".socialHome .row").append(html);

	for(var field in data) {
		if(typeof data[field] === 'string') {
			$("#docForm").append("<label>"+field+"</label>");
			$("#docForm").append("<input name="+field+" type="+data[field]+">");
		} else {
			var arr = data[field];
			$("#docForm").append("<fieldset>"+field+"<br>");
			for (var i = arr.length - 1; i >= 0; i--) {
				var o = arr[i];
				for(var j = 0; j < Object.keys(o).length; j++) {
					$("#docForm fieldset").append("<label>"+Object.keys(o)[j]+"</label>");
					$("#docForm fieldset").append("<input name="+Object.keys(o)[j]+" type="+o[Object.keys(o)[j]]+">");
				}
			}
		}
	}
	$("#docForm").append("<input type='submit' value='Submit'>");
}