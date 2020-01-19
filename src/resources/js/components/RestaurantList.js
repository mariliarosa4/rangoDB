import axios from 'axios'
import React, { Component } from 'react'
import ReactDOM from "react-dom";

class RestaurantList extends Component {

    constructor () {
        super()
        this.state = {
            restaurants: [],
            winner: {}
        }

        this.handleVoteInRestaurant = this.handleVoteInRestaurant.bind(this);


    }

    componentDidMount () {
        axios.get('/restaurants').then(response => {
            console.log(response);
            this.setState({
                restaurants: response.data.restaurants,
                winner: response.data.winner
            })
        })
            .catch(error => {
                console.log(error.response)
            });
    }
    handleVoteInRestaurant(event)
    {
        event.preventDefault()

        const { param } = event.target.dataset;
        console.log(param);

        const poll = {
            restaurantId: param
        }

        console.log(poll);

        axios.post('/poll',  { restaurantId: param})
            .then(response => {
                console.log(response)
                alert(response.data)
            })
            .catch(error => {
                console.log(error.response)
            });
    }



    render () {
        const { restaurants, winner } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        {winner.nameRestaurant != null ?
                            <div className='card'>
                                <div className='card-header'> Votação de hoje encerrada! </div>
                                <div className='card-body-bold'>O restaurante escolhido de hoje
                                    é {winner.nameRestaurant} </div>
                                <span> {winner.address} </span>
                                {winner.fl_veganFrendly == 1 ? <span> Vegan Frendly </span> : null}
                                {winner.fl_accessibility == 1 ? <span> Accessible </span> : null}
                                {winner.fl_vegetarianFrendly == 1 ? <span> Vegetarian Frendly </span> : null}

                            </div>

                            :
                            <div className='card'>
                                <div className='card-body'>
                                    <ul className='list-group list-group-flush'>
                                        {restaurants.map(restaurant => (
                                            <span className='text-bold'
                                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                                key={restaurant.id}
                                            >
                                            {restaurant.nameRestaurant}
                                                {restaurant.fl_veganFrendly == 1 ? <span> Vegan Frendly </span> : null}
                                                {restaurant.fl_accessibility == 1 ? <span> Accessible </span> : null}
                                                {restaurant.fl_vegetarianFrendly == 1 ? <span> Vegetarian Frendly </span> : null}
                                                <button
                                                    className='btn btn-primary btn-sm' data-param={restaurant.id}
                                                    onClick={this.handleVoteInRestaurant}
                                                >
                                                Vote!
                                            </button>
                                        </span>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantList

if (document.getElementById('restaurantList')) {
    ReactDOM.render(<RestaurantList />, document.getElementById('restaurantList'));
}