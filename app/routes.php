<?php

/*
|--------------------------------------------------------------------------
| Event listeners
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/

Route::group( [],
    function () {

        Route::get( '/',
            array(
                'as'   => 'home',
                'uses' => 'PageController@home'
            )
        );
    }
);
