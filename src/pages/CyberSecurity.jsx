import { useNavigate } from "react-router-dom";

export default function CyberSecurity(){

    const data = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7A7IRSooa3LWsOUglrSWXuNota1b70nxKJw&usqp=CAU",
            title: "CYBER SECURITY THREATS",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7A7IRSooa3LWsOUglrSWXuNota1b70nxKJw&usqp=CAU",
            title: "NEED FOR CYBER SECURITY IN 2023",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7A7IRSooa3LWsOUglrSWXuNota1b70nxKJw&usqp=CAU",
            title: "CYBER SECURITY VS ETHICAL HACKING",
        },
    ];
    const navigate = useNavigate();

    return(
        <div>
            <div className="top">
                <h1 className="pageTitle">CYBER SECURITY</h1>
                <div className="pagePara">
                    <p>One of the most propelling careers on the planet today, Cyber Security is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.</p>
                    <p>The GUVI Blog’s Cyber Security category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
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