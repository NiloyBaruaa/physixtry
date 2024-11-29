import './Banner.css'
import cartoon from '../../../public/Images/yGfPVNn-removebg-preview.png'

const Banner = () => {

    return (
        <div id='banner' className="hero bg-blue-950  text-white  min-h-screen pt-3 z-0 px-5">
            <div className="hero-content flex-col lg:flex-row-reverse md:gap-16">
                <img
                    src={cartoon}
                    className="rounded-lg shadow-2xl md:w-1/2 md:h-1/2 static" />
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold py-1">
                        <span><span className="text-yellow-300">সাহসী পদক্ষেপে</span> শিক্ষার</span>
                    </h1>
                    <h1 className="text-4xl font-bold ">
                        <span>নতুন দৃষ্টিকোণ উন্মোচন</span>
                    </h1>
                    <p className="py-6 text-sm">
                        জ্ঞান অর্জন হবে মজার,সাফল্য হবে হাতের নাগালে, যেখানে  তুমি পাবে নতুন চ্যালেঞ্জ, নতুন অভিজ্ঞতা। প্রতিটি মুহূর্তে তুমি খুঁজে পাবে নতুন সম্ভাবনা, যা তোমাকে তোমার লক্ষ্য অর্জনে আরও একধাপ এগিয়ে নিয়ে যাবে।
                    </p>
                    <div>



                        <label htmlFor="my_modal_7" className="btn text-base w-36 md:w-44 text-xsm md:text-md  text-white bg-[#6366f1] hover:text-white hover:border-none hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                            <i>ENROLL NOW</i>
                        </label>


                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">

                                <p className="py-4 text-center">✅Admission Process :
                                    সম্পূর্ণ ভর্তি প্রক্রিয়াতে পরপর তিনটি কাজ সম্পন্ন হলে ভর্তি কার্যকর হবে। <br /> <br />
                                    ✒️Send Money করতে হবে।<br />
                                    ✒️সঠিক তথ্য দিয়ে Form Fillup করতে হবে।<br /><br />

                                    ✅এনরোলমেন্ট ফি পাঠানোর পর স্ক্রিনশট তুলে নাম, মোবাইল নাম্বার ও স্কুলের নাম সহ google ফর্মে সাবমিট করতে হবে অথবা PHYSIXTRY পেইজে মেসেজ দিতে হবে। তার পরপরই ভর্তি 
                                    কার্যকর হবে।<br /> <br />

                                    🔵কোর্স ফি :  ৫৫০/- টাকা।<br /><br />

                                    🖋️কোর্স ফি পাঠানোর বিকাশ নম্বর : <br />
                                    016 3278 5301 (Bkash Personal) <br />
                                    016 1989 1276 (Bkash Personal) <br />

                                    🏆ভর্তি ফরম লিঙ্ক :
                                    <a className='text-slate-400' href="https://forms.gle/uxyPSrodaPezQ8xR6">https://forms.gle/uxyPSrodaPezQ8xR6</a></p>
                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">
                                Close
                            </label>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;