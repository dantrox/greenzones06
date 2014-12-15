<?php

namespace Greenzones;

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;
use Laracasts\Commander\Events\EventGenerator;
use Codesleeve\Stapler\ORM\StaplerableInterface;
use Codesleeve\Stapler\ORM\EloquentTrait;
use Hash;

class User extends \Eloquent implements UserInterface, StaplerableInterface, RemindableInterface
{
	use UserTrait, RemindableTrait, EloquentTrait, EventGenerator;

	/**
	 * The database collection name for the User model
	 *
	 * @var string
	 */
	protected $collection = 'users';

	/**
	 * The fields allowed to be mass assigned
	 *
	 * @var array
	 */
	protected $fillable = ['avatar', 'email', 'password'];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = ['password', 'remember_token'];

	/**
	 * Initialize the User Model
	 *
	 * @param array $attributes
	 */
	public function __construct( array $attributes = array() )
	{
		$this->hasAttachedFile( 'avatar',
			array(
				'styles' => array(
					'medium' => '300x300',
					'thumb'  => '100x100',
				)
			)
		);

		parent::__construct( $attributes );
	}

	/**
	 * Passwords must always be hashed
	 *
	 * @param $password
	 */
	public function setPasswordAttribute( $password )
	{
		$this->attributes['password'] = Hash::make( $password );
	}
}
