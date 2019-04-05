/**
 * BLOCK: mds-hawthornelane
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Button, TextControl } = wp.components;
const { MediaUpload, URLInput } = wp.editor;

/**
 * Register: a Gutenberg Block.
 */
registerBlockType( 'cgb/block-mds-hawthornelane-team', {
	title: __( 'Team member' ),
	icon: 'admin-users',
	category: 'common',
	keywords: [
		__( 'mds-hawthornelane — CGB Block' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		imageURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		imageID: {
			type: 'number',
			default: null,
		},
		imageAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
		name: {
			type: 'string',
			source: 'html',
			selector: '.team-name',
		},
		role: {
			type: 'string',
			source: 'html',
			selector: '.team-role',
		},
		url: {
			type: 'string',
		},
	},

	edit( { attributes, setAttributes, className } ) {

		let { imageAlt,imageID,imageURL,name,role,url } = attributes;

		function onSelectMedia( img ) {
			console.log(img);
			setAttributes( {
				imageURL: img.url,
				imageAlt: img.filename,
				imageID: img.id,
			} );
		}

		return (
			<div className={ className }>

				<MediaUpload
					onSelect={ onSelectMedia }
					type="image"
					value={ imageID}
					render={ ( { open } ) => (
						<Button className="button" onClick={ open }>
							Open Media Library
						</Button>
					) }
				/>

				<TextControl
					label='Name'
					value={ name }
					onChange={ ( name ) => setAttributes( { name } ) }
				/>

				<TextControl
					label='Role'
					value={ role }
					onChange={ ( role ) => setAttributes( { role } ) }
				/>

				<URLInput
					className={ className }
					value={ attributes.url }
					onChange={ ( url ) => setAttributes( { url } ) }
				/>

				<div className="team-member">
					<figure className="effect-team">
						<a href={ url }></a>
						{imageURL && <img src={imageURL}  alt={imageAlt} /> }
						<figcaption>
							<h2><span className="team-name">{ name }</span><span className="team-role">{role}</span></h2>
							<p><i class="fa fa-chevron-right"></i></p>
						</figcaption>
					</figure>
				</div>
			</div>
		);
	},

	save( {attributes,className} ) {

		let {imageURL,imageAlt,imageID,name,role,url} = attributes;		

		return (
			<div className="team-member">
				<figure className="effect-team">
					<a href={ url }></a>
					{imageURL && <img src={imageURL}  alt={imageAlt} className={ imageID ? `wp-image-${ imageID }` : null } /> }
					<figcaption>
						<h2><span className="team-name">{ name }</span><span className="team-role">{role}</span></h2>
						<p><i class="fa fa-chevron-right"></i></p>
					</figcaption>
				</figure>
			</div>
		);
	},
} );
