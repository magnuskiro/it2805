<DOCTYPE html>
<html lang="en">
<head>
</head>

<body>
            <h2>Find the right amount of ingredients:</h2>
            <form>
				<input type="text" maxlength="40" placeholder="How many litres to brew?" name="name" required/>
				<select id="mySelect">
					<option value="na" selected="selected">Choose a recipe</option>
					<option value="paleale">Pale Ale</option>
					<option value="ipa">IPA</option>
					<option value="drystout">Dry Stout</option>
					<option value="audi">Audi</option>
				</select> 
			</form>
            <script>console.log("wtf");</script>
            <div id="recipe"></div>


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
</script>
</body>
</html>
