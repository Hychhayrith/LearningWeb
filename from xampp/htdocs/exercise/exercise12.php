<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Exercise 12</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <p>Compare the two input number.</p>
    <form action="" method="get">
        <p>Enter the first number.</p>
        <input type="number" name="num1">
        <p>Enter the second numeber</p>
        <input type="number" name="num2">
        <input type="submit">
    </form>
    <?php 
        $a = $_GET['num1']; $b = $_GET["num2"];
        if( $a > $b){

            $bigger = "$a Is bigger";
        }else{
            $bigger = "$b is bigger";
        }
        echo $bigger;
    ?>

</body>
</html>