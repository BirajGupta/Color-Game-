var num=6;
var colors=generatecolors(num);

var squares=document.querySelectorAll(".square");
var pickedcolor=colors[rcolor(num)];
var topick=document.querySelector("#topick");
var message=document.querySelector("#message");
var blueback=document.querySelector(".blueback");
var resetbutton=document.querySelector("#reset");
var easy=document.querySelector("#easy");

easy.addEventListener("click",function()
{		
		num=3;
		colors=generatecolors(num);
		pickedcolor=colors[rcolor(num)];
		topick.textContent=pickedcolor;
		easy.classList.add("selected");
		hard.classList.remove("selected");
		for(var i=0;i<squares.length;i++)
		{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else
			squares[i].style.display="none";
		}
});

hard.addEventListener("click",function()
{		
		num=6;
		colors=generatecolors(num);
		pickedcolor=colors[rcolor(num)];
		topick.textContent=pickedcolor;
		hard.classList.add("selected");
		easy.classList.remove("selected");
		for(var i=0;i<squares.length;i++)
		{
		if(colors[i])
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
});

resetbutton.addEventListener("click",function(){
		colors=generatecolors(num);
		pickedcolor=colors[rcolor(num)];
		message.textContent="";
		resetbutton.textContent="New colors";
		topick.textContent=pickedcolor;
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.backgroundColor=colors[i];
		}
});

topick.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
			var clickedcolor=this.style.backgroundColor;

			if(clickedcolor==pickedcolor)
			{
				message.textContent="Correct";
				resetbutton.textContent="Play Again?";
				ifcorrect(pickedcolor);
				blueback.style.backgroundColor=pickedcolor;
			}
			else{
				this.style.backgroundColor="#232323";
				message.textContent="Try again";}
	});
}


function generatecolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(rgbcolor());
	}

	return arr;
}

function rgbcolor()
{
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}


function ifcorrect(picked)
{
	for(var i=0;i<squares.length;i++)
	     	squares[i].style.backgroundColor=picked;
}

function rcolor(num)
{
	var colorpicker=Math.floor(Math.random()*num)
	return colorpicker;
}