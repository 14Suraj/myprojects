const container =
document.querySelector(".data-container");

// Function to generate bars
function generatebars(num = 20) {

//For loop to generate 20 bars
for (let i = 0; i < num; i += 1) {

	// To generate random values from 1 to 100
	const value = Math.floor(Math.random() * 100) + 1;

	// To create element "div"
	const bar = document.createElement("div");

	// To add class "bar" to "div"
	bar.classList.add("bar");

	// Provide height to the bar
	bar.style.height = `${value * 3}px`;
	// Translate the bar towards positive X axis
	bar.style.transform = `translateX(${i * 30}px)`;

	// To create element "label"
	const barLabel = document.createElement("label");

	// To add class "bar_id" to "label"
	barLabel.classList.add("bar__id");

	// Assign value to "label"
	barLabel.innerHTML = value;

	// Append "Label" to "div"
	bar.appendChild(barLabel);

	// Append "div" to "data-container div"
	container.appendChild(bar);
}
}


// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 300) {
	let bars = document.querySelectorAll(".bar");

	// BubbleSort Algorithm
	for (var i = 0; i < bars.length; i += 1) {
		for (var j = 0; j <bars.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			bars[j].style.backgroundColor = "#FF4949";
			bars[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 600)
			);

			console.log("run");
			var value1 = Number(bars[j].childNodes[0].innerHTML);
			var value2 = Number(bars[j + 1]
						.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 > value2) {s
				await swap(bars[j], bars[j + 1]);
				bars = document.querySelectorAll(".bars");
			}

			// Changing the color to the previous one
			bars[j].style.backgroundColor = "#6b5b95";
			bars[j + 1].style.backgroundColor = "#6b5b95";
		}

		//changing the color of greatest element
		//found in the above traversal
		bars[bars.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
}

// To enable the button
// "Generate New Array" after final(sorted)
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#6f459e";


// Call "generatebars()" function
generatebars();

// Function to generate new random array
function generate()
{
window.location.reload();
}

// Function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1")
.disabled = true;
document.getElementById("Button1")
.style.backgroundColor = "#d8b6ff";

// To disable the button "Insertion Sort"
document.getElementById("Button2")
.disabled = true;
document.getElementById("Button2")
.style.backgroundColor = "#d8b6ff";
// Calling generatearray function
generatearray();

// Calling BubbleSort function
BubbleSort();
}
