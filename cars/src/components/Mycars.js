import React, { Component } from 'react';
import Car from './Cars'

class myCars extends Component{

    // voitures est un Tableau 
    state = {
        voitures: [
            {name:'Ford', color:'red', year: 2000},
            {name:'Mercedes', color:'black', year: 2010},
            {name:'Peugeot', color:'green', year: 2018}
        ],
        titre: 'Mon Catalogue voiture 2'
    }

    addTenYears = () => {
        // console.log('activé');
        // this.state.voitures[0].year += 1;Do not mutate state directly. Use setState()
        const updatedState = this.state.voitures.map((x) => {
            return x.year -= 10;
        })

        this.setState({
             updatedState
        })
    } 

    render(){

        const year = new Date().getFullYear();
        return(
            <div>               
                <h1>{this.state.titre}</h1>
                 
                 <button onClick={this.addTenYears}> + 10 ans</button>
               

                {
                    this.state.voitures.map((voiture, index) => {
                        return(
                            <div key={index}>
                                 <Car nom={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                            </div>
                        )
                    })
                }

            </div>         
        )
           
    }
}

export default myCars;