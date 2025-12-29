import './App.css'
import Navbar from './Header/Header'
import Home from './home/Home'
import Integrates from './Integrates/Integrates'
import MealDetails from './Integrates/Meal'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Why from './why/Why'
import Footer from './footer/Footer'
import Veg from './veg/Veg'
import MealTwo from './veg/Meal_2'
import Quick from './quick_recipes/Quick'
import Create from './create/Create'
import Chicken from './Chicken/Chicken'
import Creation from './creation/Creation'
import Ideas from './ideas/Ideas'
import Explore from './explore/Explore'
import Contact from './contact/Contact'
import Login from './login/Login'
import Protected_routes from './protected/Protected_routes'

function App() {

  return (
    <>
      <BrowserRouter>

        {/* Always show Navbar */}
        <Navbar />

                <Routes>
                     <Route
            path="/"
            element={
              <>
                <Protected_routes><Home /></Protected_routes>
                
                <Integrates />
                <Why />
                <Footer />
              </>
            }
          />
          <Route path='/veg'
          element={
            <Protected_routes>
            <Veg />
            </Protected_routes>
          }
          /> 
          <Route path='/quick'
          element={
            <>
            <Protected_routes>
             <Quick />
             </Protected_routes>
            </>
          }
          />
          <Route path='/create' element={<Protected_routes><Create/></Protected_routes>} />
          <Route path='/explore' element={<Protected_routes><Explore/></Protected_routes>} />
          <Route path='/ideas' element={<Protected_routes><Ideas/></Protected_routes>} />
          <Route path='/creation' element={<Protected_routes><Creation /></Protected_routes>} />
          <Route path='/chicken' element={<Protected_routes><Chicken/></Protected_routes>} />
          <Route path='/contact' element={<Protected_routes><Contact /></Protected_routes>} />
          <Route path='/login' element={<Login />} />
          <Route path='/meal/:id' element={<Protected_routes><MealTwo/></Protected_routes>} />
          <Route path="/meal/:id" element={<Protected_routes><MealDetails /></Protected_routes>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
