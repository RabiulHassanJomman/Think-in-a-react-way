/* eslint-disable no-unused-vars */
import React from "react";

const withLoading = (OriginalComponent) => { 
  return ({isLoading, ...props}) => {
    if(isLoading) return <h1>Loading</h1>
    return <OriginalComponent {...props}></OriginalComponent>
  }
 };

 export default withLoading;