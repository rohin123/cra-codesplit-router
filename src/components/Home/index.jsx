import React from 'react'
import RoutesWithSubRoutes from '../../helpers/routeswithsubroutes'
import { Link } from 'react-router-dom'

export default (props)=>{
  return (
    <section>
      <h2>Hi Home</h2>
      <div>
        <Link to='/home/childRoute1'>RouteChild1</Link>
        <Link to='/home/childRoute2'>RouteChild2</Link>
      </div>
      {props.routes.map((route)=> <RoutesWithSubRoutes {...route}/>)}
    </section>
  )
}
