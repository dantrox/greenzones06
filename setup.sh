#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" ; pwd )"

echo "\
<?php

return array(

	'MONGODB_HOST'     => 'localhost',
	'MONGODB_USERNAME' => 'homestead',
	'MONGODB_PASSWORD' => 'secret',
	'MONGODB_DATABASE' => 'greenzones',

	'MYSQL_HOST'       => 'localhost',
	'MYSQL_USERNAME'   => 'homestead',
	'MYSQL_PASSWORD'   => 'secret',
	'MYSQL_NAME'       => 'greenzones',

	'PGSQL_HOST'       => 'localhost',
	'PGSQL_USERNAME'   => 'homestead',
	'PGSQL_PASSWORD'   => 'secret',
	'PGSQL_NAME'       => 'greenzones',

	'SMTP_HOSTNAME'    => '',
	'SMTP_USERNAME'    => '',
	'SMTP_PASSWORD'    => '',
	'SMTP_PRETEND'     => true,

);
" | tee $DIR/.env.local.php > /dev/null 2>&1

echo "\
<?php

return array(

	'MONGODB_HOST'     => 'localhost',
	'MONGODB_USERNAME' => 'homestead',
	'MONGODB_PASSWORD' => 'secret',
	'MONGODB_DATABASE' => 'greenzones',

	'MYSQL_HOST'       => 'localhost',
	'MYSQL_USERNAME'   => 'homestead',
	'MYSQL_PASSWORD'   => 'secret',
	'MYSQL_NAME'       => 'greenzones',

	'PGSQL_HOST'       => 'localhost',
	'PGSQL_USERNAME'   => 'homestead',
	'PGSQL_PASSWORD'   => 'secret',
	'PGSQL_NAME'       => 'greenzones',

	'SMTP_HOSTNAME'    => '',
	'SMTP_USERNAME'    => '',
	'SMTP_PASSWORD'    => '',
	'SMTP_PRETEND'     => true,

);
" | tee $DIR/.env.testing.php > /dev/null 2>&1

command -v composer >/dev/null 2>&1 || { echo >&2 "I require composer (https://getcomposer.org/download/) but it's not installed.  Aborting."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo >&2 "I require npm (http://nodejs.org/) but it's not installed.  Aborting."; exit 1; }
command -v bower >/dev/null 2>&1 || { echo >&2 "I require bower (http://bower.io/#install-bower) but it's not installed.  Aborting."; exit 1; }
command -v grunt >/dev/null 2>&1 || { echo >&2 "I require grunt (http://gruntjs.com/getting-started) but it's not installed.  Aborting."; exit 1; }

composer update
bower install
npm install
grunt

echo "All done."
echo "Now run 'grunt watch' to auto-compile your scss/js as you develop."