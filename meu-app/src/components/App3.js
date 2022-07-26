import React from "react";

class App3 extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {nome:'', };
        this.changeName = this.changeName.bind(this);
    }
    changeName = function(event)
        {this.setState({nome: event.target.value})
    }
    render(){
        return(
            <div>
                Email:<input type="text" value ={this.state.nome}onChange={this.changeName}></input>
                <p>
                    Olá<br />{this.state.nome}</p>
                   
        
        </div>
    );
}
}


  
  export default App3;
  