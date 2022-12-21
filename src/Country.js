import { Component } from "react";
import check from './check.png';

export class Country extends Component {
    
    state = {
        userInput: '',
        countryList: []
    }
    onChangeEvent(e) {
        this.setState({userInput: e});
    }
    addItem(input) {
        if (input === ''){
            alert('Please enter a country')
        }
        else {
            let listArray = this.state.countryList;
            listArray.push(input);
            this.setState({countryList: listArray, userInput: ''})
        }
    }
    deleteItem() {
        let listArray = this.state.countryList;
        listArray = [];
        this.setState({countryList: listArray})
    }

    crossedWord(event) {
        const li =event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="Enter a сountry..."
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                </div>
                <ul>{this.state.countryList.map((item,index)=> (<li onClick={this.crossedWord} key={index}>
                    <img src={check} width='24px' alt='check'/>
                    {item}</li>))}
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
            </form>
        )
    }
}