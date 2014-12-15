<?php

use Laracasts\Commander\CommanderTrait;

class BaseController extends Controller
{
	// use the command bus
	use CommanderTrait;

	/**
	 * The layout used by the controller.
	 *
	 * @var \Illuminate\View\View
	 */
	protected $layout = 'layouts.default';

	/**
	 * Create a new BaseController instance.
	 *
	 * @return \BaseController
	 */
	public function __construct()
	{
		//$this->beforeFilter( 'csrf', ['on' => 'post'] );

		$this->beforeFilter( function () {
				Event::fire( 'clockwork.controller.start' );
			}
		);

		$this->afterFilter( function () {
				Event::fire( 'clockwork.controller.end' );
			}
		);
	}

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if( ! is_null( $this->layout ) ) {
			$this->layout = View::make( $this->layout );
		}

		View::share( 'currentUser', Auth::user() );
	}
}
