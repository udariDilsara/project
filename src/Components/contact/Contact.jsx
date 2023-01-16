import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4047213.2839410105!2d80.70625!3d7.857684999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1673675554361!5m2!1sen!2slk" 
  return (
    <>
      <Back subtitle='Educational Daycare, Childcare, Preschool & After-School in Sri Lanka' title='Contact Us' />
      <h2  className="title">Contact Us</h2>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Get in touch......</h1>
            <p>Join with us today</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>NO:10 Sri Priyadarshi road, Ampegama,Manampita</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> inforLUChildCare@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +94 0772635339</p>
              </div>
            </div>

            <form action=''>
              <div className='input '>
                <label htmlFor=""> Guardian Name :</label>
                <input type='text' placeholder='Name' />
                <label htmlFor=""> Child Name :</label>
                <input type='text' placeholder=' ChildName' />

                <div className="input flexSB">
                 <div>
                    <label htmlFor="">Email :</label>
                    <input type='email' placeholder='Email' />
                  </div>
                  <div>
                    <label htmlFor="">Tele Phone :</label>
                    <input type='text' placeholder='TP' />
                  </div>
                </div>
              </div>
              <div className=" flexSB "><button >Submit</button></div>
              
            </form>

            
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
