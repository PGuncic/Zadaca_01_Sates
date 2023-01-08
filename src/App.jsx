import { Component } from "react";
import Search from "./Search";

class App extends Component {
    
    state = {
        users: [
       {
       ime: 'Branko',
       prezime: 'Branković',
       dob: 32,
       },
       {
       ime: 'Janko',
       prezime: 'Janković',
       dob: 42,
       },
       {
       ime: 'Stanko',
       prezime: 'Stanković',
       dob: 52,
       },
       ],

       searchText: 'an'
    };

    render() {
        const { users, searchText } = this.state;
        const filteredUsers = users.filter(
          user => user.ime.includes(searchText) || user.prezime.includes(searchText)
        );

        return (
            <div>
              <Search text={searchText}/>
               {
                filteredUsers.map((user) => {
                    return <div>
                    <h1>Ime: {user.ime}</h1>
                    <h2>Prezime: {user.prezime}</h2>
                    <h3>Dob: {user.dob}</h3>
                </div>
                })
            }
            </div>
        );
    }
}

export default App;
