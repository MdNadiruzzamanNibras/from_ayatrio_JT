import { LuShoppingBag } from "react-icons/lu";
import bank from '../images/bank2.png'

const FirstPage = () => {
    return (
        <div>
            <div className="flex flex-col min-h-screen">
                <div className="pt-30 flex-grow">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className=" ml-36  mr-20 h-screen">
                        <div>
                            <h1 className="text-3xl font-bold">How would you like to get your order?</h1>
                        
<p>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information Learn More</p>
                        </div>
                        <div>
                            <div className="w-80 border-gray-900 flex   rounded-lg py-6 mt-10 items-center border-2">
                                <h1 className="text-4xl mx-4"><LuShoppingBag /></h1> 
                                <h3 className="text-3xl">Deliver It</h3>
                            </div>
                            <div className=" border-2 rounded-full w-40 flex justify-center items-center mt-14">
                                <h4>Become a Member</h4>
                            </div>
                            <div className=" border-2 rounded-full w-28 py-2 flex justify-center items-center mt-4">
                                <h4>Login</h4>
                            </div>
                            <form >
                                <h4 className="text-2xl my-5">Enter your name and address:</h4>

                                <div className="relative my-6">
                                    <label className="z-10 w-24 text-center  mt-[-12px] bg-white ml-6 absolute">First Name</label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                </div>
                                <div className="relative my-6">
                                    <label className="z-10 w-24 text-center  mt-[-12px] bg-white ml-6 absolute">Last Name</label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                </div>
                                <div className="relative my-6">
                                    <label className="z-10 w-28 text-center  mt-[-12px] bg-white ml-6 absolute">Address Line 1</label>
                                    <input type="text" className="w-96 h-12 rounded-xl  border-2" />
                                    <p className="text-sm ml-6">We do not ship to P.O. boxes</p>
                                </div>
                                <div className="relative my-6">
                                    <label className="z-10 w-28 text-center  mt-[-12px] bg-white ml-6 absolute">Address Line 2 </label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                </div>
                                <div className="relative my-6">
                                    <label className="z-10 w-32 text-center  mt-[-12px] bg-white ml-6 absolute"> Address Line 3</label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                </div>

                                <div className="flex items-center">
                                    <div className="relative my-6">
                                    <label className="z-10 w-28 text-center  mt-[-12px] bg-white ml-6 absolute"> Postal Code</label>
                                    <input type="text"  className="w-44 h-12 rounded-xl  border-2"/>
                                    </div>
                                    <div className="relative my-6">
                                    <label className="z-10 w-24 text-center  mt-[-12px] bg-white ml-6 absolute"> Locality</label>
                                    <input type="text"  className="w-44 ml-4 h-12 rounded-xl  border-2"/>
                                </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="relative my-6">
                                    <label className="z-10 w-28 text-center  mt-[-12px] bg-white ml-6 absolute"> State/Tentory</label>
                                    <input type="text"  className="w-44 h-12 rounded-xl  border-2"/>
                                    </div>
                                    <div className="relative my-6">
                                   
                                    <input type="text"  className="w-44 ml-4 h-12 rounded-xl  border-2"/>
                                </div>
                                </div>

                                <h1 className="text-2xl font-semibold">What's your contact information?</h1>
                                <div className="relative my-6">
                                    <label className="z-10 w-20 text-center  mt-[-12px] bg-white ml-6 absolute">Email</label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                <p className="text-sm">A confirmation email will be sent after checkout.</p>
                                </div>
                                <div className="relative my-6">
                                    <label className="z-10 w-20 text-center  mt-[-12px] bg-white ml-6 absolute">Phone Number</label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                <p className="text-sm">A carrier might contact you to confirm delivery.</p>
                                </div>
                                <div className="mt-12">
                                    <h1 className="text-2xl font-semibold">What's your PAN?</h1>
                                    <div className="relative my-6">
                                    <label className="z-10 w-12 text-center  mt-[-12px] bg-white ml-6 absolute">PAN</label>
                                    <input type="text"  className="w-96 h-12 rounded-xl  border-2"/>
                                        <div className="mt-12 flex items-center">
                                            <input type="checkbox" className="form-checkbox text-black border-black" name="" id="" />
                                            <p className="text-sm ml-6">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy eShop World is a trusted Nike partner</p>
                                </div>
                                </div>
                                </div>
                                <button className="px-32 my-8 py-3 text-lg text-white bg-black rounded-full">Continue</button>
                                <p className="text-xl border-t-2 py-5">Delivery</p>
                                <p className="text-xl text-gray-400 border-t-2 py-5">Shipping</p>
                                <p className="text-xl text-gray-400 border-t-2 py-5">Billing</p>
                                <p className="text-xl text-gray-400 border-t-2 py-5">Payment</p>
                            </form>
                           
                        </div>
                    </div>
                    <div className=""></div>

                </div>
                
            </div>
             
            </div></div>
            
        </div>
    );
};

export default FirstPage;