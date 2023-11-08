import { useNavigate } from "react-router-dom";

export default function Career(){

    const data = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3IH6fmAMiL1E3Ro_wnLhbMxoVOOh6inqiA&usqp=CAU",
            title: "TOP 8 PRODUCT BASED COMPANIES",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3IH6fmAMiL1E3Ro_wnLhbMxoVOOh6inqiA&usqp=CAU",
            title: "COLD EMAILING TECHNIQUE FOR RECRUITMENT",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3IH6fmAMiL1E3Ro_wnLhbMxoVOOh6inqiA&usqp=CAU",
            title: "APTITUDE QUESTIONS TRAINING FOR ENTRY LEVEL",
        },
    ];
    const navigate = useNavigate();

    return(
        <div>
            <div className="top">
               <img className="all-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VifAcdAPUJhaWGzCkRQM9i34JyCgPiEbsw&usqp=CAU"/>
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