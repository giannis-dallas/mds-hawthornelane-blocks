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

const { MediaPlaceholder, RichText } = wp.editor;

/**
 * Register: aa Gutenberg Block.
 */
registerBlockType( 'cgb/block-mds-hawthornelane-hover', {
	title: __( 'Hover Effect' ), 
	icon: 'format-image', 
	category: 'common', 
	keywords: [
		__( 'hover effect' ),
		__( 'CGB Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
        theTitle: {
            type: 'string',
            source: 'html',
			selector: '.text-title',
		},
		imageSRC:{
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		},
		theDescription: {
			type: 'string',
            source: 'html',
			selector: '.text-desc',
		}
    },

	edit( { attributes, setAttributes, className } ) {

		let {imageSRC,theTitle,theDescription} = attributes;

		function selectImage(e) {
			console.log(e);
			setAttributes({
				imageSRC: e.url
			})
		}

		function onChangeTitle(value) {
			console.log(value);
			setAttributes({
				theTitle: value
			})
		}

		function onChangeDesc(value) {
			console.log(value);
			setAttributes({
				theDescription: value
			})
		}

		return (
			<div className={ className }>				
				<MediaPlaceholder
					onSelect = {selectImage}
					allowedTypes = { [ 'image' ] }
					multiple = { false }
					labels = { { title: 'The Image' } }
				/>
				<label>Add the title</label>
				<RichText
					format="string"
					tagName="h2"
					formattingControls={ [] }
					onChange={ onChangeTitle }
					value={ theTitle }
				/>
				<label>Add the description</label>
				<RichText
					format="string"
					tagName="p"
					formattingControls={ [] }
					onChange={ onChangeDesc }
					value={ theDescription }
				/>				
				
				<div className="hover-effect">

					<figure className="effect-animate-border.active">
						{imageSRC && <img src={imageSRC} alt="img"/>}
						<figcaption>
							<RichText.Content tagName="h2" value={ theTitle } />
							<RichText.Content tagName="p" value={ theDescription } />
						</figcaption>			
					</figure>

				</div>
			</div>
		);
	},

	save( {attributes,className} ) {

		let {imageSRC,theTitle,theDescription} = attributes;

		return (
			<div>
				<div className="hover-effect">

					<figure className="effect-animate-border">
						{imageSRC && <img src={imageSRC} alt="img"/>}
						<figcaption>
							<RichText.Content className= "text-title" tagName="h2" value={ theTitle } />
							<RichText.Content className="text-desc" tagName="p" value={ theDescription } />
						</figcaption>			
					</figure>

				</div>
			</div>
		);
	},
} );