<?php
/**
 * Plugin Name: MDS Design Blocks for Hawthornelane 
 * Plugin URI: http://www.mosaicdataservices.com
 * Description: DO NOT DEACTIVATE - Mosaic Data Services HawthorneLane Blocks Plugin.
 * Version: 2.2.0
 * Author:      Mosaic Data Services, Dallas G.
 * Author URI:  http://www.mosaicdataservices.com
 * License:     Propietary
 * License URI: http://www.mosaicdataservices.com
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'wpbakery.php';