/*jshint unused:false, bitwise:false, -W086 */

var z = jQuery.noConflict();

/* Functions ------------------------------------------ */

/* ajax call */

function ajaxFunc( event, url, btn, data, form, func )
{
	event.preventDefault();

	form.find( '.error' ).removeClass( 'error' );
	form.find( '.form-error' ).remove();

	if( ! btn.is( ':disabled' ) ) {
		btn.prop( 'disabled', true );
		z.ajax({
			url      : url,
			type     : 'POST',
			dataType : 'json',
			cache    : false,
			data     : data
		}).done( func );
	}
}

/* magnific-popup based alert dialog */

function alertDialog( title, msg, more, status, btn, callbacks )
{
	title  = title || 'Hello';
	msg    = msg || '';
	more   = more || '';
	status = status || '';
	btn    = btn || 'Okay';

	if( typeof callbacks === 'undefined' ) {
		callbacks = {};
	}

	z.magnificPopup.open({
		type: 'inline',
		items: {
			src: "<div class='dialog-popup mfp-with-anim cf'>" + more + "<div class='pad'><strong class='" + status + "'>" + title + "</strong><p>" + msg + "</p></div></div>"
		},
		removalDelay: 500,
		mainClass: 'mfp-zoom-in',
		//mainClass: 'mfp-move-horizontal',
		//mainClass: 'mfp-move-from-top',
		//mainClass: 'mfp-3d-unfold',
		//mainClass: 'mfp-zoom-out',
		closeMarkup: "<button class='mfp-close'>" + btn + "</button>",
		closeOnBgClick: false,
		callbacks: callbacks
	});
}

/* cookie *

/* serialise for php *

function phpSerialize( mixed_value )
{
	// http://kevin.vanzonneveld.net
	// +   original by: Arpad Ray (mailto:arpad@php.net)
	// +   improved by: Dino
	// +   bugfixed by: Andrej Pavlovic
	// +   bugfixed by: Garagoth
	// +      input by: DtTvB (http://dt.in.th/2008-09-16.string-length-in-bytes.html)
	// +   bugfixed by: Russell Walker (http://www.nbill.co.uk/)
	// +   bugfixed by: Jamie Beck (http://www.terabit.ca/)
	// +      input by: Martin (http://www.erlenwiese.de/)
	// +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
	// +   improved by: Le Torbi (http://www.letorbi.de/)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net/)
	// +   bugfixed by: Ben (http://benblume.co.uk/)
	// %          note: We feel the main purpose of this function should be to ease the transport of data between php & js
	// %          note: Aiming for PHP-compatibility, we have to translate objects to arrays
	// *     example 1: serialize(['Kevin', 'van', 'Zonneveld']);
	// *     returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
	// *     example 2: serialize({firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'});
	// *     returns 2: 'a:3:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";s:7:"surName";s:9:"Zonneveld";}'
	var val, key, okey,
		ktype = '', vals = '', count = 0,
		_utf8Size = function (str) {
			var size = 0,
				i = 0,
				l = str.length,
				code = '';
			for (i = 0; i < l; i++) {
				code = str.charCodeAt(i);
				if (code < 0x0080) {
					size += 1;
				}
				else if (code < 0x0800) {
					size += 2;
				}
				else {
					size += 3;
				}
			}
			return size;
		},
		_getType = function (inp) {
			var match, key, cons, types, type = typeof inp;

			if (type === 'object' && !inp) {
				return 'null';
			}
			if (type === 'object') {
				if (!inp.constructor) {
					return 'object';
				}
				cons = inp.constructor.toString();
				match = cons.match(/(\w+)\(/);
				if (match) {
					cons = match[1].toLowerCase();
				}
				types = ['boolean', 'number', 'string', 'array'];
				for (key in types) {
					if (cons === types[key]) {
						type = types[key];
						break;
					}
				}
			}
			return type;
		},
		type = _getType(mixed_value)
	;

	switch (type) {
		case 'function':
			val = '';
			break;
		case 'boolean':
			val = 'b:' + (mixed_value ? '1' : '0');
			break;
		case 'number':
			val = (Math.round(mixed_value) === mixed_value ? 'i' : 'd') + ':' + mixed_value;
			break;
		case 'string':
			val = 's:' + _utf8Size(mixed_value) + ':"' + mixed_value + '"';
			break;
		case 'array': case 'object':
			val = 'a';
			//if (type === 'object') {
			//	var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
			//	if (objname == undefined) {
			//		return;
			//	}
			//	objname[1] = this.serialize(objname[1]);
			//	val = 'O' + objname[1].substring(1, objname[1].length - 1);
			//}

			for (key in mixed_value) {
				if (mixed_value.hasOwnProperty(key)) {
					ktype = _getType(mixed_value[key]);
					if (ktype === 'function') {
						continue;
					}

					okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
					vals += this.phpSerialize(okey) + this.phpSerialize(mixed_value[key]);
					count++;
				}
			}
			val += ':' + count + ':{' + vals + '}';
			break;
		case 'undefined':
			// Fall-through
		default:
			// if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
			val = 'N';
			break;
	}
	if (type !== 'object' && type !== 'array') {
		val += ';';
	}
	return val;
}

/* encode string to base64 *

function base64Encode( data )
{
	// http://kevin.vanzonneveld.net
	// +   original by: Tyler Akins (http://rumkin.com)
	// +   improved by: Bayron Guevara
	// +   improved by: Thunder.m
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   bugfixed by: Pellentesque Malesuada
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +   improved by: Rafał Kukawski (http://kukawski.pl)
	// *     example 1: base64_encode('Kevin van Zonneveld');
	// *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
	// mozilla has this native
	// - but breaks in 2.0.0.12!
	//if (typeof this.window['btoa'] === 'function') {
	//    return btoa(data);
	//}
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		ac = 0,
		enc = "",
		tmp_arr = [];

	if (!data) {
		return data;
	}

	do { // pack three octets into four hexets
		o1 = data.charCodeAt(i++);
		o2 = data.charCodeAt(i++);
		o3 = data.charCodeAt(i++);

		bits = o1 << 16 | o2 << 8 | o3;

		h1 = bits >> 18 & 0x3f;
		h2 = bits >> 12 & 0x3f;
		h3 = bits >> 6 & 0x3f;
		h4 = bits & 0x3f;

		// use hexets to index into b64, and append result to encoded string
		tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	} while (i < data.length);

	enc = tmp_arr.join('');

	var r = data.length % 3;

	return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}

/* */
