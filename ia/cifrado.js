function cesar ()
{
	var correr = Number(document.getElementById("correr").value);
	var let = String(document.getElementById("let").value);
	var palabra = let.toLowerCase();
	var dividir = palabra.split("");
	var Visible = "";
	for (var i = 0; i< dividir.length; i++)
	{
		var ascii = dividir[i].charCodeAt();
		var Num = ascii+correr;
		if(Num <= 97 || Num >= 122)
		{
			Num = 96+correr;
		}
		var asciilet = String.fromCharCode(Num);
		var Visible=Visible+asciilet;
	};
	alert (Visible);
}