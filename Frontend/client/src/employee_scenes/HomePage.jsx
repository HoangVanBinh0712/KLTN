import React, { useContext } from 'react'
import TopBar from './components/global/TopBar';
import Banner from './components/global/Baner';
import Footer from './components/global/Footer';
import ListPostsHomepage from './components/ListPostsHomepage';
import TopEmployer from './components/TopEmployer';
import { PostContext } from '../contexts/PostContext';

const HomePage = () => {

  const {postState:{posts}}=useContext(PostContext)
  
  return (
    <>
      <TopBar />
      <Banner />
      <ListPostsHomepage
        title={"Hot job"}
        isHaveAi={false}
        listPosts={posts}
      />
      <TopEmployer/>
      <ListPostsHomepage
        title={"Hot job"}
        isHaveAi={true}
        listPosts={posts}
      />
      <ListPostsHomepage
        title={"Hot job"}
        isHaveAi={false}
        listPosts={posts}
      />
      <Footer/>
    </>
  )
}

export default HomePage;