import React, {  useState , useEffect} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import Scroll from './Scroll'



function App () {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         serchFiled: ''
    //     }
    // }

    const [robots, setRobots] = useState([]);
    const [searchField , setSearchField] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(users => {

    //             this.setState({ robots: users })
    //         })
    // }

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users)
            })
    }, [])

    const onSearchChange = (event) => {
        setSearchField( event.target.value )

    }
        const filter = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        
        return (
            <div className="tc">
                <h1 className="f1">Robo-Friends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
    
                    <CardList robots={filter} />
    
                </Scroll>
            </div>
        )
    }

    
    


export default App;