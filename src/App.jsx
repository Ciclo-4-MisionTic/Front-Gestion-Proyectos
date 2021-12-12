import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
<<<<<<< HEAD
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
=======
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
import { setContext } from '@apollo/client/link/context';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import IndexUsuarios from 'pages/usuarios';
import EditarUsuario from 'pages/usuarios/editar';
<<<<<<< HEAD
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/auth/register';
import Login from 'pages/auth/login';
import { AuthContext } from 'context/authContext';
import IndexProyectos from 'pages/proyectos/Index';
import jwt_decode from 'jwt-decode';
import 'styles/globals.css';
import 'styles/tabla.css';
import NuevoProyecto from 'pages/proyectos/NuevoProyecto';
=======
import 'styles/globals.css';
import 'styles/tabla.css'
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/auth/register';
import Login from 'pages/auth/login';
import { AuthContext } from 'context/authContext';
import jwt_decode from 'jwt-decode';
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810

// import PrivateRoute from 'components/PrivateRoute';

const httpLink = createHttpLink({
<<<<<<< HEAD
  uri: 'http://localhost:4000/graphql',
});

=======
  uri: "https://codex-project1.herokuapp.com/graphql",
});

// const httpLink = createHttpLink({
//  uri: "http://localhost:4000/graphql",
// });


>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

<<<<<<< HEAD
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    console.log('set token', token);
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
=======

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
}) 

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState ('');

  const setToken = (token) =>{
    console.log('set token', token);
    setAuthToken(token)
    if(token){
      localStorage.setItem('token', JSON.stringify(token));
    }else{
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
=======
    if (authToken){
      const decode = jwt_decode(authToken);
      setUserData({
        _id: decode._id,
        nombre: decode.nombre,
        apellido: decode.apellido,
        indetificacion: decode.indetificacion,
        correo : decode.correo,
        rol: decode.rol,
      })
    }
  },[authToken]);

  return (
    <ApolloProvider client = {client}>
      <AuthContext.Provider value={{authToken, setAuthToken , setToken}}>
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PrivateLayout />}>
                <Route path='' element={<Index />} />
                <Route path='/usuarios' element={<IndexUsuarios />} />
                <Route path='/usuarios/editar/:_id' element={<EditarUsuario />} />
<<<<<<< HEAD
                <Route path='/proyectos' element={<IndexProyectos />} />
                <Route path='/proyectos/nuevo' element={<NuevoProyecto />} />
=======
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
                <Route path='page2' element={<Page2 />} />
                <Route path='category1' element={<IndexCategory1 />} />
                <Route path='category1/page1' element={<Category1 />} />
              </Route>
<<<<<<< HEAD
              <Route path='/auth' element={<AuthLayout />}>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
=======
              <Route path= "/auth" element={<AuthLayout/>} >
                <Route path='register' element={<Register/>}/>
                <Route path='login' element={<Login />}/>
>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
<<<<<<< HEAD
=======

>>>>>>> ea22bfaf3ad013aa6fed36d814d2533e1911c810
    </ApolloProvider>
  );
}

export default App;