import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Category from './Category'
import Subcategory from './Subcategory'
import Document from './Document'

import Error from 'features/layout/Error'

import pepegastatic from 'features/layout/Sidebar/components/SidebarStatic'

/**
 * main content of the application
 */
const Container = () => {
  return (
    <content>
      <Switch>
        <Route path='/legal' exact component={pepegastatic}/>
        <Route path="/:category" exact component={Category}/>
        <Route path="/:category/:subcategory" exact component={Subcategory}/>
        <Route path="/:category/:subcategory/:document" exact component={Document}/>
        <Route path="*" component={Error}/>
      </Switch>
    </content>
  )
}

export default Container
