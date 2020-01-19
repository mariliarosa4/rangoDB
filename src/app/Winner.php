<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Winner extends Model
{
    protected $table = 'winner';
    protected $fillable = ['restaurant_id'];

    public function restaurants()
    {
        return $this->hasMany(Restaurant::class);
    }
}
