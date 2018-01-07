(function() {
	"use strict"
	
	window.onload = function() {
		var add = document.getElementById("add");
		add.onclick = addSquare;
		var colors = document.getElementById("colors");
		colors.onclick = changeColors;
		
		// create several randomly positioned squares
		var squareCount = parseInt(Math.random() * 21) + 30;
		for (var i = 0; i < squareCount; i++) {
			addSquare();
		}
	}
	
	function addSquare() {
		var square = document.createElement("div");
		square.className = "square";
		square.style.left = parseInt(Math.random() * 650) + "px";
		square.style.top = parseInt(Math.random() * 650) + "px";
		square.style.backgroundColor = getRandomColor();
		square.onclick = squareClick;
		var squareArea = document.getElementById("squarearea");
		squareArea.appendChild(square);
	}
	
	function getRandomColor() {
		var letters = "0123456789abcdef";
		var result = "#";
		for (var i = 0; i < 6; i++) {
			result += letters.charAt(parseInt(Math.random() * letters.length));
		}
		return result;
	}
	
	function changeColors() {
		var squares = document.querySelectorAll("#squarearea div");
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = getRandomColor();
		}
	}
	
	var maxZ = 1000;
	
	function squareClick() {
		var oldZ = parseInt(this.style.zIndex);
		if (oldZ == maxZ) {
			this.parentNode.removeChild(this);
		} else {
			maxZ++
			this.style.zIndex = maxZ;
		}
	}
	
})();