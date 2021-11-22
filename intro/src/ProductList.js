import React, { Component } from "react" 


export default class ProductList extends Component{
     // constructor(props){
     //      super(props);
     //      state:{}
     // }
     render(){
          return(
               <div>
                  <h2>{this.props.info.title}-{this.props.currentCategory}</h2>  
               </div>
          )
     }

}