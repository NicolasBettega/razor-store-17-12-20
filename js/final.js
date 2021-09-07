'use strict';


let carrito = {
	id: [],
	cantidad: [],
	total: 0,
};


// consulta al carrito 

if (localStorage.carrito) {

	carrito = JSON.parse(localStorage.carrito);

} else {

	localStorage.carrito = JSON.stringify(carrito);

}
/* productos */

let aProductos = [
	{
		cod: 1,
		nombre: 'Karambit Tornasolado',
		imagen: 'res/img/multicolor.jpg',
		descripcion: 'Al ser un Karambit real y no solo una simple réplica, cuenta con una hoja con acabado negro de Acero 440C. Esto significa que posee un excelente filo y una buena retención del mismo.',
		categoria: 'destacado',
		precio: 2499,
	},
	{
		cod: 2,
		nombre: 'Karambit Hyperbestia',
		imagen: 'res/img/hyperbestia.jpg',
		descripcion: 'Karambits del Counter Strike, son 100% reales y cortan como cualquier cuchillo tactico de Buena Calidad. Hechos en materiales premium de Primera Calidad, Hoja y anilla de Acero Inoxidable 440 y Mango de PVC.',
		categoria: 'destacado',
		precio: 1790,
	},
	{
		cod: 3,
		nombre: 'Navaja mariposa sin filo',
		imagen: 'res/img/mariposa.jpg',
		descripcion: 'Hermosa Navaja Mariposa apta para realizar trucos, flipeos y aperturas acrobáticas con la misma, de una forma segura y sin correr riesgos de cortes y lastimaduras.',
		categoria: 'destacado',
		precio: 2200,
	},
	{
		cod: 4,
		nombre: 'Cuchillo Gerber Pesca',
		imagen: 'res/img/gerber.jpg',
		descripcion: 'Hermoso cuchillo apto para su uso en Supervivencia, Camping o Pesca. Muy afilado, su acero es inoxidable lo cual lo hace apto para usar en condiciones húmedas o lluvia.',
		categoria: 'destacado',
		precio: 1599,
	},
	{
		cod: 5,
		nombre: 'Cuchillo tactico columbia',
		imagen: 'res/img/pedernal.jpg',
		descripcion: 'El cuchillo ideal para la supervivencia profesional en los ambientes mas duros de todos. Sea en la sequedad de un desierto, o en la humedad de una selva cerca de un río, este cuchillo es perfecto para todo.',
		categoria: 'destacado',
		precio: 1799,
	},
	{
		cod: 6,
		nombre: 'Navaja Smith&Wesson',
		imagen: 'res/img/smith&wesson.jpg',
		descripcion: 'Hermosa y elegante Navaja cuenta con un hermoso diseño el cual tiene un excelente grip al contar con una textura anti-deslizante y la hoja de Acero Inoxidable 440C de 8 cm.',
		categoria: 'destacado',
		precio: 1490,
	},
	{
		cod: 7,
		nombre: 'Bayoneta ak47',
		imagen: 'res/img/bayoneta-ak47.jpg',
		descripcion: 'Hermosa bayoneta plateada apta para su uso en Supervivencia, defensa o combate. Muy afilado, su acero es Inoxidable lo cual lo hace apto para usar en condiciones húmedas o lluvia.',
		categoria: 'Cuchillo',
		precio: 3600,
	},
	{
		cod: 8,
		nombre: 'Cuchillo robusto de buceo',
		imagen: 'res/img/cuchillo-buceo.jpg',
		descripcion: 'Excelente cuchillo para realizar actividades de buceo o supervivencia, es de acero inoxidable y viene con funda',
		categoria: 'Cuchillo',
		precio: 1800,
	},
	{
		cod: 9,
		nombre: 'Cuchillo Militar de Supervivencia',
		imagen: 'res/img/tactico-negro.jpg',
		descripcion: 'Excelente Cuchillo Tactico, buen diseño y materiales. Apto para usar en condiciones húmedas. Incluye funda GRATIS con pasacinto.',
		categoria: 'Cuchillo',
		precio: 1990,
	},
	{
		cod: 10,
		nombre: 'Cuchillo Serrucho 3.0',
		imagen: 'res/img/serrucho.jpg',
		descripcion: 'Increíble Cuchillo Táctico Todo-Terreno, macizo y de Acero inoxidable con Rompe Vidrios en su parte trasera. Acabado color Negro Mate, diseño eficiente y sofisticado para un mayor control, movimiento y corte más suave.',
		categoria: 'Cuchillo',
		precio: 1790,
	},
	{
		cod: 11,
		nombre: 'Bayoneta tactica M9',
		imagen: 'res/img/bayoneta-m9.jpg',
		descripcion: 'Hermosa bayoneta plateada apta para su uso en Supervivencia, Camping o Pesca. Muy afilado, su acero es Inoxidable lo cual lo hace apto para usar en condiciones húmedas o lluvia.',
		categoria: 'Cuchillo',
		precio: 2600,
	},
	{
		cod: 12,
		nombre: 'Cuchillo Columbia Tracker',
		imagen: 'res/img/tracker.jpg',
		descripcion: 'Increíble Cuchillo Táctico Todo-Terreno, macizo y de Acero inoxidable. Acabado color Negro Mate, diseño eficiente y sofisticado para un mayor control, movimiento y corte más suave. ',
		categoria: 'Cuchillo',
		precio: 1890,
	},
	{
		cod: 13,
		nombre: 'Navaja Maripo curva negra',
		imagen: 'res/img/mariposa-curva.jpg',
		descripcion: 'Nuevo diseño de Navaja Mariposa Negro inspirado en el famoso Butterfly Knife del CS:GO. Apta para realizar trucos, aperturas y flips con la misma!',
		categoria: 'Navaja',
		precio: 1399,
	},
	{
		cod: 14,
		nombre: 'Navaja Mariposa negra de pesca',
		imagen: 'res/img/mariposa-negra-pesca.jpg',
		descripcion: 'Increíble navaja mariposa muy simple pero elegante a la vez con un acabado negro el cual atrae mucho a la vista de las personas. Cuenta con un largo de 22 cm y una hoja de 10 cm.',
		categoria: 'Navaja',
		precio: 990,
	},
	{
		cod: 15,
		nombre: 'Navaja tactica multicolor',
		imagen: 'res/img/navaja-multicolor.jpg',
		descripcion: 'Tiene un estilo único que le da personalidad y exclusividad a la persona que la porta. Es muy compacta y portable para ser llevada en la mochila, en un bolsillo o en la caja de herramientas.',
		categoria: 'Navaja',
		precio: 1199,
	},
	{
		cod: 16,
		nombre: 'Navaja Gris de pesca',
		imagen: 'res/img/navaja-pesca.jpg',
		descripcion: 'Cuenta con un hermoso diseño de 21 cm en los cuales se divide en el mango de 12 cm el cual tiene un excelente grip al contar con una textura anti-deslizante y la hoja de Acero Inoxidable 440C de 9 cm.',
		categoria: 'Navaja',
		precio: 2499,
	},
	{
		cod: 17,
		nombre: 'Navaja Mariposa Plateada',
		imagen: 'res/img/navaja-plateada.jpg',
		descripcion: 'Esta Navaja Mariposa Silver es excelente y muy útil para tareas todo terreno ya que brinda una excelente duración, además de que está construida enteramente por acero Inoxidable.',
		categoria: 'Navaja',
		precio: 990,
	},
	{
		cod: 18,
		nombre: 'Navaja tactica Swat',
		imagen: 'res/img/navaja-swat.jpg',
		descripcion: 'Una de las navajas más elegantes y sofisticadas en nuestro gigantesco catálogo. Su Hoja de Acero 440 y mango de PVC completamente negros, dan una sensación de extrema exclusividad.',
		categoria: 'Navaja',
		precio: 1890,
	},
	{
		cod: 19,
		nombre: 'Baston extencible de policia',
		imagen: 'res/img/baston-policia.jpg',
		descripcion: 'Hoy en día la inseguridad en las calles es uno de los problemas que mas intranquilos nos tiene a las personas. Por eso, presentamos este nuevo modelo de Bastón Extensible de Policía, especialmente apto para uso en Defensa personal.',
		categoria: 'Varios',
		precio: 1499,
	},
	{
		cod: 20,
		nombre: 'Cuchillo Para Lanzar Kunai 30 Cm',
		imagen: 'res/img/kunai-30cm.jpg',
		descripcion: 'Excelente tamaño y peso para poder entrenar tu técnica tanto si eres un tirador con experiencia o un novato recién iniciado. ',
		categoria: 'Varios',
		precio: 4200,
	},
	{
		cod: 21,
		nombre: 'Cuchillos Lanzables Kunai 21 Cm',
		imagen: 'res/img/kunai-21cm.jpg',
		descripcion: 'stos hermosos cuchillos Kunai lanzables son ideales para entrenar y realizar actividades de pesca, camping y supervivencia. Como están completamente balanceados poseen un giro controlado y al tener doble filo te asegura que se claven muy fácilmente en cualquier objetivo que tengamos.',
		categoria: 'Varios',
		precio: 3200,
	},
	{
		cod: 22,
		nombre: 'Mini Hacha Táctica Camping',
		imagen: 'res/img/mini-hacha.jpg',
		descripcion: 'Muy elegante y prolija, esta mini hacha Táctica es ideal para llevar al monte y que sea tu mano derecha en actividades como el camping o en la Supervivencia. Inclusive, puede ser usada en la cocina. Muy buena opción de compra en cuanto a calidad, precio y utilidad.',
		categoria: 'Varios',
		precio: 1800,
	},
	{
		cod: 23,
		nombre: 'Hacha Tactica Camping Supervivencia',
		imagen: 'res/img/hacha-negra.jpg',
		descripcion: 'Increíble Hacha táctica Negra, de Acero Inoxidable Templado de Primera Calidad. Apta para supervivencia, camping, ambientes húmedos, desiertos, buceo y mas! Incluye Funda protectora para la Hoja.',
		categoria: 'Varios',
		precio: 2100,
	},
	{
		cod: 24,
		nombre: 'Cuchillo Manopla PushDagger',
		imagen: 'res/img/cuchillo-manopla.jpg',
		descripcion: 'Es de lo mas eficaz a la hora de la defensa, ya sea por su agarre, facilidad para portar, por su facilidad para el uso. Es un elemento exclusivamente de combate cuerpo a cuerpo. ',
		categoria: 'Varios',
		precio: 1390,
	},
];


/*-------- mostrar productos -------------*/
const d = document;


let btnInicio = d.getElementById('inicio');

btnInicio.onclick = function () {

	let filtro = aProductos.filter(filtroVarios);
	console.log(filtro);

	function filtroVarios(articulo) {
		if (articulo.categoria == 'destacado') {
			return articulo;
		} else {
			return false;
		}

	}
	
//	let intro = d.querySelector('.intro');
//	intro.remove();

	let sectProd = d.querySelector('#productos');
	
	//	console.log(sectProd.lastChild);
	sectProd.lastChild.remove();
	//	verCuchi(filtro);
	verProd(filtro);
}

function verProd(destacados) {
	let sectProd = d.querySelector('#productos');	
	
	let h3 = d.getElementById('titulo');
	h3.innerHTML = 'Destacado';
	
	let rowdiv = d.createElement('div');
	rowdiv.setAttribute('class', 'row justify-content-around');
	sectProd.appendChild(rowdiv);

	for (let prod of destacados) {
		//creo el div contenedor


		//creo lo div del producto

		let div = d.createElement('div');
		div.setAttribute('class', 'prod col-9 col-md-3 my-2 my-md-2 mx-md-1');
		rowdiv.appendChild(div);

		//cargo la imagen
		let img = d.createElement('img');
		img.setAttribute('src', prod.imagen);
		img.setAttribute('alt', prod.nombre);
		img.dataset.target = '#modal';
		img.dataset.toggle = 'modal'
		div.appendChild(img);


		//div contenido
		let divCont = d.createElement('div');
		divCont.setAttribute('class', 'row justify-content-between m-0');
		div.appendChild(divCont);


		//precio
		let divPrecio = d.createElement('div');
		divPrecio.setAttribute('class', 'col-6');
		divCont.appendChild(divPrecio);

		let pTxt = d.createElement('p');
		pTxt.setAttribute('class','font-weight-bold');
		pTxt.innerHTML = 'Precio: $';
		divPrecio.appendChild(pTxt);

		let val = d.createElement('span');
		val.innerHTML = prod.precio;
		pTxt.appendChild(val);

		// boton agregar carrito
		let divBtn = d.createElement('div')
		divBtn.setAttribute('class', 'col-6 p-0 m-0');

		divCont.appendChild(divBtn);

		let btnAgr = d.createElement('button');
		btnAgr.setAttribute('class', 'btn-agr border-0 d-block p-2 ml-auto mr-2')
		// setear valores para local storage
		btnAgr.innerHTML = 'Agregar al carrito';

		btnAgr.dataset.cod = prod.cod;
		btnAgr.dataset.val = prod.precio;
		btnAgr.dataset.img = prod.imagen;
		btnAgr.dataset.desc = prod.descripcion;
		btnAgr.dataset.nomb = prod.nombre;


		btnAgr.onclick = function () {
			agrCarrito(prod);
			actInicio(prod);
		}

		divBtn.appendChild(btnAgr);

		// descripcion producto
		let divDesc = d.createElement('div');
		divDesc.setAttribute('class', 'col-12');
		divCont.appendChild(divDesc);

		let pdesc = d.createElement('p');
		pdesc.innerHTML = prod.nombre;
		divDesc.appendChild(pdesc);


		img.onclick = function () {
			abrModal(img, prod);
		}

	}
}

/*--- funcion de la ventana modal producto --*/


function abrModal(imagen, produ) {
	// click del btn
	//			console.log(this);
	let modal = d.createElement('div');
	modal.setAttribute('class', 'modal position-fixed d-flex  justify-content-center flex-column align-middle');
	d.querySelector('body').appendChild(modal);

	let contModal = d.createElement('div');
	contModal.setAttribute('class', 'modal-dialog modal-lg bg-white rounded overflow-auto');
	modal.appendChild(contModal);

	let rowModal = d.createElement('div');
	rowModal.setAttribute('class', 'row p-3 m-0');
	contModal.appendChild(rowModal);


	// btn cerrar
	let btnCol = d.createElement('div');
	btnCol.setAttribute('class', 'col-12');
	rowModal.appendChild(btnCol);

	let a = d.createElement('a');
	a.innerHTML = '&times;';
	a.setAttribute('class', 'ml-auto btnCerrar')
	a.setAttribute('href', 'javascript:void(0)');
	a.onclick = function () {
		modal.remove();
	}
	btnCol.appendChild(a);


	//imagen
	let imgCol = d.createElement('div');
	imgCol.setAttribute('class', 'col-12 col-md-6');
	rowModal.appendChild(imgCol);

	let img = imagen.cloneNode();
	imgCol.appendChild(img);

	//textos 
	let txtCol = d.createElement('div');
	txtCol.setAttribute('class', 'contxt col-12 col-md-6');
	rowModal.appendChild(txtCol);

	//nombre 
	let nomb = imagen.nextElementSibling.lastChild.firstChild;
	//	console.log(nomb);
	let cloneNomb = nomb.cloneNode(true);
	//	let h4 = d.createElement('h4')
	//	h4.innerHTML = cloneNomb;
	txtCol.appendChild(cloneNomb);

	// H3 modal
	let precio = imagen.nextElementSibling.firstChild.firstChild;
	//		console.info(mH3);
	let clonPre = precio.cloneNode(true);

	txtCol.appendChild(clonPre);

	//descripcion del producto

	let descrip = d.createElement('p');
	descrip.innerHTML = produ.descripcion;
	txtCol.appendChild(descrip);


	//	boton agregar carrito

	let mBtn = d.createElement('button');
	mBtn.setAttribute('class', 'btnAgr btn btn-primary border-0 m-auto');
	mBtn.innerHTML = 'Agregar al carrito';

	mBtn.dataset.cod = produ.cod;
	mBtn.dataset.val = produ.precio;
	mBtn.dataset.img = produ.imagen;
	mBtn.dataset.desc = produ.descripcion;
	mBtn.dataset.nomb = produ.nombre;


	mBtn.onclick = function () {
		agrCarrito(produ);
		actInicio(produ);
	}

	txtCol.appendChild(mBtn);



}

/*------- actualizar totales inicio --------*/
function actInicio() {



	//muestro el precio y la cantidad de productos cuando carga la web

//	let tot = d.getElementById("acum");
//	tot.innerText = carrito.total;
	//console.log(carrito.total);

	//	let totpre = d.getElementById("totpre");
	//	totpre.innerText = '$' + carrito.total;


	let totCont = 0;
	for (let i of carrito.cantidad) totCont += i;

	let cont = d.getElementById("totpre");
	cont.innerText = totCont;



}

/*--------- agregar a carrito -----------*/

function agrCarrito(articulo) {
	let acum = 0,
		totCont = 0;
	//		console.log(articulo.cod,articulo.descripcion);
	let indC = carrito.id.indexOf(articulo.cod);
	//	console.log(indC);

	if (indC != -1) {

		carrito.cantidad[indC]++;

	} else {

		carrito.id.push(articulo.cod);
		carrito.cantidad.push(1);
	}

	//muestro el precio y la cantidad de productos al agregar al carrito.

	carrito.total = carrito.total + parseInt(articulo.precio);

	localStorage.carrito = JSON.stringify(carrito);
}

//cargo los productos al iniciar

function destacado() {

	let filtro = aProductos.filter(filtroVarios);
	console.log(filtro);

	function filtroVarios(articulo) {
		if (articulo.categoria == 'destacado') {
			return articulo;
		} else {
			return false;
		}

	}
	
//	let intro = d.querySelector('.intro');
//	intro.remove();

//	let sectProd = d.querySelector('#productos');
//	
//	//	console.log(sectProd.lastChild);
//	sectProd.lastChild.remove();
	//	verCuchi(filtro);
	verProd(filtro);
}

window.onload = function () {
	actInicio();
	
	destacado();
}


/*-------- funcion para sacar articulos -----*/



function restarProd(articulo) {
	let acum = 0,
		totCont = 0;
	//			console.log(articulo.cod,articulo.descripcion);

	let indC = carrito.id.indexOf(articulo.cod);
	//	console.log(articulo.cod);

	if (indC != -1) {

		//		carrito.cantidad[indC]++;
		if (carrito.cantidad[indC] > 1) {

			//		   console.log(carrito.cantidad[indC]++);
			carrito.cantidad[indC]--;

			carrito.total = carrito.total - parseInt(articulo.precio);
		}

	}

	//muestro el precio y la cantidad de productos al agregar al carrito.

	actInicio();


	// guardo nuevamente los datos en localstorage
	localStorage.carrito = JSON.stringify(carrito);
}
/*-------- actualizar cantidad de carrito ----*/

function actCantidad(arti) {

	let totCont = 0;
	for (let i of carrito.cantidad) totCont += i;

	let total = d.getElementById('total');
	let cantidad = d.getElementById('a' + arti.cod);
	let subTot = d.getElementById('subTot' + arti.cod);
	let preTotal = d.getElementById('cartTotal');
	let indC = carrito.id.indexOf(arti.cod);
	//	console.log(indC);




	if (indC != -1) {
		console.log(carrito.cantidad[indC]);
		cantidad.innerHTML = carrito.cantidad[indC];
		total.innerHTML = '(' + totCont + ')';
		//			console.log(total);
		subTot.innerHTML = 'Subtotal: $' + carrito.cantidad[indC] * arti.precio;
		preTotal.innerHTML = 'Total: $' + carrito.total;
	
	}



}

/*----------- eliminar articulo del carrito *---*/
function elimArt(articulo) {
	let lista = d.querySelector('.contKart');
	let footer = d.querySelector('.modal-footer');
	let modal = d.querySelector('.modal-dialog');

	let li = d.getElementById('art' + articulo.cod);
	//	console.log(li);

	let totCont = 0;
	let total = d.getElementById('total');
	let cantidad = d.getElementById('a' + articulo.cod);
	let preTotal = d.getElementById('cartTotal');
	
	let indC = carrito.id.indexOf(articulo.cod);



	let preciTotArt = carrito.total - carrito.cantidad[indC] * parseInt(articulo.precio);
	//	console.log(indC);

	if (indC != -1) {
		//		console.log(carrito.cantidad[indC]);
		carrito.cantidad.splice(indC, 1);
		carrito.id.splice(indC, 1);

		if (carrito.total != preciTotArt) {

			carrito.total = preciTotArt;
		} else {
			carrito.total = 0;
		}
		for (let i of carrito.cantidad) totCont += i;
		total.innerHTML = '(' + totCont + ')';
		preTotal.innerHTML = 'Total $' + carrito.total;
		li.remove();

	}

	localStorage.carrito = JSON.stringify(carrito);

	if (carrito.total == 0) {
		lista.remove();
		footer.remove();

		let cartVacio = d.createElement('div');

		modal.appendChild(cartVacio);

		let pVacio = d.createElement('p');
		pVacio.setAttribute('class', 'text-center m-5 h3')
		pVacio.innerHTML = 'Tu carrito está vacío';
		cartVacio.appendChild(pVacio);
		cantidad.innerHTML = '(' + 0 + ')';

	}

}

// funcion par vaciar el carrito -------------

function vaciarCarrito() {
	let lista = d.querySelector('.contKart');
	let footer = d.querySelector('.modal-footer');
	let modal = d.querySelector('.modal-dialog');
	let cantidad = d.getElementById('total');

	carrito.cantidad = [];
	carrito.id = [];
	carrito.total = 0;

	localStorage.carrito = JSON.stringify(carrito);

	if (carrito.total == 0) {
		lista.remove();
		footer.remove();

		let cartVacio = d.createElement('div');

		modal.appendChild(cartVacio);

		let pVacio = d.createElement('p');
		pVacio.setAttribute('class', 'text-center m-5 h3')
		pVacio.innerHTML = 'Tu carrito está vacío';
		cartVacio.appendChild(pVacio);
		cantidad.innerHTML = '(' + 0 + ')';

	}
}

/*----- funcion para abrir el carrito ------*/

let btnCart = d.getElementById("btnCarrito");

//let cont = d.getElementById("cant");
btnCart.onclick = function () {
	abrCart();
}

function abrCart() {

	//	console.log(btnCart);
	//contenedor modal
	let modal = d.createElement('div');
	modal.setAttribute('class', 'modal position-fixed d-flex  justify-content-center flex-column align-middle ');
	d.querySelector('body').appendChild(modal);

	//ventana modal
	let ventModal = d.createElement('div');
	ventModal.setAttribute('class', 'modal-dialog  modal-lg bg-white rounded overflow-auto p-0');

	modal.appendChild(ventModal);

	//Header de la modal
	let headModal = d.createElement('div');
	headModal.setAttribute('class', 'modal-header row justify-content-center m-0')
	ventModal.appendChild(headModal);

	let h3Div = d.createElement('div');
	h3Div.setAttribute('class', 'col-10 p-2');
	headModal.appendChild(h3Div);

	let h3 = d.createElement('h3');
	h3.innerHTML = 'Carrito ';
	h3Div.appendChild(h3);

	//Creo y recorro las cantidades del carrito para saber el total de articulos

	let totCont = 0;
	for (let i of carrito.cantidad) totCont += i;


	let h3Span = d.createElement('span');
	h3Span.innerText = '(' + totCont + ')';
	h3Span.setAttribute('id', 'total');
	h3.appendChild(h3Span);


	let btnDiv = d.createElement('div');
	btnDiv.setAttribute('class', 'col-2 pt-2');
	headModal.appendChild(btnDiv);

	let btnCerrar = d.createElement('a');
	btnCerrar.setAttribute('href', 'javascript:void(0)');
	btnCerrar.setAttribute('class', 'ml-auto btnCerrar');
	btnCerrar.innerHTML = '&times;';

	btnCerrar.onclick = function () {
		modal.remove();
		//		console.log(modal);
	}

	btnDiv.appendChild(btnCerrar);

	if (carrito.total == 0) {

		let cartVacio = d.createElement('div');

		ventModal.appendChild(cartVacio);

		let pVacio = d.createElement('p');
		pVacio.setAttribute('class', 'text-center m-5 h3')
		pVacio.innerHTML = 'Tu carrito está vacío';
		cartVacio.appendChild(pVacio);

	} else {
		//Articulos del carrito 

		let conteArt = d.createElement('div');
		conteArt.setAttribute('class', 'contKart');
		ventModal.appendChild(conteArt);

		let ul = d.createElement('ul');
		ul.setAttribute('class', 'container p-3');
		conteArt.appendChild(ul);



		for (let i = 0; i < carrito.id.length; i++) {
			let id = carrito.id[i];
			let cant = carrito.cantidad[i];
			for (let articulo of aProductos) {
				if (articulo.cod == id) {

					//				console.log(`${articulo.cod} + '/' + ${articulo.nombre} + '/' + ${articulo.descripcion} `);

					let li = d.createElement('li');
					li.setAttribute('class', 'row justify-content-between align-items-center m-0 border rounded pb-2 pb-md-0');
					li.setAttribute('id', 'art' + id);
					ul.appendChild(li);

					let imgDiv = d.createElement('div');
					imgDiv.setAttribute('class', 'col-12 col-md-3');
					li.appendChild(imgDiv);

					let image = d.createElement('img');
					image.setAttribute('src', articulo.imagen);
					image.setAttribute('alt', articulo.nombre);
					imgDiv.appendChild(image);

					let txtDiv = d.createElement('div');
					txtDiv.setAttribute('class', 'col-12 col-md-5');
					li.appendChild(txtDiv);

					let h3 = d.createElement('h4');
					h3.setAttribute('class', 'h5 font-weight-bold');
					h3.innerHTML = articulo.nombre;
					txtDiv.appendChild(h3);

					let descP = d.createElement('p');
					descP.innerHTML = articulo.descripcion;
					descP.setAttribute('class','text-truncate')
					txtDiv.appendChild(descP);

					let precioDiv = d.createElement('div');
					precioDiv.setAttribute('class', 'col-6 col-md-2');
					li.appendChild(precioDiv);

					let precio = d.createElement('p');
					precio.innerHTML = 'Precio: $' + articulo.precio;
					precio.setAttribute('class','mt-4');
					precioDiv.appendChild(precio);

					let subTotal = d.createElement('p');
					subTotal.setAttribute('id', 'subTot' + articulo.cod);
					subTotal.innerHTML = 'Subtotal: $' + cant * articulo.precio;
					precioDiv.appendChild(subTotal);


					// controles para los articulos
					let controles = d.createElement('div');
					controles.setAttribute('class', 'col-6 col-md-2 text-center');
					li.appendChild(controles);

					let rowControl = d.createElement('div');
					rowControl.setAttribute('class', 'row justify-content-around');
					controles.appendChild(rowControl);

					//boton para restar 
					let divMenos = d.createElement('div')
					divMenos.setAttribute('class', 'col-4 p-2');

					rowControl.appendChild(divMenos);


					let btnMenos = d.createElement('button');
					btnMenos.setAttribute('class', 'btnMenos border btn p-0');
					btnMenos.innerHTML = '-';

					btnMenos.onclick = function () {

						restarProd(articulo);
						actCantidad(articulo);
						actInicio(articulo);
					}

					divMenos.appendChild(btnMenos);

					//muestro la cantidad agregada
					let divCantidad = d.createElement('div')
					divCantidad.setAttribute('class', 'col-4 p-2');
					rowControl.appendChild(divCantidad);

					let cantidad = d.createElement('span');
					cantidad.setAttribute('class', 'badge badge-pill text-center');
					cantidad.setAttribute('id', 'a' + articulo.cod);
					cantidad.innerHTML = cant;
					divCantidad.appendChild(cantidad);


					//boton para sumar 

					let divMas = d.createElement('div')
					divMas.setAttribute('class', 'col-4 p-2');
					rowControl.appendChild(divMas);

					let btnMas = d.createElement('button');
					btnMas.setAttribute('class', 'btnMas border btn p-0');
					btnMas.innerHTML = '+';
					//				btnMas.dataset.id = id;
					btnMas.onclick = function () {

						agrCarrito(articulo);
						actCantidad(articulo);
						actInicio(articulo);
					}

					divMas.appendChild(btnMas);

					//boton para eliminar

					let divElim = d.createElement('div')
					divElim.setAttribute('class', 'col-12 mt-1 mt-md-4');
					rowControl.appendChild(divElim);

					let eliminar = d.createElement('button');
					eliminar.setAttribute('class', 'btn btn-danger eliminar');
					eliminar.innerHTML = 'Eliminar';

					eliminar.onclick = function () {
						elimArt(articulo);
						actInicio(articulo);
						actInicio(articulo);
					}

					divElim.appendChild(eliminar);

				}
			}
		}
		let footerDiv = d.createElement('div');
		footerDiv.setAttribute('class', 'modal-footer');
		ventModal.appendChild(footerDiv);

		let divCont = d.createElement('div');
		divCont.setAttribute('class','container');
		footerDiv.appendChild(divCont);
		
		let btnDiv = d.createElement('div');
	 	btnDiv.setAttribute('class','row justify-content-center justify-content-md-start');
		divCont.appendChild(btnDiv);
		
		let divTot = d.createElement('div');
		divTot.setAttribute('class', 'col-8 col-md-6 mb-3 mb-md-0 text-center text-md-left');
		btnDiv.appendChild(divTot);

		let valTot = d.createElement('span');

		valTot.setAttribute('class', 'h3  m-auto m-md-0');
		valTot.setAttribute('id', 'cartTotal');
	
		valTot.innerHTML = 'Total $' + carrito.total;
		divTot.appendChild(valTot);
		
		let divBorrar = d.createElement('div');
		divBorrar.setAttribute('class','col-12 col-md-3 p-0 order-1 order-md-0');
		btnDiv.appendChild(divBorrar);
		
		let btnBorrar = d.createElement('button');
		btnBorrar.setAttribute('class', 'btn btn-secondary btn-block');
		btnBorrar.innerHTML = 'Vaciar carrito';
		btnBorrar.onclick = function () {
			vaciarCarrito();
			actInicio();
		}
		divBorrar.appendChild(btnBorrar);
		
		let divPagar = d.createElement('div');
		divPagar.setAttribute('class','col-12 col-md-3 mb-1 p-0');
		btnDiv.appendChild(divPagar);
		
		let btnPagar = d.createElement('button');
		btnPagar.onclick = function () {

			modalPago();
			modal.remove();

		}
		btnPagar.setAttribute('class', 'btn btn-primary ml-md-1 btn-block px-5');
		btnPagar.innerHTML = 'Pagar';
		divPagar.appendChild(btnPagar);


	}
}
/*----------- proceso de pago --------------*/
function modalPago() {
	//contenedor modal
	let modal = d.createElement('div');
	modal.setAttribute('class', 'modal position-fixed d-flex  justify-content-center flex-column align-middle ');
	d.querySelector('body').appendChild(modal);

	//ventana modal
	let ventModal = d.createElement('div');
	ventModal.setAttribute('class', 'modal-dialog bg-white rounded overflow-auto p-0');
	modal.appendChild(ventModal);


	//header modal 

	let headDiv = d.createElement('div');
	headDiv.setAttribute('class', 'modal-header p-2');

	ventModal.appendChild(headDiv);

	let headH3 = d.createElement('h3');
	headH3.innerHTML = 'Proceso de Pago';
	headDiv.appendChild(headH3);

	// formulario 
	
	let form = d.createElement('form');
	form.setAttribute('action', '#');
	form.setAttribute('method', 'post');
	form.setAttribute('enctype', 'multipart/form-data');
	form.setAttribute('class', 'p-3');
	ventModal.appendChild(form);

	// titulo 
	let h4title1 = d.createElement('h4');
	h4title1.innerHTML = 'Ingresa tus datos';
	h4title1.setAttribute('class', 'h5');
	form.appendChild(h4title1);

	//div row datos de usuario

	let formRow1 = d.createElement('div');
	formRow1.setAttribute('class', 'form-row');
	form.appendChild(formRow1);


	// NOMBRE

	let groupNomb = d.createElement('div');
	groupNomb.setAttribute('class', 'form-group col-md-6');

	formRow1.appendChild(groupNomb);

	let labelNomb = d.createElement('label');
	labelNomb.setAttribute('for', 'nombre');
	labelNomb.innerHTML = 'Nombre';
	groupNomb.appendChild(labelNomb);

	let inputNomb = d.createElement('input');
	inputNomb.setAttribute('id', 'nombre');
	inputNomb.setAttribute('type', 'text');
	inputNomb.setAttribute('class', 'form-control');
	groupNomb.appendChild(inputNomb);


	// APELLIDO 

	let groupApellido = d.createElement('div');
	groupApellido.setAttribute('class', 'form-group col-md-6');

	formRow1.appendChild(groupApellido);

	let labelApellido = d.createElement('label');
	labelApellido.setAttribute('for', 'apellido');
	labelApellido.innerHTML = 'Apellido';
	groupApellido.appendChild(labelApellido);

	let inputApellido = d.createElement('input');
	inputApellido.setAttribute('id', 'apellido');
	inputApellido.setAttribute('type', 'text');
	inputApellido.setAttribute('class', 'form-control');
	groupApellido.appendChild(inputApellido);


	// TELEFONO

	let groupTel = d.createElement('div');
	groupTel.setAttribute('class', 'form-group col-md-6');

	formRow1.appendChild(groupTel);

	let labelTel = d.createElement('label');
	labelTel.setAttribute('for', 'telefono');
	labelTel.innerHTML = 'Telefono';
	groupTel.appendChild(labelTel);

	let inputTel = d.createElement('input');
	inputTel.setAttribute('id', 'telefono');
	inputTel.setAttribute('type', 'tel');
	inputTel.setAttribute('class', 'form-control');
	groupTel.appendChild(inputTel);

	//CORREO

	let groupCorreo = d.createElement('div');
	groupCorreo.setAttribute('class', 'form-group col-md-6');

	formRow1.appendChild(groupCorreo);

	let labelCorreo = d.createElement('label');
	labelCorreo.setAttribute('for', 'correo');
	labelCorreo.innerHTML = 'Correo';
	groupCorreo.appendChild(labelCorreo);

	let inputCorreo = d.createElement('input');
	inputCorreo.setAttribute('id', 'correo');
	inputCorreo.setAttribute('type', 'email');
	inputCorreo.setAttribute('class', 'form-control');
	inputCorreo.setAttribute('placholder', 'nombre@gmail.com');

	groupCorreo.appendChild(inputCorreo);

	//DIRECCION 

	let groupDirec = d.createElement('div');
	groupDirec.setAttribute('class', 'form-group col-md-12');

	formRow1.appendChild(groupDirec);

	let labelDirec = d.createElement('label');
	labelDirec.setAttribute('for', 'apellido');
	labelDirec
	labelDirec.innerHTML = 'Direccion';
	groupDirec.appendChild(labelDirec);

	let inputDirec = d.createElement('input');
	inputDirec.setAttribute('id', 'direccion');
	inputDirec.setAttribute('type', 'text');
	inputDirec.setAttribute('class', 'form-control');
	groupDirec.appendChild(inputDirec);

	//CODIGO POSTAL

	let groupCp = d.createElement('div');
	groupCp.setAttribute('class', 'form-group col-md-12');

	formRow1.appendChild(groupCp);

	let labelCp = d.createElement('label');
	labelCp.setAttribute('for', 'cp');
	labelCp.innerHTML = 'Codigo postal';
	groupCp.appendChild(labelCp);

	let inputCp = d.createElement('input');
	inputCp.setAttribute('id', 'cp');
	inputCp.setAttribute('type', 'number');
	inputCp.setAttribute('class', 'form-control');
	groupCp.appendChild(inputCp);




	// datos para el pago -------------------

	let mtdPago = d.createElement('div');
	mtdPago.setAttribute('class', 'mtdPago border-top pt-3');
	form.appendChild(mtdPago)
	let h4title2 = d.createElement('h4');
	h4title2.setAttribute('class', 'h5');
	h4title2.innerHTML = 'Metodos de pago';
	mtdPago.appendChild(h4title2);


	let formRow2 = d.createElement('div');
	formRow2.setAttribute('class', 'form-row');
	mtdPago.appendChild(formRow2);


	// NUMERO DE TARJETA

	let groupNumTar = d.createElement('div');
	groupNumTar.setAttribute('class', 'form-group col-md-6');

	formRow2.appendChild(groupNumTar);

	let labelNumTar = d.createElement('label');
	labelNumTar.setAttribute('for', 'nroTarj');
	labelNumTar.innerHTML = 'Numero de tarjeta';
	groupNumTar.appendChild(labelNumTar);

	let inputNumTar = d.createElement('input');
	inputNumTar.setAttribute('id', 'nroTarj');
	inputNumTar.setAttribute('type', 'number');
	inputNumTar.setAttribute('class', 'form-control');
	groupNumTar.appendChild(inputNumTar);


	// Codigo de seguridad 

	let groupCodSeg = d.createElement('div');
	groupCodSeg.setAttribute('class', 'form-group col-md-6');

	formRow2.appendChild(groupCodSeg);

	let labelCodSeg = d.createElement('label');
	labelCodSeg.setAttribute('for', 'codSeg');
	labelCodSeg.innerHTML = 'Codigo de seguridad';
	groupCodSeg.appendChild(labelCodSeg);

	let inputCodSeg = d.createElement('input');
	inputCodSeg.setAttribute('id', 'codSeg');
	inputCodSeg.setAttribute('type', 'number');
	inputCodSeg.setAttribute('class', 'form-control');
	groupCodSeg.appendChild(inputCodSeg);

	// FECHA DE VENCIMIENTO

	let groupVenc = d.createElement('div');
	groupVenc.setAttribute('class', 'form-group col-md-12');

	formRow2.appendChild(groupVenc);

	let labelVenc = d.createElement('label');
	labelVenc.setAttribute('for', 'tarjVenc');
	labelVenc.innerHTML = 'Vencimiento';
	groupVenc.appendChild(labelVenc);

	let inputVenc = d.createElement('input');
	inputVenc.setAttribute('id', 'tarjVenc');
	inputVenc.setAttribute('type', 'date');
	inputVenc.setAttribute('class', 'form-control');
	groupVenc.appendChild(inputVenc);

	//Medios de pago

	let groupMetodos = d.createElement('div');
	groupMetodos.setAttribute('class', 'form-group col-md-12');

	formRow2.appendChild(groupMetodos);

	let labelMetodos = d.createElement('label');
	labelMetodos.setAttribute('for', 'metodo');
	labelMetodos.innerHTML = 'Medios de pago';
	groupMetodos.appendChild(labelMetodos);

	let select = d.createElement('select');
	select.setAttribute('id', 'metodo');
	//	inputCorreo.setAttribute('type','email');
	select.setAttribute('class', 'custom-select');
	groupMetodos.appendChild(select);

	let opt0 = d.createElement('option');
	opt0.setAttribute('value', '');
	opt0.setAttribute('disabled', '');
	opt0.setAttribute('selected', '');
	opt0.innerHTML = 'Elegir una opción';
	select.appendChild(opt0);

	let opt1 = d.createElement('option');
	opt1.setAttribute('value', 'devito');
	opt1.innerHTML = 'Devito';
	select.appendChild(opt1);

	let opt2 = d.createElement('option');
	opt2.setAttribute('value', 'credito');
	opt2.innerHTML = 'Credito';
	select.appendChild(opt2);

	let opt3 = d.createElement('option');
	opt3.setAttribute('value', 'paypal');
	opt3.innerHTML = 'Transferencia';
	select.appendChild(opt3);


	//botones 

	let groupBtn = d.createElement('div');
	groupBtn.setAttribute('class', 'form-group m-0 col-12 col-md-3 p-0 order-1 order-md-0');

	formRow2.appendChild(groupBtn);

	let btnVolver = d.createElement('a');
	btnVolver.setAttribute('class', 'btn btn-secondary btn-block');
		btnVolver.innerHTML = 'Volver';
	btnVolver.onclick = function () {
		abrCart();
		modal.remove();
	}
	groupBtn.appendChild(btnVolver);
	
	let groupBtn2 = d.createElement('div');
	groupBtn2.setAttribute('class', 'form-group m-0 col-12 col-md-3 mb-1 p-0');

	formRow2.appendChild(groupBtn2);
	


	let btnPagar = d.createElement('button');
	btnPagar.setAttribute('id', 'enviar');
	btnPagar.setAttribute('value', 'Enviar');
	btnPagar.setAttribute('class', 'btn btn-primary btn-block');
	btnPagar.innerHTML = 'Realizar pago';
	groupBtn2.appendChild(btnPagar);

	form.onsubmit = function () {

		console.log(validInputs());

		if (validInputs() == true) {

			carrito.cantidad = [];
			carrito.id = [];
			carrito.total = 0;

			localStorage.carrito = JSON.stringify(carrito);

			modal.remove();

			finalizar();
			return true;

		} else {
			return false;
		}

	}

}


function validInputs() {
	let enviar = true;
	let inputs = d.querySelectorAll('input[type="text"],input[type=number],input[type=email],input[type=tel],input[type=date],select');

	//		let mtdPago = d.querySelector('select');
	//		console.log(inputs);
	for (let valid of inputs) {

		if (valid.value.length == 0 || valid.value == 0) {

			enviar = false;
			valid.classList.add('error');
			console.log(valid);
		} else {
			valid.classList.remove('error');
		}

	}
	//		if(select.value == 0){
	//				enviar = false;
	//				valid.classList.add('error');
	//				console.log(valid);
	//			}else{
	//					valid.classList.remove('error');
	//			}
	return enviar;
}

/*------- modal de finalizacion -------*/

function finalizar() {

	//contenedor modal
	let modal = d.createElement('div');
	modal.setAttribute('class', 'modal position-fixed d-flex  justify-content-center flex-column align-middle ');
	d.querySelector('body').appendChild(modal);
	
	//ventana modal
	let ventModal = d.createElement('div');
	ventModal.setAttribute('class', 'modal-dialog bg-white rounded p-0');
	ventModal.setAttribute('role','document');
	modal.appendChild(ventModal);
	
	
	let mContent = d.createElement('div');
	mContent.setAttribute('class','modal-content');
	ventModal.appendChild(mContent);
	
	

	//modal body 

	let mBody = d.createElement('div');
	mBody.setAttribute('class', 'modal-body px-0');
	mContent.appendChild(mBody);
	
	let contDiv = d.createElement('div');
	contDiv.setAttribute('class','container-fluid');
	mBody.appendChild(contDiv);
	
	let rowDiv = d.createElement('div');
	rowDiv.setAttribute('class','row justify-content-center bg-modal');
	contDiv.appendChild(rowDiv);
	
	
	let colDivTxt = d.createElement('div');
	colDivTxt.setAttribute('class','col-12 text-center textos-modal');
	rowDiv.appendChild(colDivTxt);
	
	let span = d.createElement('span');
	span.setAttribute('class','h4');
	span.innerHTML = 'Compra realizada';
	colDivTxt.appendChild(span)
	
	let mensaje = d.createElement('p');
	mensaje.innerHTML = 'Esperamos que la disfrutes!!';
	colDivTxt.appendChild(mensaje);

	
	let colDivBtn = d.createElement('div');
	colDivBtn.setAttribute('class','col-12 col-md-6');
	rowDiv.appendChild(colDivBtn);
	
	let btnInicio = d.createElement('a');
	btnInicio.setAttribute('class', 'btn btn-primary btn-block');
	btnInicio.setAttribute('href', 'index.html');
	btnInicio.innerHTML = 'Volver';
	colDivBtn.appendChild(btnInicio);


}


// filtros para mostrar los cuchillos 

let btnCuchi = d.getElementById('btnCuchillo');

btnCuchi.onclick = function () {

	let filtro = aProductos.filter(filtroCuchi);
	console.log(filtro);

	function filtroCuchi(articulo) {
		if (articulo.categoria == 'Cuchillo') {
			return articulo;
		} else {
			return false;
		}

	}
	let sectProd = d.querySelector('#productos');
	//	console.log(sectProd.lastChild);
	sectProd.lastChild.remove();
	//	verCuchi(filtro);
	verCuchi(filtro);
}


function verCuchi(cuchillos) {
	let sectProd = d.querySelector('#productos');
	
	let h3 = d.getElementById('titulo');
	h3.innerHTML = 'Cuchillos';

	let rowdiv = d.createElement('div');
	rowdiv.setAttribute('class', 'row justify-content-around');
	sectProd.appendChild(rowdiv);

	for (let prod of cuchillos) {
		//creo el div contenedor


		//creo lo div del producto

		let div = d.createElement('div');
		div.setAttribute('class', 'prod col-9 col-md-3 my-2 my-md-2 mx-md-1');
		rowdiv.appendChild(div);

		//cargo la imagen
		let img = d.createElement('img');
		img.setAttribute('src', prod.imagen);
		img.setAttribute('alt', prod.nombre);
		img.dataset.target = '#modal';
		img.dataset.toggle = 'modal'
		div.appendChild(img);


		//div contenido
		let divCont = d.createElement('div');
		divCont.setAttribute('class', 'row justify-content-between m-0');
		div.appendChild(divCont);


		//precio
		let divPrecio = d.createElement('div');
		divPrecio.setAttribute('class', 'col-6');
		divCont.appendChild(divPrecio);

		let pTxt = d.createElement('p');
		pTxt.innerHTML = 'Precio: ';
		divPrecio.appendChild(pTxt);

		let val = d.createElement('span');
		val.innerHTML = prod.precio;
		pTxt.appendChild(val);

		// boton agregar carrito
		let divBtn = d.createElement('div')
		divBtn.setAttribute('class', 'col-6 p-0 m-0');

		divCont.appendChild(divBtn);

		let btnAgr = d.createElement('button');
		btnAgr.setAttribute('class', 'btn-agr border-0 d-block p-2 ml-auto mr-2')
		// setear valores para local storage
		btnAgr.innerHTML = 'Agregar al carrito';

		btnAgr.dataset.cod = prod.cod;
		btnAgr.dataset.val = prod.precio;
		btnAgr.dataset.img = prod.imagen;
		btnAgr.dataset.desc = prod.descripcion;
		btnAgr.dataset.nomb = prod.nombre;


		btnAgr.onclick = function () {
			agrCarrito(prod);
			actInicio(prod);
		}

		divBtn.appendChild(btnAgr);

		// descripcion producto
		let divDesc = d.createElement('div');
		divDesc.setAttribute('class', 'col-12');
		divCont.appendChild(divDesc);

		let pdesc = d.createElement('p');
		pdesc.innerHTML = prod.nombre;
		divDesc.appendChild(pdesc);


		img.onclick = function () {
			abrModal(img, prod);
		}

	}
}


// filtros para mostrar las Navajas 

let btnNavaja = d.getElementById('btnNavaja');

btnNavaja.onclick = function () {

	let filtro = aProductos.filter(filtroNavaja);
	console.log(filtro);

	function filtroNavaja(articulo) {
		if (articulo.categoria == 'Navaja') {
			return articulo;
		} else {
			return false;
		}

	}
	let sectProd = d.querySelector('#productos');
	//	console.log(sectProd.lastChild);
	sectProd.lastChild.remove();
	//	verCuchi(filtro);
	verNavaja(filtro);
}


function verNavaja(navajas) {
	let sectProd = d.querySelector('#productos');
	
	let h3 = d.getElementById('titulo');
	h3.innerHTML = 'Navajas';

	let rowdiv = d.createElement('div');
	rowdiv.setAttribute('class', 'row justify-content-around');
	sectProd.appendChild(rowdiv);

	for (let prod of navajas) {
		//creo el div contenedor


		//creo lo div del producto

		let div = d.createElement('div');
		div.setAttribute('class', 'prod col-9 col-md-3 my-2 my-md-2 mx-md-1');
		rowdiv.appendChild(div);

		//cargo la imagen
		let img = d.createElement('img');
		img.setAttribute('src', prod.imagen);
		img.setAttribute('alt', prod.nombre);
		img.dataset.target = '#modal';
		img.dataset.toggle = 'modal'
		div.appendChild(img);


		//div contenido
		let divCont = d.createElement('div');
		divCont.setAttribute('class', 'row justify-content-between m-0');
		div.appendChild(divCont);


		//precio
		let divPrecio = d.createElement('div');
		divPrecio.setAttribute('class', 'col-6');
		divCont.appendChild(divPrecio);

		let pTxt = d.createElement('p');
		pTxt.innerHTML = 'Precio: ';
		divPrecio.appendChild(pTxt);

		let val = d.createElement('span');
		val.innerHTML = prod.precio;
		pTxt.appendChild(val);

		// boton agregar carrito
		let divBtn = d.createElement('div')
		divBtn.setAttribute('class', 'col-6 p-0 m-0');

		divCont.appendChild(divBtn);

		let btnAgr = d.createElement('button');
		btnAgr.setAttribute('class', 'btn-agr border-0 d-block p-2 ml-auto mr-2')
		// setear valores para local storage
		btnAgr.innerHTML = 'Agregar al carrito';

		btnAgr.dataset.cod = prod.cod;
		btnAgr.dataset.val = prod.precio;
		btnAgr.dataset.img = prod.imagen;
		btnAgr.dataset.desc = prod.descripcion;
		btnAgr.dataset.nomb = prod.nombre;


		btnAgr.onclick = function () {
			agrCarrito(prod);
			actInicio(prod);
		}

		divBtn.appendChild(btnAgr);

		// descripcion producto
		let divDesc = d.createElement('div');
		divDesc.setAttribute('class', 'col-12');
		divCont.appendChild(divDesc);

		let pdesc = d.createElement('p');
		pdesc.innerHTML = prod.nombre;
		divDesc.appendChild(pdesc);


		img.onclick = function () {
			abrModal(img, prod);
		}

	}
}


// filtros para mostrar Varios 

let btnVarios = d.getElementById('btnVarios');

btnVarios.onclick = function () {

	let filtro = aProductos.filter(filtroVarios);
	console.log(filtro);

	function filtroVarios(articulo) {
		if (articulo.categoria == 'Varios') {
			return articulo;
		} else {
			return false;
		}

	}
	
//	let intro = d.querySelector('.intro');
//	intro.remove();

	let sectProd = d.querySelector('#productos');
	
	//	console.log(sectProd.lastChild);
	sectProd.lastChild.remove();
	//	verCuchi(filtro);
	verVarios(filtro);
}


function verVarios(varios) {
	
	let sectProd = d.querySelector('#productos');
		
	let h3 = d.getElementById('titulo');
	h3.innerHTML = 'Varios';

	let rowdiv = d.createElement('div');
	rowdiv.setAttribute('class', 'row justify-content-around');
	sectProd.appendChild(rowdiv);

	for (let prod of varios) {
		//creo el div contenedor


		//creo lo div del producto

		let div = d.createElement('div');
		div.setAttribute('class', 'prod col-9 col-md-3 my-2 my-md-2 mx-md-1');
		rowdiv.appendChild(div);

		//cargo la imagen
		let img = d.createElement('img');
		img.setAttribute('src', prod.imagen);
		img.setAttribute('alt', prod.nombre);
		img.dataset.target = '#modal';
		img.dataset.toggle = 'modal'
		div.appendChild(img);


		//div contenido
		let divCont = d.createElement('div');
		divCont.setAttribute('class', 'row justify-content-between m-0');
		div.appendChild(divCont);


		//precio
		let divPrecio = d.createElement('div');
		divPrecio.setAttribute('class', 'col-6');
		divCont.appendChild(divPrecio);

		let pTxt = d.createElement('p');
		pTxt.innerHTML = 'Precio: ';
		divPrecio.appendChild(pTxt);

		let val = d.createElement('span');
		val.innerHTML = prod.precio;
		pTxt.appendChild(val);

		// boton agregar carrito
		let divBtn = d.createElement('div')
		divBtn.setAttribute('class', 'col-6 p-0 m-0');

		divCont.appendChild(divBtn);

		let btnAgr = d.createElement('button');
		btnAgr.setAttribute('class', 'btn-agr border-0 d-block p-2 ml-auto mr-2')
		// setear valores para local storage
		btnAgr.innerHTML = 'Agregar al carrito';

		btnAgr.dataset.cod = prod.cod;
		btnAgr.dataset.val = prod.precio;
		btnAgr.dataset.img = prod.imagen;
		btnAgr.dataset.desc = prod.descripcion;
		btnAgr.dataset.nomb = prod.nombre;


		btnAgr.onclick = function () {
			agrCarrito(prod);
			actInicio(prod);
		}

		divBtn.appendChild(btnAgr);

		// descripcion producto
		let divDesc = d.createElement('div');
		divDesc.setAttribute('class', 'col-12');
		divCont.appendChild(divDesc);

		let pdesc = d.createElement('p');
		pdesc.innerHTML = prod.nombre;
		divDesc.appendChild(pdesc);


		img.onclick = function () {
			abrModal(img, prod);
		}

	}
}
/*-------------- modal info ---------------*/ 

let btnInfo = d.getElementById('btnInfo');

btnInfo.onclick = function(){
let modal = d.createElement('div');
	modal.setAttribute('class', 'modal position-fixed d-flex  justify-content-center flex-column align-middle ');
	d.querySelector('body').appendChild(modal);

	//ventana modal
	let ventModal = d.createElement('div');
	ventModal.setAttribute('class', 'modal-dialog bg-white rounded overflow-auto p-0');
	modal.appendChild(ventModal);

	//modal body 
	
	
	let mCont = d.createElement('div');
	mCont.setAttribute('class', 'modal-content border-0');
	ventModal.appendChild(mCont);
	
		
	let mHeader = d.createElement('div');
	mHeader.setAttribute('class', 'modal-header row justify-content-center m-0 py-0');
	mCont.appendChild(mHeader);
	
		
	let h3Div = d.createElement('div');
	h3Div.setAttribute('class', 'col-10 p-2');
	mHeader.appendChild(h3Div);

	let h3 = d.createElement('h3');
	h3.innerHTML = 'Info';
	h3Div.appendChild(h3);
	
	
	let btnDiv = d.createElement('div');
	btnDiv.setAttribute('class', 'col-2 pt-2');
	mHeader.appendChild(btnDiv);
	
	let btnCerrar = d.createElement('a');
	btnCerrar.setAttribute('href', 'javascript:void(0)');
	btnCerrar.setAttribute('class', 'ml-auto btnCerrar');
	btnCerrar.innerHTML = '&times;';
	
	
	btnCerrar.onclick = function () {
		modal.remove();
		//		console.log(modal);
	}
	
	btnDiv.appendChild(btnCerrar);
	
	// modal body
	
	let mBody = d.createElement('div');
	mBody.setAttribute('class', 'modal-body');
	mCont.appendChild(mBody);
	
	let container = d.createElement('div');
	container.setAttribute('class', 'container-fluid');
	mBody.appendChild(container);
	
	
	let row = d.createElement('div');
	row.setAttribute('class', 'row');
	container.appendChild(row);
	
	let divImg = d.createElement('div');
	divImg.setAttribute('class', 'col-12 col-md-6');
	row.appendChild(divImg);
	
	let img = d.createElement('img');
	img.setAttribute('src', 'res/img/foto_alumno.jpg');
	img.setAttribute('alt', 'Foto del Desarrollador');	
	divImg.appendChild(img);
	
	
	let divTxt = d.createElement('div');
	divTxt.setAttribute('class', 'col-12 col-md-6 mt-4 mt-md-0');	
	row.appendChild(divTxt);
	
	
	let ul = d.createElement('ul');
	ul.setAttribute('class', 'list-unstyled');	
	divTxt.appendChild(ul);
	
	
	let li = d.createElement('li');
	li.innerHTML = 'Carrera: Diseño y Programación Web'
	ul.appendChild(li);
	
	let li2 = d.createElement('li');
	li2.innerHTML = 'Materia: Interacción con Dispositivos Móviles';
	ul.appendChild(li2);
	
	let li3 = d.createElement('li');
	li3.innerHTML = 'Comisión: B';
	ul.appendChild(li3);
	
	let li4 = d.createElement('li');
	li4.innerHTML = 'Turno: Noche';
	ul.appendChild(li4);
	
	let li5 = d.createElement('li');
	li5.innerHTML = 'Año: 2020';
	ul.appendChild(li5);
	
	let li6 = d.createElement('li');
	li6.innerHTML = 'Segundo cuatrimestre';
	ul.appendChild(li6);
	
	let li7 = d.createElement('li');
	li7.innerHTML = 'Docente: Jonatan Gabriel Jorge';
	ul.appendChild(li7);
	
	let li8 = d.createElement('li');
	li8.innerHTML = 'Fecha de final: 18/12/20'
	ul.appendChild(li8);
	
	let li9 = d.createElement('li');
	li9.innerHTML = 'Alumno: Nicolás Alejandro Bettega'
	ul.appendChild(li9);
	
	
	
}