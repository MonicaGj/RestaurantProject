
$(() => {
	const list = `https://raw.githubusercontent.com/MonicaGj/JSON/master/menu.json`;
	$.getJSON(list, function (result) {

		// get appetizers
		  $("#appetizersBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Appetizers" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Appetizers");
		  	dispayMenu(a);
		});

		  //get Soups & Salads
		  $("#soupsBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Soups & Salads" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Soups & Salads");
		  	dispayMenu(a);	
		});

		  //get Burgers & Sandwiches
		  $("#burgersBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Burgers & Sandwiches" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Burgers & Sandwiches");
		  	dispayMenu(a);
		});

		//get Pastas
		  $("#pastasBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Pastas" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Pastas");
		  	dispayMenu(a);
		});

		//get Pizza
		  $("#pizzaBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Pizza" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Pizza");
		  	dispayMenu(a);
		});
		//get Deserts
		  $("#desertBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Deserts" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Deserts");
		  	dispayMenu(a);
		});
		//get Beverages
		  $("#beveragesBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].Type == "Beverages" && result[i].GlutenFree == false) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Beverages");
		  	dispayMenu(a);
		});
		//get Alergies
		  $("#glutenFreeBTN").on("click", function(){
		  	let a = []
		  	for (let i in result) {
		  	if (result[i].GlutenFree == true) {
		  		a.push(result[i])
		  	}}
		  	$(".title").text("Alergies");
		  	dispayMenu(a);
		});

		// Birthdays
		$("#birthdayBTN").on("click", function () {
			$(".modal-body").empty();
			$(".title").text("Birthdays");
			$(".modal-body").append(` 
		  		<p>If you are celebrating a birthday on the day you are at Buffalo Phils,
		  		</br> please let your server know & they will  provide you with a Free Birthday Sundae.
		  		</br>They will only sing if you ask them to (trust us, it is bad)!</p>
		  		
		  		`);
		});


	});



	// Pop up
	var openmodal = document.querySelectorAll('.modal-open')
	for (var i = 0; i < openmodal.length; i++) {
		openmodal[i].addEventListener('click', function (event) {
			event.preventDefault()
			toggleModal()
		})
	}

	const overlay = document.querySelector('.modal-overlay')
	overlay.addEventListener('click', toggleModal)

	var closemodal = document.querySelectorAll('.modal-close')
	for (var i = 0; i < closemodal.length; i++) {
		closemodal[i].addEventListener('click', toggleModal)
	}


})

function toggleModal() {
	const body = document.querySelector('body')
	const modal = document.querySelector('.modal')
	modal.classList.toggle('opacity-0')
	modal.classList.toggle('pointer-events-none')
	body.classList.toggle('modal-active')
}

function dispayMenu(menu) {
	$(".modal-body").empty();
	for (let i in menu) {
		$(".modal-body").append(`
	    	<div class=" md:w-1/3 p-4 flex flex-col flex-grow flex-shrink relative float-left float-right ">
				<p class="text-yellow-600">${menu[i].Name}</p>
				<p>${menu[i].Description}</p>
				<p>${menu[i].Price}$</p>
			</div>
		`)
	}
}





		
