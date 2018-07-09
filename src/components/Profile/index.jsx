import React from 'react'
import RoutesWithSubRoutes from '../../helpers/routeswithsubroutes'
import { Link } from 'react-router-dom'
import Loadable from 'react-loadable';

const AsyncComponent = Loadable({
    loader: () => import(/* webpackChunkName: "myNamedChunk1" */ './SomeOtherComponent'),
    loading: () => <div>loading...</div>,
    modules: ['myNamedChunk1'],
});

export default (props)=>(
  <div>
    <div>Hi Profile</div>
    <AsyncComponent/>
    <div>
      <Link to='/profile/childRoute1'>RouteChild1</Link>
      <Link to='/profile/childRoute2'>RouteChild2</Link>
    </div>
    {props.routes.map((route)=> <RoutesWithSubRoutes {...route}/>)}
  </div>
)
