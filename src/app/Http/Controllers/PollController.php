<?php

namespace App\Http\Controllers;

use App\Poll;
use App\Restaurant;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\ErrorHandler\Error\UndefinedFunctionError;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
class PollController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//
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
        $userId = Auth::user();

        $voted = $this->verifyIfVotedToday($userId->id);

        if ($voted){
            $return = "You already voted today!";
        }else{

            $poll = Poll::create([
                'restaurant_id' =>   $request['restaurantId'],
                'user_id' => $userId->id
            ]);

            $return = "Thank you for your vote!";
        }

        return response()->json($return);
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

    private function verifyIfVotedToday($user)
    {

        $poll = Poll::where('user_id', $user)->whereDate('created_at', Carbon::today('America/Sao_Paulo'))->first();
        return $poll;

    }
}
