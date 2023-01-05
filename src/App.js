import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import Scroll from './Scroll'



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            serchFiled: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {

                this.setState({ robots: users })
            })
    }

    onSearchChange = (event) => {
        this.setState({ serchFiled: event.target.value })



    }

    render() {
        const filter = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.serchFiled.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">Robo-Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>

                    <CardList robots={filter} />

                </Scroll>
            </div>
        )
    }
}

export default App;