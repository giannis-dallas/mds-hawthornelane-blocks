<?php

// Create Shortcode MDS-Team
// Use the shortcode: [MDS-Team name="" role="" image="" link=""]
function create_mdsteam_shortcode($atts) {
	// Attributes
	$atts = shortcode_atts(
		array(
			'name' => '',
			'role' => '',
			'image' => '',
			'link' => '',
		),
		$atts,
		'MDS-Team'
	);
	// Attributes in var
	$name = $atts['name'];
	$role = $atts['role'];
	$image_id = $atts['image'];
	$link = $atts['link'];

	$image = wp_get_attachment_image_src( $image_id );
	$href = vc_build_link( $link )['url'];
	echo '<pre>'; print_r($href); echo '</pre>';
	// Output Code
	$output = '<div class="team-member"><figure class="effect-team">';
	$output .= wp_get_attachment_image( $image_id, 'large' );
	$output .= '<a href="'.$href.'"></a>';
	$output .= '<figcaption>';
	$output .= '<h2><span class="team-name">'.$name.'</span><span class="team-role">'.$role.'</span></h2>';
	$output .= '<p><i class="fa fa-chevron-right"></i></p>';
	$output .= '</figcaption>';
	$output .= '</figure></div>';

	return $output;
}
add_shortcode( 'MDS-Team', 'create_mdsteam_shortcode' );

// Create mds-team element for Visual Composer
add_action( 'vc_before_init', 'mdsteam_integrateWithVC' );
function mdsteam_integrateWithVC() {
	vc_map( array(
		'name' => __( 'mds-team', 'textdomain' ),
		'base' => 'MDS-Team',
		'show_settings_on_create' => true,
		'category' => __( 'Content', 'textdomain'),
		'params' => array(
			array(
				'type' => 'textfield',
				'holder' => 'div',
				'class' => '',
				'admin_label' => true,
				'heading' => __( 'Name', 'textdomain' ),
				'param_name' => 'name',
				'description' => __( 'Add Name', 'textdomain' )
			),
			array(
				'type' => 'textfield',
				'holder' => '',
				'class' => '',
				'admin_label' => false,
				'heading' => __( 'Role', 'textdomain' ),
				'param_name' => 'role',
				'description' => __( 'Add Role', 'textdomain' )
			),
			array(
				'type' => 'attach_image',
				'holder' => '',
				'class' => '',
				'admin_label' => false,
				'heading' => __( 'Image', 'textdomain' ),
				'param_name' => 'image',
				'description' => __( 'Pick the image', 'textdomain' )
			),
			array(
				'type' => 'vc_link',
				'holder' => '',
				'class' => '',
				'admin_label' => false,
				'heading' => __( 'Link', 'textdomain' ),
				'param_name' => 'link',
			),
		)
	) );
}