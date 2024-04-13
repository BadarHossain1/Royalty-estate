
const ContactUs = () => {
    return (
        <div className="w-full mx-auto flex flex-col gap-4 md:flex-row mt-6">
            <div className="w-1/2 text-right">
            <div className="mockup-phone ">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">

                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold text-[#aa8453]">Feel Free to Knock us</h1>
                                    <div className="mt-8">

                                        <p><strong>Email:</strong> info@example.com</p>
                                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                                        <p><strong>Address:</strong> 123 Street, City, Country</p>
                                    </div>

                                    <nav>
                                        <p className="text-2xl text-[#aa8453] font-playfair-display font-bold mt-3">Connect With Us</p>
                                        <div className="flex justify-center mt-3 gap-4">
                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            </div>
            <div className="hero w-1/2 flex justify-start">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="Name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input type="number" placeholder="Contact Number" className="input input-bordered" required />

                            </div>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn bg-[#aa8453] text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Submit</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-4xl text-center text-[#aa8453] flex justify-center items-center">Submitted! <img src="../../public/icons8-thumbs-up.gif" alt=""  className="text-center mt-2 flex justify-center  items-center"/></h3>
                                    <div className="modal-action text-center flex justify-center" >
                                        <form method="dialog flex justify-center">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn bg-[#aa8453] text-white">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;