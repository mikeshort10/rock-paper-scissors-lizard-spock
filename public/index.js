$('document').ready(function () {
	var choicesLeft = {
		0: "far fa-hand-rock flip-left",
		1: "far fa-hand-paper flip-left",
		2: "far fa-hand-scissors flip-left-alt",
		3: "far fa-hand-lizard flip-left-alt",
		4: "far fa-hand-spock flip-left"
	}
	
	var choicesRight = {
		0: "far fa-hand-rock flip-right",
		1: "far fa-hand-paper flip-right",
		2: "far fa-hand-scissors flip-right-alt",
		3: "far fa-hand-lizard flip-right-alt",
		4: "far fa-hand-spock flip-right"
	}
	
	var leftHand, rightHand;
	
	function win () {
		const l = "Left Hand";
		const r = "Right Hand";
		if (leftHand === rightHand) return "Tie!";
		switch (leftHand) {
			case ("rock"):
				switch (rightHand) {
					case ("paper"):
						document.getElementById("icon-right").color = "green";
						return "Rock is covered by Paper!";
					case ("scissors"):
						return "Rock crushes Scissors!";
					case ("lizard"):
						return "Rock crushes Lizard!";
					case ("spock"):
						return "Rock is vaporized by Spock!";
				}
				break;
			case ("paper"):
				switch (rightHand) {
					case ("rock"):
						return "Paper covers Rock!";
					case ("scissors"):
						return "Paper is cut by Scissors!";
					case ("lizard"):
						return "Paper is eaten by Lizard!";
					case ("spock"):
						return "Paper disproves Spock!";
				}
				break;
			case ("lizard"):
				switch (rightHand) {
					case ("paper"):
						return "Lizard eats Paper!";
					case ("scissors"):
						return "Lizard is decapitated by Lizard!";
					case ("rock"):
						return "Lizard is crushed by Rock!";
					case ("spock"):
						return "Lizard poisons Spock!";
				}
				break;
			case ("scissors"):
				switch (rightHand) {
					case ("paper"):
						return "Scissors cuts Paper!";
					case ("lizard"):
						return "Scissors decapitates Lizard!";
					case ("rock"):
						return "Scissors are crushed by Rock!";
					case ("spock"):
						return "Scissors are smashed by Spock!";
				}
				break;
			case ("spock"):
				switch (rightHand) {
					case ("paper"):
						return "Spock is disproven by Paper!";
					case ("scissors"):
						return "Spock smashes Scissors!";
					case ("lizard"):
						return "Spock is poisoned by Lizard!";
					case ("rock"):
						return "Spock vaporizes Rock!";
				}
				break;
		}
	}
	
	 function rps (id, start, middle, count = 0) {
		 leftHand = undefined;
		 rightHand = undefined;
		 let completeFunction = () => rps(id, middle, start, count+1);
		 if (count > 4) completeFunction = function () {
			 let rando = Math.floor(Math.random() * 5);
			 let choice = id === "left" ? choicesLeft[rando] : choicesRight[rando];
			 id === "left" ? leftHand = choice.split(" ")[1].split("-")[2] : rightHand = choice.split(" ")[1].split("-")[2];
			 document.getElementById("icon-" + id).className = choice;
			 if (rightHand && leftHand) {
				 var winner = win();
				 document.getElementById("result").innerHTML = winner;
				 var toBe = winner.split(" ")[1];
				 if (toBe === "is" || toBe === "are") {
					 $("#icon-left").css("color", "pink");
					 $("#icon-right").css("color", "lightgreen");
				 } else if (winner === "Tie!") {
					 $("#icon-left").css("color", "white");
					 $("#icon-right").css("color", "white");
				 } else {
					 $("#icon-left").css("color", "lightgreen");
					 $("#icon-right").css("color", "pink");
				 }
			 }
		 };
		 $({deg: start}).animate({deg: middle},{
			 duration: 350,
			 step: function (now) {
				 $("#" + id).css({
					 transform: "rotateZ(" + now + "deg)"
				 })
			 },
			 complete: completeFunction
		 })
	 }
	
	$("body").click(function () {
		rps("left", 0, -45)
		rps("right", 0, 45)
	});
})