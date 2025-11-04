import React , {useState} from 'react'
import {useLocation} from 'react-router-dom'
import Faq from './Faq';
import {data as faqsdata} from "./data"
const Faqs = () => {
  const [faqs, setfaqs] = useState(faqsdata);
  const isadminroute = useLocation().pathname.startsWith('/admin');
  return (
    <div className='min-h-screen w-full bg-black text-white'>
    {/* {!isadminroute && <Navbar />} */}
    <h1 className='text-3xl font-bold font-sans text-center h-15 flex items-center justify-center' style={{marginTop:'60px'}}>Frequently Asked Questions</h1>
    <section>
      {faqs.map(faq => <Faq key={faq.id} {...faq}/>)}
    </section>
    </div>
  );
}

export default Faqs;