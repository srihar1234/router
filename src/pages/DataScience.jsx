import { useNavigate } from "react-router-dom";

export default function DataScience(){

    const data = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugAO29EItul-lXTDtZsxrr0Ky4GhBLPnnMw&usqp=CAU",
            title: "BEST DATA SCIENCE BOOKS",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugAO29EItul-lXTDtZsxrr0Ky4GhBLPnnMw&usqp=CAU",
            title: "TOP 10 DATA SCIENCE SKILLS IN 2023",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugAO29EItul-lXTDtZsxrr0Ky4GhBLPnnMw&usqp=CAU",
            title: "FUTURE OF A DATA SCIENTISTS",
        },
    ];
    const navigate = useNavigate();

    return(
        <div>
            <div className="top">
                <h1 className="pageTitle">DATA SCIENCE</h1>
                <div className="pagePara">
                    <p>One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.</p>
                    <p>The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
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