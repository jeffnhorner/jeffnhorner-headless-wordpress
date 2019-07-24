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

//** Require new Dotenv Class **//

/**
* Include Dotenv library to pull config options from .env file.
*/
if(file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::create(__DIR__);
    $dotenv->load();
}

if(file_exists(dirname(__DIR__) . '/vendor/autoload.php')) {
    require_once dirname(__DIR__) . '/vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::create(dirname(__DIR__) );
    $dotenv->load();
}

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
define('AUTH_KEY',         'mU/fsVJ22WAHFeVFvAyfQhGjbl1fB58nxQU3ZztAVObtRzevYXK9dXshhuIgPaS1CAM7mLwrDM/EsAajGBfs8A==');
define('SECURE_AUTH_KEY',  'QhP4MBliA2mzpHaD3F6jyVXs5bg++5iIGQOcqwBYvfoAJspRFRKKc/9hZ68i4SA6BICnoRaJGNr3dYSjd2+6gw==');
define('LOGGED_IN_KEY',    'eev7+KYzbrNpV1rTusMwOE65O1e5KDULyOS59J4swom2T4vcuMxQdK1ALFBkY/xPmMhmrm164WYenI5O/4Bqbw==');
define('NONCE_KEY',        'fdJfFZW4cdkppBfD9TLoSiFa57pYxQJj02XD4R4/sya8vBekeSst6TWw0GauY0yb/0uTHiXRp6w9toj0mG31ng==');
define('AUTH_SALT',        'iJrHFiZdkYQGCgb68Pzf+5DzdMOfX55OsDzC0IXz/1LAUx2yEoDO9xxLDW/ZuZzJxBKtX0FKZosu9zBEztW5UA==');
define('SECURE_AUTH_SALT', 'jPjJ/NZSIDiZIHBinJem5+LVdYU94qdO3KOw+Vhb4mrSwRhLaAX5Z1wfG/OetnjJQhb84fM/tT+R2jECgOa9EA==');
define('LOGGED_IN_SALT',   'if7G/ltGhhiqxscQXegDlLEgjcG26XiBuvNGelkTc0k19P4DI8NnuMhPicJQjqgqneUso4CVo/qP8KE4VQjd/Q==');
define('NONCE_SALT',       'bXDpeeGEDJ9TR3c7erNCUtj0p6eLTM8SBPq6255sbOANDajTH6rHcIAOsVUHxSYb18Ak5zO8e2RCyLg5ZT1erQ==');

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
