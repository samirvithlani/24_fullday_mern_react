import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { ContentComponent } from "./components/ContentComponent";
import HeaderComponent from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { Users } from "./components/Users";
import { UseStateDemo } from "./components/UseStateDemo";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Students } from "./components/Students";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/Netflix/NetflixHome";
import { NetflixMovies } from "./components/Netflix/NetflixMovies";
import { Erorr404 } from "./components/Erorr404";
import { WatchContent } from "./components/Netflix/WatchContent";
import { NetflixShows } from "./components/Netflix/NetflixShows";
import { InputHandlinfDemo1 } from "./components/inputhandling/InputHandlinfDemo1";
import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { BookList } from "./components/BookList";
import { MobileList } from "./components/MobileList";
import { DynamicForm } from "./components/forms/DynamicForm";
import { DynamicFrorm2 } from "./components/forms/DynamicFrorm2";
import { Expense } from "./components/Expense";
import { UseMemoDemo } from "./components/UseMemoDemo";
import { FindBomb } from "./components/FindBomb";
import { UseRefDemo1 } from "./components/Netflix/UseRefDemo1";
import { UseRefDemo2 } from "./components/UseRefDemo2";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { AddUser } from "./components/api/AddUser";
import { ToastContainer, Zoom } from "react-toastify";
import { EditUser } from "./components/api/EditUser";
import FirstPageAnimation from "./components/FirstPageAnimation";
import { EmployeeList } from "./components/employees/EmployeeList";

function App() {
  var title = "REACT JS";

  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Students />}></Route>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/watch/:name" element={<WatchContent />}></Route>
        <Route path="/inputdemo1" element={<InputHandlinfDemo1 />}></Route>
        <Route path="/formdemo1" element={<FormDemo1 />}></Route>
        <Route path="/formdemo2" element={<FormDemo2 />}></Route>
        <Route path="/formdemo3" element={<FormDemo3></FormDemo3>}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/booklist" element={<BookList />}></Route>
        <Route path="/mobilelist" element={<MobileList />}></Route>
        <Route path="/dynamicform" element={<DynamicFrorm2 />}></Route>
        <Route path="/expense" element={<Expense />}></Route>
        <Route path="/usememo" element={<UseMemoDemo />}></Route>
        <Route path="/findbomb" element={<FindBomb />}></Route>
        <Route path="/userefdemo" element={<UseRefDemo2 />}></Route>
        <Route path="/useeffectdemo" element={<UseEffectDemo />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/edituser/:id"element = {<EditUser/>}></Route>
        <Route path="/firstpage" element = {<FirstPageAnimation/>}></Route>
        <Route path="/employees"element = {<EmployeeList/>}></Route>
        {/* <Route path='/*' element = {<h2>NO FOUND</h2>}></Route> */}
        <Route path="/*" element={<Erorr404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
