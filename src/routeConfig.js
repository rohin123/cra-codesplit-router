import App from './App.js'
import Home from './components/Home'
import Career from './components/Career'
import Profile from './components/Profile'
import ChildRoute1 from './components/ChildRoute1'
import ChildRoute2 from './components/ChildRoute2'

/*export default [
  {
    path: '/',
    component: App ,
    exact: true
  },
  {
    path: '/home',
    component: Home ,
    routes: [
      {
        path: '/home/childRoute1',
        component: ChildRoute1 ,
        exact: true
      },
      {
        path: '/home/childRoute2',
        component: ChildRoute2 ,
        exact: true
      }
    ],
    exact: false
  },
  {
    path: '/career',
    component: Career ,
    routes: [
      {
        path: '/career/childRoute1',
        component: ChildRoute1 ,
        exact: true
      },
      {
        path: '/career/childRoute2',
        component: ChildRoute2 ,
        exact: true
      }
    ],
    exact: false
  },
  {
    path: '/profile',
    component: Profile ,
    routes: [
      {
        path: '/profile/childRoute1',
        component: ChildRoute1 ,
        exact: true
      },
      {
        path: '/profile/childRoute2',
        component: ChildRoute2 ,
        exact: true
      }
    ],
    exact: false
  }
]
*/


export default [
  {
    path: '/',
    component: App ,
    exact: false,
    routes: [
      {
        path: '/home',
        component: Home ,
        routes: [
          {
            path: '/home/childRoute1',
            component: ChildRoute1 ,
            exact: true
          },
          {
            path: '/home/childRoute2',
            component: ChildRoute2 ,
            exact: true
          }
        ],
        exact: false
      },
      {
        path: '/career',
        component: Career ,
        routes: [
          {
            path: '/career/childRoute1',
            component: ChildRoute1 ,
            exact: true
          },
          {
            path: '/career/childRoute2',
            component: ChildRoute2 ,
            exact: true
          }
        ],
        exact: false
      },
      {
        path: '/profile',
        component: Profile ,
        routes: [
          {
            path: '/profile/childRoute1',
            component: ChildRoute1 ,
            exact: true
          },
          {
            path: '/profile/childRoute2',
            component: ChildRoute2 ,
            exact: true
          }
        ],
        exact: false
      }
    ]
  }]
