import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import Layout from "./Layout";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Homepage from "./Homepage";
import PageNotFound from "./PageNotFound";

export default function App2() {
  return (
    <BrowserRouter>
            <Routes>
            <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage/>} />
                    <Route path='blogs' element={<Blogs />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound />}></Route>
                </Route>

            </Routes>
        </BrowserRouter>
  )
}

