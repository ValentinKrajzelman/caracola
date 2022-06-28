import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ComoProducimos from "./components/comoProducimos";
import ContactForm from "./components/contactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import QuienesSomos from "./components/quienesSomos";
import Talleres from "./components/talleres";

const App = () => {

    return (
        <BrowserRouter>
            <div className='bg-slate-700'>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Hero />
                            <QuienesSomos />
                            <ComoProducimos />
                            <FAQ />
                            <ContactForm />
                        </div>}></Route>
                    <Route path="/talleres" element={
                        <div>
                            <Talleres />
                            <ContactForm />
                        </div>}></Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;