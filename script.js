var kremuwki = 0;
function nadpapiesz(){
	document.getElementById('jp2').style.border = '5px solid black';
	document.getElementById('jd').style.animation = 'huj 0.1s infinite';
}
function podpapiesz(){
	document.getElementById('jp2').style.border = 'none';
	document.getElementById('jd').style.animation = 'anim 1s infinite';
}
function button1(){
	document.getElementById('jp2').style.visibility = 'hidden';
}
function nadkremuwa(){
	document.getElementById('jp2').src = 'papierz2.gif';
}
function podkremuwa(){
	document.getElementById('jp2').src = 'papierz.jpg';
}
function button2(){
	document.getElementById('jp2').style.visibility = 'visible';
/*
░░░░░░░░░░░░░▄▄▀▀▀▀▀▀▄▄
░░░░░░░░░░▄▄▀▄▄▄█████▄▄▀▄
░░░░░░░░▄█▀▒▀▀▀█████████▄█▄
░░░░░░▄██▒▒▒▒▒▒▒▒▀▒▀▒▀▄▒▀▒▀▄
░░░░▄██▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▄
░░░░██▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▌
░░░▐██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐█
░▄▄███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
▐▒▄▀██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌
▌▒▒▌▒▀▒▒▒▒▒▒▄▀▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒█▌
▐▒▀▒▌▒▒▒▒▒▒▒▄▄▄▄▒▒▒▒▒▒▒▀▀▀▀▄▒▐
░█▒▒▌▒▒▒▒▒▒▒▒▀▀▒▀▒▒▐▒▄▀██▀▒▒▒▌
░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒▒▒▒█
░░░▀▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌▒▒▒▒▒▒▄▀
░░░▐▒▒▒▒▒▒▒▒▒▄▀▐▒▒▒▒▒▐▒▒▒▒▄▀
░░▄▌▒▒▒▒▒▒▒▄▀▒▒▒▀▄▄▒▒▒▌▒▒▒▐▀▀▀▄▄▄
▄▀░▀▄▒▒▒▒▒▒▒▒▀▀▄▄▄▒▄▄▀▌▒▒▒▌░░░░░░
▐▌░░░▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▀░░░░░░░
░█░░░░░▀▄▄▒▒▒▒▒▒▒▒▒▒▒▒▄▀░█░░░░░░░
░░█░░░░░░░▀▄▄▄▒▒▒▒▒▒▄▀░░░░█░░░░░░
░░░█░░░░░░░░░▌▀▀▀▀▀▀▐░░░░░▐▌░░░░░*/
}
function MiniPopeGame(){
	document.getElementById('kremuwa').style.transition = '2s';
	document.getElementById('kremuwa').className = 'kremuwa';
	document.getElementById('jp2').style.visibility = 'hidden';
	document.getElementById('bt1').style.visibility = 'hidden';
	document.getElementById('bt2').style.visibility = 'hidden';
	document.getElementById('jp2').style.visibility = 'hidden';
	document.getElementById('licznik').style.visibility = 'visible';
	document.getElementById('cel').style.visibility = 'visible';
	var ZDupyDoMordy = Math.floor((Math.random()*80)+10);
	var ZMordyDoDupy = Math.floor((Math.random()*80)+10);
	document.getElementById('cel').style.left = ZDupyDoMordy + '%';
	document.getElementById('cel').style.top = ZMordyDoDupy + '%';
	document.getElementById('jp2').onmouseover = 'none';
	document.getElementById('jd').style.animation = 'anim 5s infinite';
	document.getElementById('cel').style.cursor = 'crosshair';
}
function MiniPopeGamePlay(){
	kremuwki+=1;
	document.getElementById('licznik').innerHTML = kremuwki;
	var ZDupyDoMordy = Math.floor((Math.random()*80)+10);
	var ZMordyDoDupy = Math.floor((Math.random()*80)+10);
	var HakAnalny = Math.floor((Math.random()*5)+1);
	switch(HakAnalny){
		case 1:
			document.getElementById('cel').src = 'papierz.jpg';
		break;
		case 2:
			document.getElementById('cel').src = 'papierz2.gif';
		break;
		case 3:
			document.getElementById('cel').src = 'papierz3.jpg';
		break;
		case 4:
			document.getElementById('cel').src = 'papierz4.jpg';
		break;
		case 5:
			document.getElementById('cel').src = 'papierz5.jpg';
		break;
	}
	document.getElementById('cel').style.left = ZDupyDoMordy + '%';
	document.getElementById('cel').style.top = ZMordyDoDupy + '%';
	if(kremuwki==2137){
		document.getElementById('barka').style.visibility = 'visible';
		document.getElementById('jd').style.animation = 'huj 2.57s infinite';
	} 
}
