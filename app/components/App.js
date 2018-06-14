var React = require('react')
var Popular = require('./Popular')
var ReactRouter = require('react-router-dom')
var Nav = require('./Nav')
var Home = require('./Home')
var Battle = require('./Battle')
var Results = require('./Results')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

class App extends React.Component {
    render(){
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/popular' component={Popular}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/battle/results' component={Results}/>
                        <Route render={()=> {
                            return (
                                <p>404 Not Found</p>
                            )
                        }} />
                    </Switch>
                </div>
            </Router>
            
        )
    }
}

module.exports = App;