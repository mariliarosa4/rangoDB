<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $table = 'restaurant';

    protected $fillable = ['id','nameRestaurant', 'address',	'fl_accessibility',	'fl_veganFrendly',	'fl_vegetarianFrendly',	'priceScale'];


}
