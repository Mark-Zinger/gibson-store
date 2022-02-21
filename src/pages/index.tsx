import type { NextPage } from 'next'
import PageLayout from "../components/PageLayout";
import MainIntro from "../components/MainIntro";
// import Link from 'next/link'



const Home: NextPage = () => {
  return (
    <PageLayout
      description="Rock Music Legend in your hands"
    >
        <MainIntro/>
    </PageLayout>
  )
}

export default Home
