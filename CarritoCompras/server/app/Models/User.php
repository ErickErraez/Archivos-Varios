<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
       'name','apellido','email','password','api_token',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
      'password',
    ];

    function Products()
    {
       return $this->hasMany('App\Product');
    }

    function Orders()
    {
       return $this->hasMany('App\Order');
    }

}