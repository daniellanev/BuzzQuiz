
var value = 0;
var totalscore = [0, 0, 0, 0, 0];
var question1select = 0;

var count1 = function(score){
    totalscore[0] = parseInt(score);
    var answer1 = document.getElementsByClassName("answerfor1");
    for (var i = 0; i < answer1.length; i++){
        if (answer1[i].clicked == true){
            answer1[i].classList.add("selectedOne");
        }
    }
}

var count2 = function(score){
	totalscore[1] = parseInt(score);
}

var count3 = function(score){
	totalscore[2] = parseInt(score);
}

var follower = document.getElementById('slider-follow');
var follower_val = document.getElementById('slider-val');
var slider = document.getElementById('frame-slider');

var updateFollowerValue = function(val) {
  follower_val.innerHTML = val;
  follower.style.left = val + '%';
};

updateFollowerValue(slider.value);


var total = function(){
 	var selectOptions = document.getElementsByClassName("answerfor5");
    var select = document.getElementById("sel1");
       	answer = select.selectedIndex;


   	for(var i = 0 ; i < selectOptions.length; i++) {
        if(answer == i){
       		totalscore[4] = parseInt(selectOptions[answer].value); 
		} 
   	}
   	console.log(totalscore.toString());      	
    var sum = totalscore.reduce(function(a, b) { return a + b; }, 0);

    if (sum < 5){
        var result = document.createElement("div");
        result.classList.add("result");
        result.textContent = "YOU DO NOT KNOW FRIENDS AT ALL! GO AND WATCH IT!"
        document.body.appendChild(result);
        var resultPic = document.createElement("IMG");
        resultPic.src="./images/one.gif";
        resultPic.classList.add("resultPic");
        result.appendChild(resultPic);
        window.scrollTo(0,document.body.scrollHeight);
    }

    else if (sum < 10 && sum >= 5){
    	var result = document.createElement("div");
        result.classList.add("result");
        result.textContent = "YOU DO NOT KNOW FRIENDS THAT WELL! TIME TO REWATCH IT!"
        document.body.appendChild(result);
        var resultPic = document.createElement("IMG");
        resultPic.src="./images/two.gif";
        resultPic.classList.add("resultPic");
        result.appendChild(resultPic);
        window.scrollTo(0,document.body.scrollHeight);
    }

    else if (sum < 15 && sum >= 10){
        var result = document.createElement("div");
        result.classList.add("result");
        result.textContent = "YOU KNOW FRIENDS QUITE WELL!"
        document.body.appendChild(result);
        var resultPic = document.createElement("IMG");
        resultPic.src="./images/three.gif";
        resultPic.classList.add("resultPic");
        result.appendChild(resultPic);
        window.scrollTo(0,document.body.scrollHeight);
    }

    else {
        var result = document.createElement("div");
        result.classList.add("result");
        result.textContent = "YOU REALLY KNOW FRIENDS! WELL DONE!"
        document.body.appendChild(result);
        var resultPic = document.createElement("IMG");
        resultPic.src="./images/four.gif";
        resultPic.classList.add("resultPic");
        result.appendChild(resultPic);
        window.scrollTo(0,document.body.scrollHeight);
    }

}