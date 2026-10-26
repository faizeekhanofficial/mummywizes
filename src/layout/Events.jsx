import React from 'react'
import Container from 'react-bootstrap/Container';
import noNaan from "../assets/images/event-no-naan.png"
import headUp from "../assets/images/event-head-up.png"
import kids from "../assets/images/event-kids.png"
import minion from "../assets/images/event-the-minion.png"
import laptopBanner from "../assets/images/laptop-banner.jpg";
import explore from "../assets/images/explore.png"



const card2 = [
    {
        id: 1,
        Image: noNaan,
        description: "No Naan-Sense! Get Unlimited Kebabs For INR 599 At This Middle Eastern Restaurant",
        date: "12oct - nov26",
        loction: "Baris",
        time: "5:00 pm onwards"
    },
    {
        id: 2,
        Image: headUp,
        description: "Heads Up: The Passes For Pet Fed 2018 Are Finally Here!",
        date: "12oct - nov26",
        loction: "Baris",
        time: "3:00 to 8:00 PM"
    },

]
const card3 = [
    {
        id: 3,
        Image: kids,
        description: "Kids’ Very Own Everyday Stage! Playground Creative House Is The First Ever Kids Open Mic Space In Delhi",
        phone: 8178231782,
        loction: "SDA Market New Delhi",

    },
    {
        id: 4,
        Image: minion,
        description: "This Minions Themed Café Will Make Your Kids Blabber With Joy",
        phone: 9178231783,
        loction: "712, West Guru Angad Nagar,   Laxmi Nagar New Delhi",

    },

]

export const Events = () => {
    return (
        <section >
            <div className=" main-events-near zigzag-ima-top">
                <Container>
                    <div className="row gx-5">

                        {/* Events Near You */}
                        <div className="col-md-6">
                            <div>
                                <h3 className="main-heading">Events Near You</h3>

                                <div className="main-heading-border">
                                    <span className="heading-border"></span>
                                    <span className="heading-border-content">
                                        SEE ALL EVENTS
                                    </span>
                                </div>

                                <div className="row">
                                    {card2.map((item) => (
                                        <div className="col-md-12 mb-4 " key={item.id}>
                                            <div className="event-card item ">
                                                <img
                                                    src={item.Image}
                                                    alt={item.description}
                                                    className="img-fluid"
                                                />

                                                <div className='content'>
                                                    <h5>{item.description}</h5>
                                                    <ul>
                                                        <li><i class="fa-solid fa-calendar-days"></i>{item.date}</li>
                                                        <li><i class="fa-solid fa-map"></i>{item.loction}</li>

                                                    </ul>
                                                    <ul class="last-li">
                                                        <li><i class="fa-solid fa-clock"></i>{item.time}</li>
                                                    </ul>

                                                    {item.phone && <p>{item.phone}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Things To Do */}
                        <div className="col-md-6">
                            <div className="things-to-do">
                                <h3 className="main-heading">Things To Do</h3>

                                <div className="main-heading-border">
                                    <span className="heading-border"></span>
                                    <span className="heading-border-content">
                                        EXPLORE MORE
                                    </span>
                                </div>

                                <div className="row">
                                    {card3.map((item) => (
                                        <div className="col-md-12 mb-4 item" key={item.id}>
                                            <div className=" item">
                                                <img
                                                    src={item.Image}
                                                    alt={item.description}
                                                    className="img-fluid"
                                                />

                                                <div className='content'>
                                                    <h5>{item.description}</h5>
                                                    <div className="mobile-address">
                                                        <a href=""><i class="fa-solid fa-phone"></i>{item.phone}</a>
                                                        <h6><i class="fa-solid fa-map"></i>{item.loction}</h6>
                                                    </div>
                                                    {/* {item.date && <p>{item.date}</p>}
                                                    {item.loction && <p>{item.loction}</p>}
                                                    {item.phone && <p>{item.phone}</p>}
                                                    {item.time && <p>{item.time}</p>} */}

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            <div className="zigzag-ima-bottom common-section">
                <figure>
                    <img src={laptopBanner} alt="" className='img-fluid' />
                </figure>
            </div>
            <div className="Mompreneur ">
                <Container>
                    <div className="row gx-5">
                        <div className="col-md-9">
                            <div className="item">
                                <h3 className="main-heading">
                                    Mom to Mompreneur
                                </h3>
                                <h5>Explore the world of endless inspiration and opportunities</h5>
                                <p>There is a common saying that says there are three kinds of human beings in this world – man, woman and a mother. A friend, confidant, teacher, nagger and boss, a complete multi-tasker, mothers have the capacity to be everywhere at once. We have compiled a list of seven women, who are not only mothers but also great leaders and entrepreneurs.</p>
                                <a href="" className="read-more-btn">KNOW MORE</a>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className=" item explore">
                                <figure>
                                    <img src={explore} alt="" />
                                </figure>
                                <h5>Explore the world of endless inspiration and opportunities</h5>
                                <ul>
                                    <li>Mompreneur </li>
                                    <li>Stories </li>
                                    <li>Featured </li>
                                </ul>
                                <div class="social-icon">
                                    <span class="heading-border"></span>
                                    <a href=""> <i class="fa-solid fa-eye"></i>806</a>
                                    <a href=""> <i class="fa-solid fa-message"></i>280</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </section>











        // <section className='event thing-to-do'>
        //     <section className="event thing-to-do">
        //         <Container>
        //             <div className="row">
        //                 {/* Events Near You */}
        //                 <div className="col-md-6">
        //                     <d iv>
        //                         <h3 className="main-heading">Events Near You</h3>

        //                         <div className="main-heading-border">
        //                             <span className="heading-border"></span>
        //                             <span className="heading-border-content">SEE ALL EVENTS</span>
        //                         </div>
        //                         aaja ve sajna ruh mein shamil tujhe kar lun
        //                         <div className="row">
        //                             {card2.map((item) => (
        //                                 <div className="col-md-6 mb-3" key={item.id}>
        //                                     <div className="event-card">
        //                                         <img
        //                                             src={item.Image}
        //                                             alt={item.description}
        //                                             className="img-fluid"
        //                                         />
        //                                         <h5>{item.description}</h5>
        //                                         {item.date && <p>{item.date}</p>}
        //                                         {item.loction && <p>{item.loction}</p>}
        //                                         {item.time && <p>{item.time}</p>}
        //                                         {item.phone && <p>{item.phone}</p>}
        //                                     </div>
        //                                 </div>
        //                             ))}
        //                         </div>
        //                     </d>
        //                 </div>

        //                 {/* Things To Do */}
        //                 <div className="col-md-6">
        //                     <div className="things-to-do">
        //                         <h3 className="main-heading">Things To Do</h3>

        //                         <div className="main-heading-border">
        //                             <span className="heading-border"></span>
        //                             <span className="heading-border-content">EXPLORE MORE</span>
        //                         </div>

        //                         <div className="row">
        //                             {card2.map((item) => (
        //                                 <div className="col-md-6 mb-3" key={item.id}>
        //                                     <div className="event-card">
        //                                         <img
        //                                             src={item.Image}
        //                                             alt={item.description}
        //                                             className="img-fluid"
        //                                         />
        //                                         <h5>{item.description}</h5>
        //                                         {item.date && <p>{item.date}</p>}
        //                                         {item.loction && <p>{item.loction}</p>}
        //                                         {item.time && <p>{item.time}</p>}
        //                                         {item.phone && <p>{item.phone}</p>}
        //                                     </div>
        //                                 </div>
        //                             ))}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </Container>
        //     </section>

















        //     <Container>
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <div>
        //                     <h3 className="main-heading">Events Near You</h3>
        //                     <div className="main-heading-border">
        //                         <span className="heading-border"></span>
        //                         <span className="heading-border-content">SEE ALL EVENTS</span>
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="col-md-6">
        //                 <div className="things-to-do">
        //                     <h3 className="main-heading">Things To Do</h3>
        //                     <div className="main-heading-border">
        //                         <span className="heading-border"></span>
        //                         <span className="heading-border-content">EXPLORE MORE</span>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Container>
        // </section>





















        // <div className='common-section main-events-near zigzag-ima-top'>
        //     <Container>
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <div>
        //                     <h3 className="main-heading">Events Near You</h3>
        //                     <div className="main-heading-border">
        //                         <span className="heading-border"></span>
        //                         <span className="heading-border-content">SEE ALL EVENTS</span>
        //                     </div>
        //                 </div>
        //                 <div className="item pb-4">
        //                     <figure><img src={noNaan} alt="" /></figure>
        //                     <div className="content">
        //                         <h5>No Naan-Sense! Get Unlimited Kebabs For INR 599 At This Middle Eastern Restaurant</h5>

        //                         <ul>
        //                             <li><i className="fa-solid fa-calendar-days"></i>24 Sep - 31 Oct</li>
        //                             <li><i className="fa-solid fa-map"></i>Baris</li>

        //                         </ul>
        //                         <ul className="last-li">
        //                             <li><i className="fa-solid fa-clock"></i>5:00 PM Onwards</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //                 <div className="item">
        //                     <figure> <img src={headUp} alt="" /></figure>
        //                     <div className="content">
        //                         <h5>Heads Up: The Passes For Pet Fed 2018 Are Finally Here!</h5>

        //                         <ul>
        //                             <li><i className="fa-solid fa-calendar-days"></i>24 Sep - 31 Oct</li>
        //                             <li><i className="fa-solid fa-map"></i>Baris</li>

        //                         </ul>
        //                         <ul className="last-li">
        //                             <li><i className="fa-solid fa-clock"></i>3:00 to 8:00 PM</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-6">
        //                 <div className="things-to-do">
        //                     <h3 className="main-heading">Things To Do</h3>
        //                     <div className="main-heading-border">
        //                         <span className="heading-border"></span>
        //                         <span className="heading-border-content">EXPLORE MORE</span>

        //                     </div>
        //                 </div>
        //                 <div className="item pb-4">
        //                     <figure><img src={kids} alt="" /></figure>
        //                     <div className="content">
        //                         <h5>Kids’ Very Own Everyday Stage! Playground Creative House Is The First Ever Kids Open Mic
        //                             Space In Delhi</h5>

        //                         <div className="mobile-address">
        //                             <a href=""><i className="fa-solid fa-phone"></i>097117 94596</a>

        //                             <h6><i className="fa-solid fa-map"></i>SDA Market, New Delhi</h6>

        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className="item">
        //                     <figure><img src={minion} alt="" /></figure>
        //                     <div className="content">
        //                         <h5>This Minions Themed Café Will Make Your Kids Blabber With Joy</h5>

        //                         <div className="mobile-address">
        //                             <a href="tel:7499993157"><i className="fa-solid fa-phone"></i>096546 27167</a>
        //                             <h6><i className="fa-solid fa-map"></i>712, West Guru Angad Nagar, Laxmi Nagar, New Delhi
        //                             </h6>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Container>
        // </div>
    )
}
