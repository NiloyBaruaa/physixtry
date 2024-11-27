import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                localStorage.setItem("isLoggedIn", "true");
                navigate('/physixtry/classes')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                
            });


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login করো! </h1>
                    <p className="py-6 text-lg font-semibold">
                      তোমার SSC Life এর Journey কে Smooth করে PHYSIXTRY এর সাথে যুক্ত হওয়ায় তোমাকে অভিনন্দন। নিজের Maximum Potential টা Unlock করে SSC তে ৯০+ মার্ক্স পাওয়ার মিশনে বিশ্বাস রাখো PHYSIXTRY এর উপর। <br />
                     <span className="text-white"> Account করা না থাকলে অবশ্যই Register করো। </span>
                    </p>
                </div>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl ">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-bold">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                     
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className="text-lg text-center mt-3">Doesn't Have An Account ? <Link className="text-blue-500" to={'/physixtry/register'}>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;