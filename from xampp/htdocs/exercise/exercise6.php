<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Exercise 6</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <p>Sum the 5 input number and find the average.</p>
    <form action="" method="get">
        <p>Enter the first number</p>
        <input type="text" name="num1" value="0"><br>
        <p>Enter the second number</p>
        <input type="text" name="num2" value="0"><br> 
        <p>Enter the third number</p>
        <input type="text" name="num3" value="0"><br>
        <p>Enter the fourth number</p>
        <input type="text" name="num4" value="0"><br>
        <p>Enter the fifth number</p>
        <input type="text" name="num5" value="0"><br>
        <input type="submit">
    </form>
    <?php
        
        $a = $_GET['num1']; $b = $_GET['num2'];
        $c = $_GET['num3']; $d = $_GET['num4'];
        $e = $_GET['num5'];

        $total = $a + $b + $c + $d + $e;
        $avg = $total/5;

    ?>
    <p>The first number is <?php echo $a; ?></p>
    <p>The second number is <?php echo $b; ?></p>
    <p>The thrid number is <?php echo $c; ?></p>
    <p>The fouth number is <?php echo $d; ?></p>
    <p>The fifth number is <?php echo $e; ?></p>
    <p>The total number is <?php echo $total; ?></p>
    <p>The average number is <?php echo $avg; ?></p>
</body>
</html>