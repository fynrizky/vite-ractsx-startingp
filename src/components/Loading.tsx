import React, { useEffect, useState } from 'react'

interface Props{
  onLoadingComplete: (loading:boolean) => void;
}

export const Loading: React.FC<Props> = ({onLoadingComplete}) => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(()=>{
    
    setTimeout(()=>{
      setLoading(false)
      onLoadingComplete(false)
    },2000)

    // loading animation
    const intervalId = setInterval(() => {
      if (loadingText === "Loading . . .") {
        setLoadingText("Loading");
      } else {
        setLoadingText(loadingText + " .");
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, [loadingText])
  
  return (
    <>
    <div className={`container-load ${!loading ? 'hidden': ''}`}>
      <div className="row-load">
        <div className="loading"> {loadingText} </div>
      </div>
    </div>
    </>
  )
}
