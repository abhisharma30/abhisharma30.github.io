var todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

for(var i=0; i<todoItems.length; i++) {
	if(todoItems[i].isComplete) {
		$("ul").append('<li id="' + i + '" class="completed"><span><i class="fa fa-trash-o"></i></span>' + todoItems[i].value + '</li>');
	} else {
		$("ul").append('<li id="' + i + '"><span><i class="fa fa-trash-o"></i></span>' + todoItems[i].value + '</li>');
	}
}


$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
	var index = parseInt($(this).attr('id'));
	todoItems[index].isComplete = $(this).hasClass('completed');
	localStorage.setItem("todoItems", JSON.stringify(todoItems));
});


$("ul").on("click","span",function(event){ 
	var index = parseInt($(this).parent().attr('id'));
	todoItems.splice(index, 1);
	localStorage.setItem("todoItems", JSON.stringify(todoItems));
	$(this).parent().fadeOut(500,function(){    
		$(this).remove(); 
    });
  event.stopPropagation(); 
});

$("input").on("keypress",function(event){
   if(event.which === 13) { 
   	var newTodo = $(this).val();
   	$(this).val("");
   	$("ul").append('<li id="' + todoItems.length + '"><span><i class="fa fa-trash-o"></i></span>' + newTodo + '</li>');
   	todoItems.push({
   		value: newTodo,
   		isComplete: false
   	});
   	localStorage.setItem("todoItems", JSON.stringify(todoItems));
   }
});