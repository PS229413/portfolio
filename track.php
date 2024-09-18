<?php
// Bestandspad naar je logbestand
$logfile = 'downloads\visitors.txt';

// Verkrijg het IP-adres van de bezoeker
$ip = $_SERVER['REMOTE_ADDR'];

// Verkrijg de huidige datum en tijd
$date = date('Y-m-d H:i:s');

// Genereer een logregel
$logline = $ip . " - " . $date . "\n";

// Schrijf naar het logbestand
file_put_contents($logfile, $logline, FILE_APPEND);
?>
