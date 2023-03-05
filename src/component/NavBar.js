import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {


  constructor(props){
    super(props);
    this.state  = {
      search : ""
    }
  }


  handalSubmit = (event)=>{
    event.preventDefault();

    this.props.searchRecipes(this.state.search);

  }

  handalChange = (event)=>{
    this.setState({...this.state, [event.target.name]:event.target.value});
  }

  handalHomeClick = ()=>{
    this.props.getAllRecipes();
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" onClick={this.handalHomeClick} >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
      
      </ul>
      <form className="d-flex" role="search" onSubmit={this.handalSubmit}>
        <input className="form-control me-2" name='search' type="search" placeholder="Search" value={this.state.search} onChange={this.handalChange} aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}

export default NavBar
