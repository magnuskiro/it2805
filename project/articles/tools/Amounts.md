[To top](#sub-content "top")
<DOCTYPE html>
<html lang="en">
<head>
</head>

<body>
		<h2>Find the right amount of ingredients:</h2>
		<!--<form>
			<input type="text" maxlength="40" placeholder="How many litres to brew?" name="name" required/>
			<select id="mySelect">
				<option value="na" selected="selected">Choose a recipe</option>
				<option value="paleale">Pale Ale</option>
				<option value="ipa">IPA</option>
				<option value="drystout">Dry Stout</option>
			</select> 
		</form>
		<div id="recipe"></div>-->
		<form>
			<h3>I have:</h3>
			<fieldset>
            <label>
                <span>Litres:</span>
                <input type="number" maxlength="3" placeholder="10" name="oldlitres" />
            </label>
            <label>
                <span>Grain (kg):</span>
                <input type="number" maxlength="3" placeholder="0" name="oldgrain" />
            </label> 
            <label>
                <span>Hops (g):</span>
                <input type="number" maxlength="3" placeholder="0" name="oldhops"/>
            </label>
            <label>
                <span>Yeast (g):</span>
                <input type="number" maxlength="3" placeholder="0" name="oldyeast"/>
            </label>
            <hr>
            <h3>I want:</h3>
            <label>
				<span>Liters:</span>
				<input type="number" maxlength="3" placeholder="0" name="newlitres" />
            </label>
            <input type="button" value="Calculate" onClick="amountCalculation(this.form)">
		</fieldset>
		<fieldset id="results">
			<h3>You need:</h3>
            <label>
                <span>Grain (kg):</span>
                <input type="number" maxlength="3" placeholder="0" name="newgrain" disabled />
            </label> 
            <label>
                <span>Hops (g):</span>
                <input type="number" maxlength="3" placeholder="0" name="newhops" disabled />
            </label>
            <label>
                <span>Yeast (g):</span>
                <input type="number" maxlength="3" placeholder="0" name="newyeast" disabled />
            </label>
            </fieldset>
		</form>

		

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script src="js/pageDownConverter.js"></script>
<script src="js/mdLoadUtils.js"></script>

<script>
	$( "select" )
	.change(function () {
	var str = "";
	$( "select option:selected" ).each(function() {
	str += $( this ).text();
	});
	if (str == 'IPA') {
		loadMD('articles/recipes/IPA.md', '#recipe');
	} else if (str == "Pale Ale") {
		loadMD('articles/recipes/PaleAle.md', '#recipe');
	} else if (str == "Dry Stout") {
		loadMD('articles/recipes/DryStout.md', '#recipe');
	}
/*	console.log(str);
	$( "#alcoholResult" ).text( str );
	loadMD('articles/Home.md', '#html-md'); */
	})
	.change();
	
	function amountCalculation(form){
		//var oldLitres = parseInt(form.oldlitres.value);
		//var newLitres = parseInt(form.newlitres.value);
		var oldLitres = form.oldlitres.value;
		var newLitres = form.newlitres.value;
		if (!parseInt(oldLitres) || !parseInt(newLitres)) {
			alert("Please enter current liters and wanted liters");
		} else {
			var multiplyFactor = form.newlitres.value / form.oldlitres.value;
			form.newgrain.value = (form.oldgrain.value * multiplyFactor).toFixed(1);
			form.newyeast.value = (form.oldyeast.value * multiplyFactor).toFixed(1);
			form.newhops.value = (form.oldhops.value * multiplyFactor).toFixed(1);
		}
		
		//alert(multiplyFactor);
		form.grain.value = "600";
		/*if (FG > OG) {
			document.getElementById("warn").innerHTML = "FG cannot be larger than OG";
		} else {
			var ABV = (OG - FG)*131;
			document.getElementById("warn").innerHTML = "";
		}

		document.getElementById("alcoholResult").innerHTML = "Your homebrewed beer contains approximately " + ABV.toString().substr(0,3)+"% alcohol";*/
    }
</script>
</body>
</html>
