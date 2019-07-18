import React , {Component} from "react";
import MovieFilter from './MovieFilter';
import FilterRating from './filterrating';
import Movielist from './movielist';
import './App.css';


const inception={
    id:'inc',
    title:'inception' ,
    rating:'5',
    year:'2010',
    image:'https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg'
}
const shawshank={
    id:'shawshank ',
    title:'Shawshank redemption',
    rating:'5',
    year:'1994'
}
const prestige={
    id:'pres',
    title:'prestige',
    rating:'4',
    year:'2005'
}
const movieToDisplay=[inception,shawshank,prestige]
class  MovieApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            numstar:0,
            titlefilter:'',
            movies:movieToDisplay,
            
         }
    }
    addMovie(newmovie){
        this.setState({
            movies:this.state.movies.concat(newmovie)
        }
        
        )

    }
    delevent=(key)=>{
       this.setState ({movies:this.state.movies.filter(el=>el.id!==key)})
    }
    render() { 
        return ( <div className="movie-app">
        <header className="movie-app-header">
          <MovieFilter value={this.state.titlefilter} changeName={(newname)=>{this.setState({titlefilter:newname})}} />
          <FilterRating count={this.state.numstar} change={(rating)=>this.setState(
              {numstar:rating}
          )}  />
        </header>
        <main className="movie-app-main">
          <Movielist 
          movies= 
          {this.state.movies.filter(
              el=>
              el.rating>=this.state.numstar &&
              el.title.toLowerCase().includes(this.state.titlefilter.toLowerCase())
              )} 
              addMovie={(newmovie)=>this.addMovie(newmovie)}
              delevent={(key)=>this.delevent(key)}
              />
        </main>
      </div>  );
    }
}
 

 

export default MovieApp;
