<html>
    <body>
        <h1>Team allo:</h1>
        <ul>
            <?php
                $json = file_get_contents('http://players');
                $players = json_decode($json)->players;
/*foreach(json_decode(file_get_contents('http://players'))->players as $player)*/
                foreach($players as $player){
                    echo "<li>$player</li>";
                }
            ?>
        </ul>
    </body>
</html>