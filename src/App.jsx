
import { IoMdStar } from "react-icons/io";
import Hero from './components/Hero/hero'
import NavBar from './components/NavBar/NavBar'
import TrustPilot from './components/TrustPilot/TrustPilot'
import Categories from "./components/Categories/Categories";
import { TfiInkPen } from "react-icons/tfi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Courses from "./components/Courses/Courses";
import { FaPlayCircle } from "react-icons/fa";
import Questions from "./components/Questions/Questions";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Sponsers from "./components/Sponsers/Sponsers";
import Clientsay from "./components/Clientsay/Clientsay";
import Footer from "./components/Categories/Footer/Footer";



function App() {

  return (
   <>
   <NavBar logo ="src\assets\img\Edujar.png" items ={["Home" , "Courses" , "About us" , "Works" , "Blog" , "Contact"]} btn ="Sign Up"
   />   
   <Hero firstimg="src\assets\img\hero-left-man.png" header="Learn with us anywhere with the best " spn="experts" par="We collaborate with 275+ leading universities and companies" inp="    Want do you want to learn?" btn="Explore" secimg="src\assets\img\hero-right-man.png"
   />
   <TrustPilot Gstar={<IoMdStar />} Ystar={<IoMdStar />}
   />
   <Categories title="Explore top categories" subtitle="Click on the categories and explore all courses"
              arrowleft={<IoIosArrowBack />}
              artimg={<TfiInkPen />}
              artp="Art & Design"
              communimg={<IoChatboxEllipsesOutline />}
              communp="Communications"
              financeimg={<AiOutlinePieChart />}
              financep="Finanace & Bank"
              marketimg={<FaChartLine />}
              marketp="Marketing"
              photographyimg={<IoCameraOutline />}
              photographyp="Photography"
              arrowright={<IoIosArrowForward />}
              />

   <Courses   headtitle="Popular Courses"
              subheadtitle="Let’s join our best classes with our famous  instructor and institutes"
              larrw="src\assets\img\left-arrow.png"
              rarrw="src\assets\img\right-arrow.png"
              playicon={<FaPlayCircle />}
              numoflesson={["25X Lessons" , "16X Lessons" , "38X Lessons"]}
              btnindex={["Design" , "Marketing" , "Programming"]}
              cardh={["Supervised Machine Learning: Regression and Classification" , "Programming for Everybody (Getting Started with Python)" , "Leading Teams: Developing as a Leader" , "Powerful mental tools to help you master tough subjects"]}
              cardp="For athletes, high altitude produces two contradi effects on performance."
              jbtn="Join"
              footerimgone="src\assets\img\img1.png"
              footerimgtwo="src\assets\img\img2+4.png"
              footerimgthree="src\assets\img\img3+6.png"
              footerimgfour="src\assets\img\img5.png"
              /> 
  <Questions  leftType={["Frequently Asked Questions" , "Any Questions? Find here."]}
              smbtn="Send Message"
              collH={["Can Conversix sync my data to my CRM?" , "How much data will I receive?" , "Can marketers use Conversix data on behalf of client?" , "How accurate is my data?" ]}
              collP="Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."
              />
  <Clientsay  wocs="Whats our client's say"
              ctimg="src\assets\img\double-coutations.png"
              para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
              Mname="Aron Smith"
              arrleft={<FaArrowLeft />}
              arrright={<FaArrowRight />}
              faceone="src\assets\img\face1.png"
              facetwo="src\assets\img\face2.png"
              facethree="src\assets\img\face3.png"
              facefour="src\assets\img\face4.png"
              facefive="src\assets\img\face5.png"
                />
  <Sponsers   larrow={<FaArrowLeft />}
              rarrow={<FaArrowRight />}
              hubspot="src\assets\img\hubspot.png"
              loom="src\assets\img\loom.png"
              gitlab="src\assets\img\gitlab.png"
              livechat="src\assets\img\livechat.png"
              monday="src\assets\img\monday.png"/>
  <Footer     paragraph="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
              foot="© 2024 edujar - All Rights Reserved"
              firstulh="Quick Links"
              firstulfirstli="Home"
              firstulsecli="Courses"
              firstulthirdli="About us"
              firstulfourthli="Works"
              firstulfifthli="Blog"
              seculh="Legal"
              seculfirstli="Terms of use"
              seculsecli="Terms & Conditions"
              seculthirdli="Privacy policy"
              seculfourthli="Cookie policy"
              fourmh="Quick Links"/>
   </>
   
  )
}

export default App
