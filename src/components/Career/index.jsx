import React from 'react'
import RoutesWithSubRoutes from '../../helpers/routeswithsubroutes'
import { Link } from 'react-router-dom'

export default class Career extends React.Component{
  render(){
    let props = this.props
    return <section>
      <h2>Hi Career</h2>
      <div>
        <Link to='/career/childRoute1'>RouteChild1</Link>
        <Link to='/career/childRoute2'>RouteChild2</Link>
      </div>
      {props.routes.map((route)=> <RoutesWithSubRoutes {...route}/>)}
    </section>
  }
}
