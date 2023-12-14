import React from 'react';
import NavBar from './Sharing/NavBar';
import HomePageBanner from './Component/HomePageBanner';
import Header from './Component/Header';
import ArticleCard from './Component/ArticleCard';


const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <br></br>
     
      <HomePageBanner></HomePageBanner>
      <br></br>
      <Header></Header>
      <hr></hr>
      <ArticleCard></ArticleCard>

      
      

    </div>
  );
};

export default App;