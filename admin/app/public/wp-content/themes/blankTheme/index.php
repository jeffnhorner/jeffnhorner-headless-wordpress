<?php
    var_dump(getenv('LOCAL_BASE_URL'));
    var_dump($_ENV['LOCAL_BASE_URL']);
    // While we're in development
    header( 'Location:' . getenv('LOCAL_BASE_URL') );
?>