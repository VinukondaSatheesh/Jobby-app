import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import LoginForm from './LoginForm'
import ProtectedRoute from './ProtectedRoute'
import NotFound from './NotFound'
import JobsSection from './Jobs'
import JobItemDetails from './JobItemDetails'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={JobsSection} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
