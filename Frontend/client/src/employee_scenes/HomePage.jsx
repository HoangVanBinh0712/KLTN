import React from 'react'
import TopBar from './components/global/TopBar';
import Banner from './components/global/Baner';
import Footer from './components/global/Footer';
import ListPostsHomepage from './components/ListPostsHomepage';
import TopEmployer from './components/TopEmployer';

const HomePage = () => {
  
  return (
    <>
      <TopBar />
      <Banner />
      <ListPostsHomepage
        title={"Hot job"}
        isHaveAi={false}
        listPosts={[]}
      />
      <TopEmployer/>
      <ListPostsHomepage
        title={"Hot job"}
        isHaveAi={true}
        listPosts={[]}
      />
      <ListPostsHomepage
        title={"Hot job"}
        isHaveAi={false}
        listPosts={[]}
      />
      <Footer/>
    </>
  )
}

export default HomePage;