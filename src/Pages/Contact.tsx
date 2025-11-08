'use client'



import Navbar from '../Components/Navbar';
import Footers from '../Components/Footers';
import '../App.css'
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Slide, toast, ToastContainer } from 'react-toastify';

const Contact = () => {
const sendmsg = () =>{
  const nameInputElement = document.querySelector('.na') as HTMLInputElement | null;
  const emailInputElement = document.querySelector('.em') as HTMLInputElement | null;
  const messageInputElement = document.querySelector('.msg') as HTMLTextAreaElement | null;

  if (nameInputElement?.value && emailInputElement?.value && messageInputElement?.value !== "") {
    const nameInput = (document.querySelector('.na') as HTMLInputElement).value;
    const emailInput = (document.querySelector('.em') as HTMLInputElement).value;
    const messageInput = (document.querySelector('.msg') as HTMLInputElement).value;
     toast.success(`Thank you ${nameInput} for contacting us! We have received your message and will get back to you at ${emailInput} soon.`);
    console.log(nameInput, emailInput, messageInput);
   
    (document.querySelector('.na') as HTMLInputElement).value = "";
    (document.querySelector('.em') as HTMLInputElement).value = "";
    (document.querySelector('.msg') as HTMLInputElement).value = "";
  }
  else{
    toast.error('Please fill in all fields before submitting the form.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "dark",
      transition: Slide
    });
  }}

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  
    });

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
 
    <div>
      <Navbar />
      <section className="text-white body-font relative w-full h-[170vh] overflow-hidden">
  <div className="container !px-5 !py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 !p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159.566780557183!2d77.6750033948456!3d27.47263095760353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4d5205%3A0x4273a09defe10ea5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1751349656168!5m2!1sen!2sin" style={{ filter: "grayscale(1) contrast(0.7) opacity(1.4) brightness(0.2)" }  }loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="bg-black relative flex flex-wrap !py-6 rounded shadow-md">
        <div className="lg:w-1/2 !px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1 text-[14px]">India → Uttar Pradesh → Mathura → Vrindavan → Near Varah Ghat</p>
        </div>
        <div className="lg:w-1/2 !px-6 !mt-4 lg:!mt-0">
          <h2 className="title-font font-semibold text-white !tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">clonicalclone@gmail.com</a>
          <h2 className="title-font font-semibold text-white !tracking-widest text-xs !mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div className="lg:!w-1/3 md:!w-1/2 bg-black flex flex-col md:!ml-auto !w-full md:!py-8 !mt-8 md:!mt-0 !pl-5">
      <h2 className="text-white text-lg !mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed !mb-5 text-white">Feel Free to ask any of your doubts ! </p>
      <div className="relative !mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-white ">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-black na rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white !py-1 !px-3 leading-8 transition-colors duration-200 ease-in-out incs" />
      </div>
      <div className="relative !mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white ">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-black em  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white !py-1 !px-3 leading-8 transition-colors duration-200 ease-in-out incs" />
      </div>
      <div className="relative !mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white ">Message</label>
        <textarea id="message" name="message" className="w-full bg-black rounded msg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white !py-1 !px-3 resize-none leading-6 transition-colors duration-200 ease-in-out incs"></textarea>
      </div>
      <div className="relative !mb-4">
    
        <button onClick={sendmsg} className="inline-flex h-12 animate-shimmer items-center justify-center hover:scale-115 hover:transition hover:duration-500 border border-slate-800 py-3 rounded-full bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-9 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:cursor-pointer">
          Send Message
        </button>
<ToastContainer position="bottom-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="dark"
               transition={Slide}/>
      </div>
    </div>
  </div>
</section>
      <Footers />
    </div>
   
  )
}

export default Contact
