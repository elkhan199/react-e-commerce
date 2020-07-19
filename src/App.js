import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch,Route, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {connect} from 'react-redux'
import {selectCurrentUser} from  './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import  CheckoutPage from './pages/checkout/checkout.component'
import {checkUserSession} from './redux/user/user.actions'

const App  = ({checkUserSession, currentUser}) => {
  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])

  return (
    <div >
      <Header />
        <Switch>
          <Route exact path = '/react-e-commerce/' component={HomePage} />
          <Route  path = '/react-e-commerce/shop' component={ShopPage} />
          <Route exact path = '/react-e-commerce/checkout' component={CheckoutPage}/>
          <Route exact path = '/react-e-commerce/signin' render={() => currentUser? (<Redirect to='/react-e-commerce/'/>):(<SignInAndSignUpPage/>)}/>
       </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
