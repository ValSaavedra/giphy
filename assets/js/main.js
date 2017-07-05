$(document).ready(function(){
	var dibujarGifs = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
		$("elemetos").append(armarTemplate(gif , url));
		});
	}
}
//imprime las img de la palabra del input de html
//añade una url a web de la img

var armarTemplate = function(gif,url){
	var t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url + "'>Ver más</a></div>"
	return t;
}