/*$("input[name='def']").each(function(){
	if($(this).attr("checked") != "checked") {
		alert("Кредит может быть выдан только гражданам РФ");
return false;
}
});*/

function validateComments(input) {
	if (input.[name='def'].attr("checked") != "checked") {
		input.setCustomValidity("Дайте более развернутый ответ.");   
	}
	else {
		  // Длина комментария отвечает требованию, 
		  // поэтому очищаем сообщение об ошибке
		input.setCustomValidity("");
	}
}