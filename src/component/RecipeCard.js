import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class RecipeCard extends Component {

    render() {
        console.log(this.props)
        return (
            <Link to={`/${this.props.id}`}>
            <div className='recipe-box'>
                <div className="card" style={{width: "20rem"}}>
                    <img className="card-img-top" src={`https://foodrecipesapi.pythonanywhere.com${this.props.image}`} alt="Card image cap"  />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                        </div>
                </div>
            </div>
            </Link>
        )
    }
}

export default RecipeCard
