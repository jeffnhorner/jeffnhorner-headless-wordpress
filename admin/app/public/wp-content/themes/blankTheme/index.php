<?php
    // While we're in development, use the localhost url
    header( 'Location:' . $_ENV['LOCAL_BASE_URL']);
?>