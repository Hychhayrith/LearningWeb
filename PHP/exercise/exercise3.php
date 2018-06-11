<!DOCTYPE html>
<html>
    <head>
        <title>Exercise 3</title>
    </head>
    <body>
        <p>Compute the quotient and the remainder.</p>
        <form action="" method="get">
            <input type="number" name="num1">
            <input type="number" name="num2">
            <button type="submit"> submit </button>
        </form>
        <?php
            $a = $_GET["num1"];
            $b = $_GET["num2"];
            $reminder = $a % $b;
            $quotient = $a / $b;
            echo "The reminder is "; echo $reminder;
            
            echo "<br> The quotient is "; echo $quotient;
        ?>

    </body>

</html>