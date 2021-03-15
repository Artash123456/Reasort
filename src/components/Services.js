import React, { PureComponent } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
import Title from "./Title"
class Services extends PureComponent {
state ={
    services:[{
        icon:<FaCocktail/>,
        title:"free coctails",
        info:"aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
},
{
    icon:<FaHiking/>,
    title:"Endles Hiking",
    info:"aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
},{
    icon:<FaShuttleVan/>,
    title:"Free shuttle",
    info:"aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
},{
    icon:<FaBeer/>,
    title:"Strongest Beer",
    info:"aaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
},



]
}

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key = {index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}

                </div>
            </section>
        )
    }
}

export default Services