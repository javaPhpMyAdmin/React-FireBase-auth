import React from 'react';
import { AppRouter } from './components';
import AuthContextProvider from './contexts/AuthContext';

function App() {
   return (
      <AuthContextProvider>
         <AppRouter />
      </AuthContextProvider>
   );
}

export default App;
