let getH2 = document.getElementById("fill-auto");

let color = {
	ele: {
		r: 10,
		g: 20,
		b: 30,
	},
	setEle: function () {
		this.ele.r = (this.ele.r + 17) % 255;
		this.ele.g = (this.ele.g + 27) % 255;
		this.ele.b = (this.ele.b + 37) % 255;
	},
	setBack: function () {
		this.setEle();
		return (getH2.style.color = `rgb(${this.ele.r}, ${this.ele.g}, ${this.ele.b})`);
	},
};

let textCont = "جهان کلیک";
let arrText = textCont.split("");
let i = 0;
function run() {
	setInterval(function () {
		getH2.textContent += arrText[i];
		color.setBack();
		i++;
		if (i > arrText.length - 1) {
			i = 0;
			getH2.textContent += "🌹💓🌹";
		}
if(getH2.textContent.length > 35) {
getH2.textContent = "";
}
	}, 1000);
}

let aaaa= setTimeout(run, 3000);
//clearTimeout(aaaa);
document.querySelector("article").addEventListener("click", run);
