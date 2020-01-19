<?php

namespace App\Http\Controllers;

use App\Restaurant;
use App\Winner;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Poll;
use Illuminate\Support\Facades\DB;
class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $restaurants = $this->getRestaurantsWithoutWinners();
        $restaurants->toJson();
        if (Carbon::now()->format('H:i:s') >= '18:30:00'){
            $winner = $this->showPollResult();
            $returnJson = array(
                "winner" => $winner,
                "restaurants"=> $restaurants);

        }else{
                $returnJson = array(
                "winner" => array(),
                "restaurants"=> $restaurants);
        }
        return json_encode($returnJson);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function showPollResult(){

        $votes = Poll::whereDate('created_at', Carbon::today())->groupBy('restaurant_id')->select('restaurant_id', DB::raw('count(*) as votes'))->orderBy('votes', 'DESC')->first();
        //TO-DO: em caso de empate fazer o que?
        if ($votes){
            $restaurant = Restaurant::find($votes['restaurant_id']);
            $this->saveWinner($restaurant->id);
            return $restaurant;
        }else{
            return array();
        }

    }
    public function saveWinner($id){
        $winner = new Winner([
            'restaurant_id' => $id
        ]);
        $winner->save();
    }


    public function getRestaurantsWithoutWinners(){

        $restaurants = DB::table('restaurant')
            ->select('*')
            ->whereNOTIn('id',function($query){
                $today = Carbon::now();
                $weekStartDate = $today->startOfWeek()->format("Y-m-d H:i:s");
                $weekEndDate = $today->endOfWeek()->format("Y-m-d H:i:s");
                $query->select('restaurant_id')->from('winner')->whereBetween('created_at', array($weekStartDate,$weekEndDate))
                    ->groupBy('restaurant_id');
            })
            ->get();

        return $restaurants;
    }
}
