import React from 'react'
import RoutesWithSubRoutes from '../../helpers/routeswithsubroutes'
import { Link } from 'react-router-dom'

export default class Career extends React.Component{
  componentDidMount(){
      import('../ChildRoute1')
  }

  render(){
    let props = this.props
    return <div>
      <div>Hi Career</div>
      <div>
        <Link to='/career/childRoute1'>RouteChild1</Link>
        <Link to='/career/childRoute2'>RouteChild2</Link>
      </div>
      `Career routes ${props.routes.length}`
      {props.routes.map((route)=> <RoutesWithSubRoutes {...route}/>)}
    </div>
  }
}
