@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Welcome to RangoDB</div>
                <div id="demo"></div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                        Vote on your favorite restaurant to lunch today! At 11:30 a.m. the winner will be revealed!
                        <div id="restaurantList"></div>
                    <div id="login"></div>

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
