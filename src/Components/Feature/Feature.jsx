


const Feature = ({ feature }) => {
    const { feature_id, feature_name,  feature_details } = feature;
    console.log(feature_id);


    if (!feature) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <section>
            <div className="card card-compact bg-slate-800 text-white font-semibold w-6/7 border mx-auto h-full">
     
                <div className="card-body text-center">
                    <h2 className="text-3xl p-4 mt-5 bg-white text-slate-800 rounded-md font-semibold">{feature_name}</h2>
                    <p className="mt-6">{feature_details}</p>
                </div>
              
            </div>

          
        </section>
    );
};

export default Feature;