class reserveRoom {
	constructor(firtName, lastName, email, people, number, date) {
		this.firtName = firtName;
		this.lastName = lastName;
		this.email = email;
		this.people = people;
		this.number = number;
		this.date = date
	}
}

$(() => {

	slideShow();
	let reservations = [];



	$("#reserve").on("click", function (event) {
		event.preventDefault();

		let helpper = validation()
		if (helpper[0] == true) {
			let firstName = helpper[1];
			let lastName = helpper[2];
			let email = helpper[3];
			let people = helpper[4];
			let number = helpper[5];
			let date = helpper[6];

			let room = new reserveRoom(firstName, lastName, email, people, number, date);
			let findDate = reservations.find(x => x.date.toDateString() == room.date.toDateString());

		
			if (!findDate) {
				reservations.push(room);
				$("#message").empty();
				$("#message").append(`<p>${firstName} reserved our room on ${date.toDateString()}. You will be contacted soon.</p>`)
				$('#form')[0].reset();
				window.localStorage.setItem('reservation', JSON.stringify(reservations));

			} else {
				$("#message").empty();
				$("#message").append(`<p>${firstName}, sorry that day is already booked!</p>`)
				$('#form')[0].reset();
				findDate = []

			}

			console.log(window.localStorage.getItem('reservation'));



		}
	})	
})




// date without time
function checkDate(date1, date2) {
	let newDate1 = date1.toDateString();
	let newDate2 = date2.toDateString();
	if (newDate1 == newDate2) {
		return true;
	}

}

// slide show
let counter = 0;
function slideShow() {
	let i;
	let img = document.getElementsByClassName("mySlides");
	for (i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}
	counter++;
	if (counter > img.length) { counter = 1 }
	img[counter - 1].style.display = "block";
	setTimeout(slideShow, 3500);
}

function validation() {

	let firstName = $('#firstName').val();
	let lastName = $("#lastName").val();
	let email = $("#email").val();
	let people = $("#people").val();
	let number = $("#phoneNumber").val();
	let date = new Date($("#date").val());

	if (firstName == "") {
		$("#firstNameErr").empty();
		$("#firstNameErr").append(`<p>* </br> This field is requered, enter your name!</p>`);

		return false;
	} else {
		$("#firstNameErr").empty();
	}

	if (lastName == "") {
		$("#lastNameErr").empty();
		$("#lastNameErr").append(`<p>* </br> This field is requered, enter your last name!</p>`);

		return false;
	} else {
		$("#lastNameErr").empty();
	}

	if (people == "") {
		$("#peopleErr").empty();
		$("#peopleErr").append(`<p>* </br> Please correct field for People!</p>`);

		return false;
	} else {
		$("#peopleErr").empty();
	}

	if (number == "") {
		$("#phoneNumberErr").empty();
		$("#phoneNumberErr").append(`<p>* </br> Please enter correct number!</p>`);

		return false;
	} else {
		$("#phoneNumberErr").empty();
	}

	if ((Date.parse(date) - Date.parse(new Date())) < 0) {
		$("#dateErr").empty();
		$("#dateErr").append(`<p>* </br> Selected date is in the past!</p>`);

		return false;
	} else {
		$("#dateErr").empty();
	}
	return [true, firstName, lastName, email, people, number, date];

}