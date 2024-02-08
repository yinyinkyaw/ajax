<?php

$search = $_REQUEST['q'];

require_once './Classes/Database.php';
require_once './Classes/Book.php';

$searchData = new Book($search);
$result = $searchData->search();

header('Access-Control-Allow-Origin: *');

if (count($result) > 0) {
    echo json_encode($result);
}
