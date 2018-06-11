<?php 
	

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Exercise</title>
	</head>
	<body>

		<form name="form" action="" method="get">
			<input id="number" name="number" type="number" value="Enter a number" >
		</form>
		<?php
			echo "the value you have input is "; 
			echo $_GET['number'];
		?>
	</body>

</html>