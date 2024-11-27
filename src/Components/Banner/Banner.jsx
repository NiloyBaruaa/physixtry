import './Banner.css'
import cartoon from '../../../public/Images/yGfPVNn-removebg-preview.png'
const Banner = () => {
    return (
        <div id='banner' className="hero   text-white  min-h-screen pt-3 z-0 px-5">
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
                        <a className="btn w-36 md:w-44 text-xsm md:text-md  text-white bg-[#6366f1] hover:text-white hover:border-none hover:bg-gradient-to-r from-cyan-500 to-blue-500"><i>ENROLL NOW</i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;