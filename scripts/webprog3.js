var myVar = setInterval(myTimer, 1000);
var end = setTimeout(myFunction, 300000);
var min=0;
var sec=0;

function myFunction(){
	clearInterval(myVar);
	document.getElementById("pq1").innerHTML = "Answer: Option 2";
	document.getElementById("pq2").innerHTML = "Answer: Option 3";
	document.getElementById("pq3").innerHTML = "Answer: Option 2";
	document.getElementById("pq4").innerHTML = "Answer: Option 4";
	document.getElementById("pq5").innerHTML = "Answer: Option 4";
	document.getElementById("pq6").innerHTML = "Answer: Option 3";
	document.getElementById("pq7").innerHTML = "Answer: Option 4";
	document.getElementById("pq8").innerHTML = "Answer: Option 2";
	document.getElementById("pq9").innerHTML = "Answer: Option 3";
	document.getElementById("pq10").innerHTML = "Answer: Option 4";
	
	var p1= ($('input[name=q1]:checked', '#myForm').val());
	var p2= ($('input[name=q2]:checked', '#myForm').val());
	var p3= ($('input[name=q3]:checked', '#myForm').val());
	var p4= ($('input[name=q4]:checked', '#myForm').val());
	var p5= ($('input[name=q5]:checked', '#myForm').val());
	var p6= ($('input[name=q6]:checked', '#myForm').val());
	var p7= ($('input[name=q7]:checked', '#myForm').val());
	var p8= ($('input[name=q8]:checked', '#myForm').val());
	var p9= ($('input[name=q9]:checked', '#myForm').val());
	var p10= ($('input[name=q10]:checked', '#myForm').val());
	var count=0;
	if(p1==2)
	count++;
	if(p2==3)
	count++;
	if(p3==2)
	count++;
	if(p4==4)
	count++;
	if(p5==4)
	count++;
	if(p6==3)
	count++;
	if(p7==4)
	count++;
	if(p8==2)
	count++;
	if(p9==3)
	count++;
	if(p10==4)
	count++;
	document.getElementById("score").innerHTML = "Score: "+count+"/10";
}

function myTimer() {
	document.getElementById("time").innerHTML = "Timer: "+(min+" m "+sec+" s ");
	sec++;
	if(sec==60){
		min++;
		sec=0;
		}
    //var d = new Date();
    //var time = d.toLocaleTimeString();
    //document.getElementById("time").innerHTML = "Timer: "+(time-start);
}

$(function(){
    $("#submit").on('click',function() {
        $(this).hide();
    }); 
});