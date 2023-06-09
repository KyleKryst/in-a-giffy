import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/Signup';
import Search from './pages/Search';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  }); 

  function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Routes>
              <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/Login" 
                element={<Login />}
              />
              <Route 
                path="/Logout" 
                element={<Logout />}
              />
              <Route 
                path="Signup"
                element={<SignUp />}
              />
              <Route 
                path="Search"
                element={<Search />}
              />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
  
  export default App;