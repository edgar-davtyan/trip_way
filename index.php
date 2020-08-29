<?php
function __autoload($classname)
{
    $fileName = "Libs/$classname.php";
    if (file_exists($fileName)){
        require_once $fileName;
    }
}
$r = new Router();
$r->init();