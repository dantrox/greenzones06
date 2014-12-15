<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Third Party Services
	|--------------------------------------------------------------------------
	|
	| This file is for storing the credentials for third party services such
	| as Stripe, Mailgun, Mandrill, and others. This file provides a sane
	| default location for this type of information, allowing packages
	| to have a conventional place to find your various credentials.
	|
	*/

	'mailgun'  => array(
		'domain' => '',
		'secret' => '',
	),
	'mandrill' => array(
		'secret' => '',
	),
	'stripe'   => array(
		'model'  => 'User',
		'secret' => '',
	),
	'facebook' => array(
		'client_id'     => '',
		'client_secret' => '',
		'scope'         => array(
			'email',
			//'user_birthday',
			//'user_about_me',
			//'user_hometown',
			//'user_location',
		),
	),
	'linkedin' => array(
		'client_id'     => '',
		'client_secret' => '',
		'scope'         => array(
			'r_fullprofile',
			'r_emailaddress',
			'r_contactinfo',
		),

	),
);
