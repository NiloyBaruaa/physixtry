import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()
    const handleRegister = (e) => {
        
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const schoolName = e.target.schoolName.value;
        const phone = e.target.phone.value
        

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password,name,schoolName,phone)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                
                navigate('/physixtry/login')

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className=" ">
                <div className="text-center text-whites">
                    <h1 className="text-5xl font-bold mt-10">Register now!</h1>
                    <p className="py-6 text-lg font-bold">
                        তোমার Class Continue করতে Register কর এখনই আর বুঝে নাও তোমার SSC Life এর Best Course Material
                    </p>
                </div>
                <div className="card bg-base-100 w-full mx-auto shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleRegister}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">School Name</span>
                            </label>
                            <input name="schoolName" type="text" placeholder="School Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Phone Number</span>
                            </label>
                            <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                        
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p  className="text-center text-white mt-5">Already Have An Account ? <Link className="text-blue-400" to={'/physixtry/login'}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;