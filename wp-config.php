<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portfolio' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4wo)+;Z!zz+OdDOHO*8RXyXI{9wai!5=pDZP=cjPJbnwQi~YysE/vlyuHKh&A!`^' );
define( 'SECURE_AUTH_KEY',  'S4&8r0tGt|gMj#`Q<bLxEmj`4nUWv^2WK1Cv#l6edl[9}dT?s(pf;Hi(3^=6u[%M' );
define( 'LOGGED_IN_KEY',    'J)%A`,k` k4d,~h3%R[kawD7/.^pg9DllKwWr#[9Elm ]ma@d> NMWbU.Fuh)a:Y' );
define( 'NONCE_KEY',        'sys6}q!_(Kz[J[TEO6C;W%W-/x?Wx:SqDq*zCx*DE6R2VM%|8ln[+LwV$ #,]Su ' );
define( 'AUTH_SALT',        'Q(I=e{~!;ZtSU6UD7cik/|[(cCagN%w(0!iJ0K|drgNDZ_O5!k_o+U;s+i17Uek,' );
define( 'SECURE_AUTH_SALT', '0,>lX@W89M)#Te?Vq+1F>J[>un}8V?NI/1ex$zIN!#}PG$>O<qS>K$Q[pwW&{(uZ' );
define( 'LOGGED_IN_SALT',   'voh,VEieI9$|1%9RM@sQ$wn{I{7NFKuVZPqq=Ql]!2RA)nDtXxT%>HKg{#>-;B#C' );
define( 'NONCE_SALT',       '3z*5!v2El-zOlTnC=0z Iz?J(hMk=v5e0Bc?a9r!UM`4V3nzY]gV)S+`>#QwO^{c' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'SURECART_ENCRYPTION_KEY', 'J)%A`,k` k4d,~h3%R[kawD7/.^pg9DllKwWr#[9Elm ]ma@d> NMWbU.Fuh)a:Y' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
