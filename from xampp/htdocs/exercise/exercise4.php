<!DOCTYPE html>
<html>
    <head>
        <title>Exercise 4</title>
    </head>
    <body>
        <p>Swap two values using the temp variable.</p>
        
        <form action="" method="get">
            <input type="text" name="num1">
            <input type="text" name="num2">
            <button type="submit"> submit </button>
        </form>
        <?php
            $a = $_GET["num1"];
            $b = $_GET["num2"];
            $temp = $a;
            $a = $b;
            $b = $temp; 
        ?>
        first number is <?php echo $_GET["num1"];?>
        <br>
        seconde number is <?php echo $_GET["num2"];?>
        <br>
        <p>The first swap number is:  <?php echo $a; ?></p>
        <p>The second swap number  is <?php echo $b; ?></p>
    </body>

</html>