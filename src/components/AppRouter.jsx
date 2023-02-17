import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
   useLocation,
} from 'react-router-dom';
import { useAuth } from '../contexts';
import {
   Homepage,
   Loginpage,
   NotfoundPage,
   ForgotPasswordPage,
   Profilepage,
   Registerpage,
   TestPage,
} from '../pages';

export function AppRouter() {
   //const homePageTest = ''
   const homePageProduction = '/react-project-test';
   return (
      <>
         <Router>
            <Switch>
               <Route exact path={homePageProduction} component={Homepage} />
               <ProtectedRoute
                  exact
                  path={homePageProduction + '/login'}
                  component={Loginpage}
               />
               <ProtectedRoute
                  exact
                  path={homePageProduction + '/register'}
                  component={Registerpage}
               />
               <ProtectedRoute
                  exact
                  path={homePageProduction + '/profile'}
                  component={Profilepage}
               />
               <ProtectedRoute
                  exact
                  path={homePageProduction + '/protected-page'}
                  component={TestPage}
               />
               <ProtectedRoute
                  exact
                  path={homePageProduction + '/forgot-password'}
                  component={ForgotPasswordPage}
               />
               {/* <ProtectedRoute */}
               {/* exact */}
               {/* path={homePageProduction + '/reset-password'} */}
               {/* component={ResetPasswordPage} */}
               {/* /> */}
               <Route exact path="*" component={NotfoundPage} />
            </Switch>
         </Router>
      </>
   );
}

function ProtectedRoute(props) {
   const { currentUser } = useAuth();
   const { path } = props;
   const location = useLocation();
   const homePageProduction = '/react-project-test';

   if (
      path === homePageProduction + '/login' ||
      path === homePageProduction + '/register'
   ) {
      return currentUser ? (
         <Redirect
            to={location.state?.from ?? homePageProduction + '/profile'}
         />
      ) : (
         <Route {...props} />
      );
   }
   return currentUser ? (
      <Route {...props} />
   ) : (
      <Redirect
         to={{
            pathname: homePageProduction + '/login',
            state: { from: path },
         }}
      />
   );
}
