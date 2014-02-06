var container = document.querySelector('#container2');
var msnry = new Masonry( container, { itemSelector: '.masonry' });
$("input").keyup(function(){
	var search=this.value;
	 $(".masonry").each(function(){
	 	var txt=$(this).text();
	 	if(txt.indexOf(search)==-1){
	 		$(this).hide();
	 	}
	 	else{
	 		$(this).show();
	 	}
	 })
});