<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Exercise 20</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>
    <p>check weather the input alphabet is consonent or vowel.</p>
    <form action="" method="get">
        <p>Please input the first alphabet.</p>
        <input type="text" name="text1" value="alphabet goes here">
        <input type="submit">
    </form>
    <?php
        $a = $_GET['text1']; $b = $_GET['text2'];
        if(($a >= 'a' && $a <= 'z') || ($a >= 'A' && $a <= 'Z')){
            switch($a){
                case 'a': case 'e': case 'i': case 'o': case 'u':
                case 'A': case 'E': case 'I': case 'O': case 'U':
                    echo "The input alphabet is vowel";
                    break;
                default: 
                    echo "The input alphabet is consonent";
                    break;
            }
        }else{
            echo "Invalid input <br> Make sure you input only alphabet.";
        }
    ?>
</body>
</html>