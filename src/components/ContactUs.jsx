const ContactUs = () => {
    return (
        <section className="flex justify-center m-[4rem] min-w-[420px]">
            <div className="flex justify-between w-[30rem] h-[30rem]">
                <div className="flex justify-center items-center">
                    <h2 className="mb-[2rem]">Contact Us</h2>
                </div>
                
                <form className="flex flex-col justify-center">
                    <label>Enter Your name
                        <input type="text" placeholder="Abhijeet" className="pl-[0.5rem] h-[1.5rem] block mb-[2rem]"></input>
                    </label>
                    <input type="text" placeholder="Input Box" className="pl-[0.5rem] h-[1.5rem] block mb-[2rem]"></input>
                    <button className="pl-[0.5rem] h-[1.5rem] block mb-[2rem]">Submit form</button>
                </form>
            </div>
            
        </section>
    )
}

export default ContactUs
