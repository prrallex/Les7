// var number = 10,sum = 0;
// for (var i = 1;i <= 10; i+=2){
// 	sum += i;
// 	console.log(i)
// }
// for (var i = 2; i <= number; i+=2) {
// 	sum -= i;
// 	console.log(i)
// }
// console.log(sum)


// var number = 9;
// var result = (number - number%2)/2*-1+(number%2*number);
// console.log(result)




// var res = 0;
// $("#plus").click(function(event){
// 	$("#res").text(res = res+1)
// });
// $("#min").click(function(event){
// 	$("#res").text(res = res-1)
// });
// $("#res").click(function(event){
// 	$("#res").text(res=0)
// });


// .empty - уберает, но оставляет HTML
// .remove - удаляет
// $("#btn").click(function(event) {
// 	$("div").addClass('red')
// });



// var colors = ["red","green","blue","silver"];
// var currentClass = 0;
// $("#btn").click(function(event){
// 	if (currentClass < colors.length){
// 		$("div").removeClass(colors[currentClass-1])
// 		$("div").addClass(colors[currentClass++])
// 	}
// 	else{
// 		$("div").removeClass(colors[colors.length-1])
// 		$("div").addClass(colors[currentClass = 0])
// 	}
// });

// $("a").click(function(event){
// 	event.preventDefault();
// 	// $(this).remove();
// 	console.log($(this).attr('href'));
// 	$(this).removeAttr('href').attr('dara-item','/')
// 	$(this).css('color','gold');
// });


var statement = true
$("#btn").click(function(event){
	for (var i = 0;i < $("a").length; i++){
		if($("a").eq(i).attr('href') == "http://infopulse.com"){
			$("a").eq(i).toggleClass('toggle');
			if(statement){
				$(this).text("Show infopulse links")
				statement = false
			}
			else{
				$(this).text("Hide infopulse links")
				statement = true
			}
		}
	}
});