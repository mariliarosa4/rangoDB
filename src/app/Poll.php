<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
    protected $table = 'poll';
    protected $fillable = ['restaurant_id', 'user_id'];

    public function restaurants()
    {
        return $this->hasMany(Restaurant::class);
    }
}
