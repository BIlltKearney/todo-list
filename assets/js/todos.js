// todos.js
// alert("connected");
// created by Kearney, Billt 2017 for web dev bootcamp

// check off items by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(350,function(){ //this refers to the span
		$(this).remove(); //this refers to the parent
	});
	event.stopPropagation();
});

//add a new item
$("input[type ='text']").keypress (function(event){
	if(event.which === 13){
		//get new todo from text
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append(" <li><span><i class='fa fa-trash fa-lg'></i></span> " + todoText + "</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text'").fadeToggle();
});