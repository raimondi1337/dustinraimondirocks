function type(str){
	$("#right").typed('reset');
	$("#right").typed({
		strings: [str],
		showCursor: false,
		typeSpeed: 0
	});
}; 

function show(image){
    $("#qr").attr("src", image+"");
}   

function hide(){
    $("#qr").attr("src", "");
}

var sad = document.getElementById("playSad");
var happy = document.getElementById("playHappy");

function sadSound(){
    sad.play();
}

function happySound(){
    happy.play();
}

$("#one").click(function(){
    type("[The] years must have unraveled him. Eaten. Forever divid[ed]. Now [he's] <span id='#lost' class='hover' onmouseover=show('Lost.png') onmouseout=hide()>lost</span>.");
});
$("#two").click(function(){type("I remember. The sweet summer. Beside the <span id='#pond' class='hover' onmouseover=show('Pond.png') onmouseout=hide()>pond</span>, lustrous grass and trees.")});
$("#three").click(function(){type("Stiff, black, dead. Unmoving.")});
$("#four").click(function(){type("I remember. A cool fluorescent <span id='#cave' class='hover' onmouseover=show('Glow Cave.png') onmouseout=hide()>cave</span> of dreams.")});
$("#five").click(function(){type("The mechanism. Absolutely alone. <span id='#cave' class='hover' onmouseover=show('Bohemian Rhapsody.png') onmouseout=hide()>Mama never saw the first shot.</span>")});
$("#six").click(function(){type("He made it home. Proud and happy. The gun was unintended.")});
$("#seven").click(function(){type("The first time … [he] took it up so carefully.")});
$("#eight").click(function(){type("Years later, [it] remains.")});
$("#nine").click(function(){type("Sorry, as any boy could be.")});
$("#ten").click(function(){type("I hasitated. We were bound together.")});
$("#eleven").click(function(){type("[He] was admitted. Laughing.")});
$("#twelve").click(function(){type("His [soul] in want. I [made] sure [he] got on.")});
$("#thirteen").click(function(){type("The deal done in [his] heart forever. Unattractive little bits of <span id='#cave' class='hover' onmouseover=show('War.png') onmouseout=hide()>war</span>.")});
$("#fourteen").click(function(){type("I remember. How [he] feels.")});
$("#fifteen").click(function(){type("I don’t remember much past that … I went free to find myself.")});
$("#sixteen").click(function(){type("Together. Somehow.")});