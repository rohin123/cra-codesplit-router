import React from 'react'
import RoutesWithSubRoutes from '../../helpers/routeswithsubroutes'
import { Link } from 'react-router-dom'

export default (props)=>{
  console.log(props);
  return (
    <div>
      <div>Hi Home</div>
      <div>
        <Link to='/home/childRoute1'>RouteChild1</Link>
        <Link to='/home/childRoute2'>RouteChild2</Link>
      </div>
      {props.routes.map((route)=> <RoutesWithSubRoutes {...route}/>)}
    </div>
  )
}

// export default ()=>(
//   <div>Hi Home</div>
// )
