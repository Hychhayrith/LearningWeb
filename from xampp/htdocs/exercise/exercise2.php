<?php

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Exercise 2</title>
	</head>
	<body>
		<form action="" method="get">
		1. <input type="text" name="first"><br> 
		2. <input type="text" name="second"><br>
		<input type="submit">
		</form>

		<?php 
			$x = $_GET["first"];
			$y = $_GET["second"];
			$total = $x + $y;
		?>
		first: <?php echo $_GET["first"]; ?><br>
		second: <?php echo $_GET["second"]; ?><br>
		total: <?php echo $total; die()?>
		</body>
</html>
