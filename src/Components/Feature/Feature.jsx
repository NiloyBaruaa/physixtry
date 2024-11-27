// import hour from '../../assets/Images/200hour.jpeg'
// import support from '../../assets/Images/24support.jpg'
// import cq from '../../assets/Images/cq.jpg'
// import weekly from '../../assets/Images/weekly.jpeg'
// import dagano from '../../assets/Images/dagano boi.jpg'
// import theoritical from '../../assets/Images/theoritical.png'


const Feature = ({ feature }) => {
    const { feature_id, feature_name, feature_img, feature_details } = feature;
    console.log(feature_id);

    // const featureImg = [
    //     {"Image" : `${hour}`},
    //     {"Image" : `${support}`},
    //     {"Image" : `${cq}`},
    //     {"Image" : `${weekly}`},
    //     {"Image" : `${dagano}`},
    //     {"Image" : `${theoritical}`},
    // ]
    

    if (!feature) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <section>
            <div className="card card-compact bg-slate-800 text-white font-semibold w-96 border h-full">
                <figure>
                    <img
                    src={feature_img}
                    className="w-full h-72"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{feature_name}</h2>
                    <p>{feature_details}</p>
                </div>
            </div>

          
        </section>
    );
};

export default Feature;