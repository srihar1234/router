import { useNavigate } from "react-router-dom";

export default function All() {

    const data = [
        {
            image: "https://www.revenueriver.co/hubfs/fullstack.jpeg",
            title: "FULL STACK DEVELOPMENT",
        },
        {
            image: "https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/The-5-Biggest-Data-Science-Trends-In-2022/960x0.jpg?height=399&width=711&fit=bounds",
            title: "DATA SCIENCE",
        },
        {
            image: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.webp?b=1&s=170667a&w=0&k=20&c=peR6RssbW8HWFp3ywFfKXpvbrBGRwIyaQY6BlV_vbhE=",
            title: "CYBER SECURITY",
        },
    ];
    const navigate = useNavigate();

    return (
        <div>

            <div className="top">
                <img className="all-img" src="https://png.pngtree.com/background/20210711/original/pngtree-blue-mobile-phone-information-technology-banner-background-picture-image_1127113.jpg" />
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

