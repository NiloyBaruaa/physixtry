
import scch from '../../../public/Images/scch.webp'
const Scch = () => {
    return (
        <div className="flex justify-center">
                  <div className="card  bg-blue-900 text-white shadow-xl mt-12 mx-5 w-full md:w-1/2 px-10">
                <figure>
                    <img
                       className='w-80 h-80 p-3'
                        src={scch}
                        alt="SCCH" />
                </figure>
                <div className="card-body">
                    <h2 className="font-extrabold text-3xl text-white text-center">SCCH(Special Crash Course For Hustlers)</h2>
                    <p className='text-white text-center'>তুমি যদি সম্পূর্ণ কোর্সটি Dedicatedly কমপ্লিট করে থাকো এবং আমাদের Total ৫০০ নম্বরের POC(Proof Of Conceptions) টেস্টে ৪০০+ মার্ক্স পাও তোমাকে Provide করা হবে আমাদের কোর্সের Biggest Surprise <span className="font-extrabold">SCCH(Special Crash Course For Hustlers)</span></p>
               
                </div>
            </div>
        </div>
    );
};

export default Scch;