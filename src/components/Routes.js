import React, { useContext } from 'react'
import { Switch } from 'react-router-dom'
import Blogpage from '../Pages/Blogpage/Blogpage'


export default function Route() {


    return (
      

                <Switch>

                
                <Route path="/blogPage" component={Blogpage} />
                

                </Switch>
          
    )
}