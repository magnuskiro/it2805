 <!DOCTYPE html>
<html lang="en">
<head>
</head>

<body>
            <h2>Find the right amount of ingredients:</h2>
            <select id="select">
                 <option value="paleale">Pale Ale</option>
                 <option value="ipa">IPA</option>
                 <option value="drystout">Dry Stout</option>
                 <option value="audi">Audi</option>
            </select> 
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
        var c = document.getElementById("select").value;
        alert(c);
        if (FG > OG) {
            alert("FG cannot be larger than OG");
        } else {
            var ABV = (OG - FG)*131;
        }

        document.getElementById("alcoholResult").innerHTML = ABV.toString().substr(0,3)+"%";
    }

</script>

</body>
</html>  
