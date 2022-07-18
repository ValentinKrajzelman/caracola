import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ComoProducimos from "./components/comoProducimos";
import ContactForm from "./components/contactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import QuienesSomos from "./components/quienesSomos";
import Talleres2 from "./components/talleres2";

//cosas

const App = () => {

    return (
        <BrowserRouter>
            <div className='bg-slate-700 flex place-content-center'>
                <div className='max-w-[89rem]'>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <Talleres2 />
                                <Hero />
                                <QuienesSomos />
                                <FAQ />
                                <ContactForm />
                            </div>}></Route>
                        {/* <Route path="/talleres" element={
                            <div>
                                <Talleres />
                            </div>}></Route> */}
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;