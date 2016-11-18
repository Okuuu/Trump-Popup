<?php
/*
Plugin Name: Plugin which countdown the end of the mandate of Donald J Trump
Plugin URI:  https://developer.wordpress.org/plugins/the-basics/
Description: This plugin will display a countdown which display for how long our dear fellow americans have to deal with Donald Trump, just a stupid feature, don't take it too seriously ;p
Version:   000000001
Author:    Robin Mesa Marin
Author URI:  https://developer.wordpress.org/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: wporg
Domain Path: /plugin1/plugin1.php
*/

defined( 'ABSPATH' )
or die ( 'No direct load !' );

define( 'PLUGINTRUMP', plugin_dir_url( __FILE__ ) );
define( 'PLUGINTRUMP_VERSION', '0.1' );

function _trumpPlugin_enqueue_scripts(){
    wp_enqueue_script( 'pluginTrump', PLUGINTRUMP . 'js/trumpCountdown.js', [ 'jquery-ui-dialog' ], PLUGINTRUMP_VERSION, true );
    wp_enqueue_style( 'wp-jquery-ui-dialog' );
}
add_action( 'wp_enqueue_scripts', '_trumpPlugin_enqueue_scripts' );
