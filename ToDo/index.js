var todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

for(var i=0; i<todoItems.length; i++) {
	if(todoItems[i].isComplete) {
		$("ul").append('<li id="' + i + '" class="completed"><span><i class="fa fa-trash-o"></i></span>' + todoItems[i].value + '</li>');
	} else {
		$("ul").append('<li id="' + i + '"><span><i class="fa fa-trash-o"></i></span>' + todoItems[i].value + '</li>');
	}
}

//to check the todo's
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
	var index = parseInt($(this).attr('id'));
	todoItems[index].isComplete = $(this).hasClass('completed');
	localStorage.setItem("todoItems", JSON.stringify(todoItems));
});


//to delete todo
$("ul").on("click","span",function(event){    // can use any name for parameter.. like event, evt, e , abc.
	var index = parseInt($(this).parent().attr('id'));
	todoItems.splice(index, 1);
	localStorage.setItem("todoItems", JSON.stringify(todoItems));
	$(this).parent().fadeOut(500,function(){       // why callback? otherwise remove() will happen immediately.
		$(this).remove();                    //why not only fadout? because there will be hidden diplay:none for every li which will slow down.
    });
  event.stopPropagation();    // to stop event bubbling as span is inside li so li event will also occour.
});


//to add new todo .
$("input").on("keypress",function(event){
   if(event.which === 13) {               // 13 is for enter
   	
    // savng the value of input in a varible
   	var newTodo = $(this).val();
   	// empty the input
   	$(this).val("");
   	// make it a new li and the add/append to the existing ul
   	$("ul").append('<li id="' + todoItems.length + '"><span><i class="fa fa-trash-o"></i></span>' + newTodo + '</li>');
   	todoItems.push({
   		value: newTodo,
   		isComplete: false
   	});
   	localStorage.setItem("todoItems", JSON.stringify(todoItems));
   }
});