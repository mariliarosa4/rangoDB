<?php

use Illuminate\Database\Seeder;
class RestaurantTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $namesRestaurants = ['Armazém do Sabor', 'Mc Donalds', 'Burguer King', 'Panorama', 'Vila Olimpica', "Palatu's"];
        foreach ($namesRestaurants as $namesRestaurant) {
            DB::table('restaurant')->insert([
                'nameRestaurant' => $namesRestaurant,
                'address' => Str::random(10),
                'fl_accessibility' => rand(0, 1),
                'fl_veganFrendly' => rand(0, 1),
                'fl_vegetarianFrendly' => rand(0, 1),
                'priceScale' => rand(1, 5),
            ]);
        }
    }
}
