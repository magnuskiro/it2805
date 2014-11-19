<!DOCTYPE html>
<html lang="en">
<head>
</head>

<body>
            <h2>Calculate alcohol percentage:</h2>
            <form>
                OG: <input name="OG" type="text" value="1.07"><br />
                FG: <input name="FG" type="text" value="1.02"><br />
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
        var ABV = (OG - FG)*131;

        document.getElementById("alcoholResult").innerHTML = ABV.toString().substr(0,3)+"%";
    }

</script>

</body>
</html>  
