import Layout from "@/components/layout/Layout"
import Home2 from "@/components/sections/Home2"
import Static2 from "@/components/sections/Static2"
import Projects2 from "@/components/sections/Projects2"
import Skills2 from "@/components/sections/Skills2"
import Contact2 from "@/components/sections/Contact2"
import Coporation2 from "@/components/sections/Coporation2"
import Experience2 from "@/components/sections/Experience2"
import Education2 from "@/components/sections/Education2"

export default function Home() {

	return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Home2 />
        <Skills2 /><br/>
        <Static2 />
        <Coporation2 />
        <Experience2 />
        <Education2 />
        <Projects2 /> <br/>
        <Contact2 />
      </Layout>
    </>
  );
}