import React from 'react'
import { Route } from 'react-router-dom'

const routesWithSubRoutes = (config)=>{
  return <Route path = { config.path }
                exact = { config.exact }
                render = {(props)=>(
                  <config.component {...props}
                                      routes = {config.routes}/>
                )}/>
}

export default routesWithSubRoutes
