<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'EoRUXHgZA2ourR8mXJxogfdzmiBmQcUKYU0f6UfI4Xq+sVypBkQi1MsDy5OqT4O4QZ7e3Oypp+BH3zrXiAFPEA==');
define('SECURE_AUTH_KEY',  '5VMXtlUuagK5JpPMbpXkPm+McYnJcFiYO1TP1Dudbl4oRBVwHdGBbAGNI34e6KguE3JlvkWOr5WuvTCGce9XYg==');
define('LOGGED_IN_KEY',    '+tXgqJDYJ+ngsqE+tIyO4fH3ksfYVS0q1rrRg30Tx54sXN9A0uTG5aJ1dYm6tGMe3MpFqclRM1dhIWbHPA9g+A==');
define('NONCE_KEY',        'UyphjHyokATtVa9NQYFMySLe5kM7gHHxIf7FV0eeoeffM3evIWTNlwRprkNasuC6WgRnTgIXTNlDD8uLwucISg==');
define('AUTH_SALT',        '6J2KxkLZyqoBo/cl1aIIp59XXCpg77M98glK0EE8jaZyFzTWfGs3fASjbrvL3q11MTVxsd7M09wYkvVYY8KsPg==');
define('SECURE_AUTH_SALT', 'py2GLoUb81h1rq4kQj3jmoR5tg4//K1Q69k/CJeuYJrYhP2M1cQN/uhf5lGKM4AQDbaRmGf9hy8Hrx0beiTGIw==');
define('LOGGED_IN_SALT',   'r2qtbDlFawOUAH8kzi8TVtn9BUccmqEo1kUqVIdfbJOJX0fYyDSe75J0lWzMkzEI6HKXzIolzTtikpqVd3IyUA==');
define('NONCE_SALT',       'oharr6dd5QUl8LfGuqE3dhofj/qKoYso27G+8AWPm8bI8IrMboV0I/NPIwijQXCXiDIheoqwsJt5VQd0xXauLQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
