<?php
	$text = "I just killed the snake.";
	$color = "Red";
	$fav_thing = "Laptop";
	$age = 17;
	$next_age = 17;
?>
<!DOCTYPEhtml>
<html>
	<head>
		<tile>First Time PHP</tile>
	</head>
	<body>
		<p>Let's see the sentence from php script.</p>
		<p><?php echo $text ?></p>
		<?php
			echo "I'm Chhayrith. I'm $age. </br> My favorite thing is $fav_thing with the $color color.<br>";
			if($age === $next_age){
				echo "The data type is equal.";
			}else if($age == $next_age){
				echo "The value the recent age is equal to the next age.";
			}else{
				echo "both are not equal.";
			}
		?>

		<a href="exercise/exercise1.php">exercise1</a>
		<br>
		<a href="exercise/exercise2.php">exercise2</a>
		<br>
		<a href="exercise/exercise3.php">exercise3</a>
		<br>
		<a href="exercise/exercise4.php">exercise4</a>
		<br>
		<a href="exercise/exercise5.php">exercise5</a>
		<br>
	</body>
</html>