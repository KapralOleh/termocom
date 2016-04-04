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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'termocom');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'vodoley14');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'x*=Ai5=+#br,R*$jRwor2c^^;#{84zfrC~]_xI*yxF6Uun(yJnjp@ofR-^8];%[e');
define('SECURE_AUTH_KEY',  'd rwgpOs@1y1Jr oz(_)&=~~6^74[YjJbG{Xf$X$^}};XJB(XQrBF4Fl2=?}+.S7');
define('LOGGED_IN_KEY',    'jmw@@i5rWAo|(uK7Ho}_LZh5_Z-68Xa~AuM5MI]a (*2mlwydT&~,-jG3=;~!.XS');
define('NONCE_KEY',        '1s_@h]pvH%p0wE@n)ge},DqPUBX]2jf]UP9hiww#rW0zQ?{7AEAyLLLx+}T?vZB)');
define('AUTH_SALT',        'Ay/F*i]v|%5=P)*-L5MO0?lvxc+B_F*O@@L4:48L>,hT`wa8,{:$7OR{ERlRs4[X');
define('SECURE_AUTH_SALT', 'MRXa:/|RAGmSpf?[5frc7;}F0zN!7bM{oZBv,o:E%#8h|!}]^!pmPDW5(V:} N9r');
define('LOGGED_IN_SALT',   'bICLonR>R3S^nG3..t|(8ynf[KZZ`,Jud4uxces.6@cY$o0y!@{l3s,H5NxdXXpu');
define('NONCE_SALT',       '`?L,!Fx,#vSP4Hf_Pi_C5LwZI*4Il%^PZ$aS*^toWY@Loa3Ogb,U[ic#KmX-)-y[');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
