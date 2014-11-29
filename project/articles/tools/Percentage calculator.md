<!DOCTYPE html>
<html lang="en">
<head>
</head>

<body>
            <h2>Calculate alcohol percentage:</h2>
            <p id="warn" style="color: red"></p>
            <form>
				<label>
					<span>Original Gravity:</span>
					<input name="OG" type="text" value="1.07"><br/>
                </label>
                <label>
					<span>Final Gravity:</span>
					<input name="FG" type="text" value="1.02"><br/>
                </label>
                <input type="button" value="Calculate %" onclick="percentageCalculation(this.form)">
            </form>
            <p id="alcoholResult"></p>


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="../bootstrap/js/bootstrap.min.js"></script>
<script src="js/pageDownConverter.js"></script>
<script src="js/mdLoadUtils.js"></script>

<script>

    // alcohol percentage calculation.
    function percentageCalculation(form){
        var OG = form.OG.value;
        var FG = form.FG.value;
        if (FG > OG) {
			document.getElementById("warn").innerHTML = "FG cannot be larger than OG";
        } else {
            var ABV = (OG - FG)*131;
            document.getElementById("warn").innerHTML = "";
        }

        document.getElementById("alcoholResult").innerHTML = "Your homebrewed beer contains approximately " + ABV.toString().substr(0,3)+"% alcohol";
    }

</script>

</body>
</html>  
