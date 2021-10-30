import React, {Component} from 'react';
import Categories from './Categories';

const url = 'https://edumato977.herokuapp.com/category';

class Categoryapi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Categorieslist:""
        }
    }

    render(){

        return (
            <div>
            <Categories categorylist={this.state.Categorieslist}/>
            </div>
        )
        
    }

    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) =>{
            this.setState({Categorieslist: data});
        })
    
    }
}

export default Categoryapi
