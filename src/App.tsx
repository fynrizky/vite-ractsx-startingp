import React, { useState } from 'react'
import './App.css'
import Content from './components/Content';
import { Loading } from "./components/Loading";

export const App: React.FC = () => {
const [loading, setLoading] = useState(true)

const handleLoadingComplete = (loading: boolean) => {
  setLoading(loading)
}

  return (
    <>
      <Loading onLoadingComplete={handleLoadingComplete}/>
      <Content loading={loading} />
    </>
  )
}

