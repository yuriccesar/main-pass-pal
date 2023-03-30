import React from 'react'
// import Header from "../components/Header/Header"
// import Services from "../components/Services/Services"

import "../pages/index.css";

import { Dynamic } from 'gatsby-plugin-federation'

const RemoteModule = Dynamic(() => import('passPal/Home'))

function index() {
  return (<RemoteModule fallback={<>Loading...</>} />)
}

export default index