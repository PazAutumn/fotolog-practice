var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
	//guardar en una variable mi contenedor de posteos que está vacío en el html
	var containerPost = document.getElementById('contenedor-posteos');
	//rescatar los textos que ingresó el usuario en el input y texarea
	
	var name = document.getElementById('nombre').value;
	//limpiando input
	document.getElementById('nombre').value = "";
	
	var comment = document.getElementById('cajaposteos').value;
	//limpiando textarea
	document.getElementById('cajaposteos').value = "";
	//creando elementos necesarios
	var post = document.createElement("div");
	//agregando clase a div
	post.setAttribute("class", "posteo");
	
	var elementName = document.createElement("strong");
	
	var elementComment = document.createElement("p");
	
	var elementLine = document.createElement("hr");

	//creando nodos de texto
	var nodoTextName = document.createTextNode(name);
	
	var nodoTextComment = document.createTextNode(comment);

	//hacemos appendChild
	elementName.appendChild(nodoTextName);
	elementComment.appendChild(nodoTextComment);
	post.appendChild(elementName);
	post.appendChild(elementComment);
	post.appendChild(elementLine);

	containerPost.appendChild(post);

	var counter = document.getElementById('counter-characters');
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span> ' + 0 + ' <span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';
})

var textArea = document.getElementById('cajaposteos');

textArea.onkeydown = function(){
	//rescatamos el valor del textArea
	var comment = document.getElementById('cajaposteos').value;
	//sacamos la longitud del mensaje
	var long = 140 - comment.length;
	//vamos a rescatar
	var counter = document.getElementById('counter-characters');
	counter.innerHTML = '<span>Hermààààn@ eScRiBiSTèèèè --> </span> ' + long + ' <span><-- caRàààCTeREzzZZz oe ZZzzZììììì</span>';
}