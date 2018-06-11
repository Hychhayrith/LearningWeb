<!DOCTYPE html>
<html>
    <head>
        <title>Exercise 5</title>
    </head>
    <body>
        <p>Swap the value without using the third party variable.</p>
        <form action="" method="get">
            <input type="number" name="num1">
            <input type="number" name="num2">
            <input type="submit">
        </form>
        <?php
            $a = $_GET['num1'];
            $b = $_GET["num2"];
            $a = $a + $b;
            $b = $a - $b;
            $a = $a - $b;
            echo "The first swapped value is "; echo $a;
            echo "<br> The second swapped value is "; echo $b;
        ?>
    </body>
</html>