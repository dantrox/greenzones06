<!--[if IE ]><![endif]--><!DOCTYPE html><!--[if lt IE 8 ]>
<html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]--><!--[if IE 8 ]>
<html class="no-js lt-ie9" lang="en"> <![endif]--><!--[if (gt IE 8)|!(IE)]><!-->
<html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title>Greenzones</title>

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, maximum-scale=1.0">

	<meta name="robots" content="noindex, nofollow">
	<meta name="description" content="Greenzones is a global network linking charities to professionals, companies, the public, and each other.">
	<meta name="author" content="Paul Ryley - http://geminilabs.io">
	<meta name="designer" content="Paul Ryley - http://geminilabs.io">
	<meta name="keywords" content="">

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@greenzonesorg">
	<meta name="twitter:creator" content="@greenzonesorg">
	<meta name="twitter:title" content="Greenzones">
	<meta name="twitter:description" content="Greenzones is a global network linking charities to professionals, companies, the public, and each other.">
	<meta name="twitter:image:src" content="{{ '/assets/img/gz_square.png' }}">

	<link rel="author" type="text/plain" href="humans.txt">
	<link rel="icon" type="images/x-icon" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Raleway:300,400,500,600">

	<!--[if (gt IE 8) | (IEMobile)]><!-->
	{{ HTML::style( '/assets/css/style.css' ) }}
	<!--<![endif]--><!--[if (lt IE 9) & (!IEMobile)]>
	{{ HTML::style( '/assets/css/ie.css' ) }}
	<![endif]--><!--[if lt IE 9]>
	<script src='http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js'></script>
	<![endif]-->

	{{ HTML::script( '/assets/js/1.min.js' ) }}

	@yield( 'head' )
</head>
<body>

<!--[if lt IE 8]>
<div class='browsehappy'>
	<p>You are using an <strong>outdated</strong> browser.<br>Please <a href="http://whatbrowser.org/">upgrade your browser</a> to view this website.</p>
</div><![endif]-->

<div id="skrollr-body"></div>

{{--@include( 'flash::message' )--}}

@include( 'layouts.partials.header' )
@include( 'layouts.partials.nav' )

<main role="main" data-0="top:100%; margin-top:0px;" data-_one="top:0%; margin-top: 60px;">
	@yield( 'content' )
</main>

@include( 'layouts.partials.footer' )

{{ HTML::script( '/assets/js/jquery.min.js' ) }}
{{ HTML::script( '/assets/js/2.min.js' ) }}
<!--[if lt IE 9]>
{{ HTML::script( '/assets/js/ie.min.js' ) }}
<![endif]-->

@yield( 'footer_scripts' )

</body>
</html>
