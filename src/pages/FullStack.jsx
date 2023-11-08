import { useNavigate } from "react-router-dom";


export default function FullStack() {
    const data = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gEqFtRXpx9lJwKrx5R7wk0fwXKhKqeCAAA&usqp=CAU",
            title: "7 BEST FULL STACK ONLINE COURSES",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gEqFtRXpx9lJwKrx5R7wk0fwXKhKqeCAAA&usqp=CAU",
            title: "MASTER IT IN 45 DAYS",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gEqFtRXpx9lJwKrx5R7wk0fwXKhKqeCAAA&usqp=CAU",
            title: "TOP SKILLS IN FULL STACK",
        },
    ];
    const navigate = useNavigate();

    return (
        <div>

            <div className="top">
                <h1 className="pageTitle">FULL STACK DEVELOPMENT</h1>
                <div className="pagePara">
                    <p>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!</p>
                    <p>The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!
                    </p>
                </div>
            </div>

            <div className="nav-bar">
                <div className="navbar bg-base-300">
                    <a className="btn btn-ghost normal-case text-xl" onClick={()=>navigate("/")}>ALL</a>
                    <a className="btn btn-ghost normal-case text-xl" onClick={()=>navigate("/full/stack")}>FULL STACK DEVELOPMENT</a>
                    <a className="btn btn-ghost normal-case text-xl" onClick={()=>navigate("/data/science")}>DATA SCIENCE</a>
                    <a className="btn btn-ghost normal-case text-xl" onClick={()=>navigate("/cyber/security")}>CYBER SECURITY</a>
                    <a className="btn btn-ghost normal-case text-xl" onClick={()=>navigate("/career")}>CAREER</a>
                </div>
            </div>

            <div className="cards">
                {
                    data?.map((info, idx) => (
                        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={idx}>
                            <figure><img src={info.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{info.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}