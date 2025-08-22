'use client'

import Link from "next/link";
interface ErrorPageProps {
    error: Error;
    reset: () => void;
}
const ErrorPage = ({error,reset}:ErrorPageProps) => {
    return (
        <div>
            <div className="text-3xl font-bold text-center text-red-600 mt-10">
                <div className="text-3xl text-red-900 font-semibold">Something went wrong!</div>
               <h2>
                error message: {error.message}
               </h2>
               <button onClick={()=>reset()} className="text-xl ">
                Try again
               </button>
               <br/>
                <Link href="/" className="text-xl  hover:bg-purple-200 ">
                go to home page
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;

