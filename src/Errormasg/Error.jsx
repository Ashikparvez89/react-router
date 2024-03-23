import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError()
    console.log(error)

    
    return (
        <div className="h-full flex justify-center items-center text-3xl font-bold">
            <h2>Oppppsss!!!</h2>
            <p>{error.statusText || error.massage}</p>
            {
                error.statusText == 404 && <div className="">
                    <p>Page not fount</p>
                    <h1>Please go back gome page</h1>
                    <Link to="/"><button className="btn btn-info">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;