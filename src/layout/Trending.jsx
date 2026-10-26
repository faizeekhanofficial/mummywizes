import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import trending1 from "../assets/images/trending-wizes-1.jpg";
import trending2 from "../assets/images/trending-wizes-2.jpg";
import trending3 from "../assets/images/trending-wizes-3.jpg"
import trending4 from "../assets/images/trending-wizes-4.jpg"

const cards = [
    {
        id: 1,
        image: trending1,
        category: "EDITORS PICK",
        title: "10 Life-Changing Books that Will Stay With You Forever",
        tag: "Mumslife / Life Style",
        description: "Head to the library or fire up your Kindle - it’s time to get inspired with this list of best books to read.",
        view: "1003",
        comments: "70"


    },
    {
        id: 2,
        image: trending2,
        category: "MOMPRENEUR",
        title: "Meet Suchi Mukherjee, Founder And CEO Of LimeRoad",
        tag: "Mompreneur / Stories",
        description: "Head to the library or fire up your Kindle - it’s time to get inspired with this list of best books to read.",
        view: "807",
        comments: "280"


    },
    {
        id: 3,
        image: trending3,
        category: "TOP ARTICLE",
        title: "Top Sports for Kids and Benefits that come from playing them.",
        tag: "Kids / Kids Activities",
        description: "Head to the library or fire up your Kindle - it’s time to get inspired with this list of best books to read.",
        view: "1600",
        comments: "170"


    },
    {
        id: 4,
        image: trending4,
        category: "LATEST ARTICLE",
        title: "Day School Versus Boarding School – Which Should I Choose?",
        tag: "Kids / Education",
        description: "While some may say that boarding schools aren’t the way to go, the rising number of nuclear families in India is on the rise. In the metro cities, that statistics is easily around 70% of all households. Taking the rise of women working in the labour-force, the amount of time spent with a child diminishes significantly, while the child’s quality of life increases. Also,the inter-personal relations and communication between parents have a major impact on children as they are most susceptible to impressions at an early age and these stay on for a lifetime.",
        view: "403",
        comments: "137"


    },
]

export const Trending = () => {
    return (



        <section className='common-section trending-wizes'>
            <Container >
                <h2 className='main-heading'>Trending Wizes</h2>
                <div className="main-heading-border">
                    <span className='heading-border'></span>
                    <span className="heading-border-content">EXPLORE MORE</span>
                </div>
                <Row className="g-3">
                    {cards.map((item, index) => (
                        <Col lg={3} md={6} xs={12} key={item.id}>
                            <article className={`trend-card ${index === 1 ? "featured" : ""}`}>
                                <div className="item">
                                    <img src={item.image} alt={item.title} />


                                    <div className="social-icon-content">
                                        <div className="social-icon">
                                            <button className='icon-Btn'>
                                                <i className="fa-solid fa-star inside-icon"></i>
                                                EDITORS PICK

                                            </button>
                                            <i className="fa-solid fa-share-nodes outside-icon"></i>
                                        </div>
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <ul>
                                                <li>Mumslife</li>
                                                <li> Life Style</li>
                                            </ul>

                                            <div className="cyan-line"></div>

                                            <p>{item.description}</p>

                                            <div className="main-read-more">
                                                <a href="" className="read-more-btn">READ MORE</a>
                                                <div className="read-more-icon">
                                                    <a href=""><i className="fa-solid fa-eye"></i>1003</a>
                                                    <a href=""><i className="fa-solid fa-message"></i>704</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </article>
                        </Col>
                    ))}
                </Row>
            </Container>

























        </section>










        // <div className='common-section trending-wizes'>
        //     <Container>
        //         <div>
        //             <div >
        //                 <h3 className="main-heading">Trending-wizes</h3>
        //                 <div className="main-heading-border">
        //                     <span className="heading-border"></span>
        //                     <span className="heading-border-content">EXPLORE MORE</span>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col-sm-3">
        //                     <div className="item">
        //                         <figure><img src={trending1} alt="" /></figure>
        //                         <div className="social-icon-content">
        //                             <div className="social-icon">
        //                                 <button className='icon-Btn'>
        //                                     <i class="fa-solid fa-star inside-icon"></i>
        //                                     EDITORS PICK

        //                                 </button>
        //                                 <i class="fa-solid fa-share-nodes outside-icon"></i>
        //                             </div>
        //                             <div className="content">
        //                                 <h4>10 Life-Changing Books that Will Stay With You Forever</h4>
        //                                 <ul>
        //                                     <li>Mumslife</li>
        //                                     <li>Life Style</li>
        //                                 </ul>
        //                                 <span className="content-border"></span>
        //                                 <p>Head to the library or fire up your Kindle - it’s time to get inspired with this list of best books to read.</p>
        //                                 <div className="main-read-more">
        //                                     <a href="" className="read-more-btn">READ MORE</a>
        //                                     <div className="read-more-icon">
        //                                         <a href=""><i class="fa-solid fa-eye"></i>1003</a>
        //                                         <a href=""><i class="fa-solid fa-message"></i>704</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         <div />
        //                     </div>
        //                 </div>

        //                 <div className="col-sm-3">
        //                     <div className="item">
        //                         <figure><img src={trending2} alt="" className='img-fluid' /></figure>
        //                         <div className="social-icon-content">
        //                             <div className="social-icon">
        //                                 <button className='icon-Btn'>
        //                                     <i class="fa-solid fa-star inside-icon"></i>
        //                                     MOMPRENEUR

        //                                 </button>
        //                                 <i class="fa-solid fa-share-nodes outside-icon"></i>
        //                             </div>
        //                             <div className="content">
        //                                 <h4>Meet Suchi Mukherjee, Founder And CEO Of LimeRoad</h4>
        //                                 <ul>
        //                                     <li>Mompreneur</li>
        //                                     <li>Stories</li>
        //                                 </ul>
        //                                 <span className="content-border"></span>
        //                                 <p>Head to the library or fire up your Kindle - it’s time to get inspired with this list of best books to read.</p>
        //                                 <div className="main-read-more">
        //                                     <a href="" className="read-more-btn">READ MORE</a>
        //                                     <div className="read-more-icon">
        //                                         <a href=""><i class="fa-solid fa-eye"></i>806</a>
        //                                         <a href=""><i class="fa-solid fa-message"></i>280</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className="col-sm-3">
        //                     <div className="item">
        //                         <figure><img src={trending3} alt="" /></figure>
        //                         <div className="social-icon-content">
        //                             <div className="social-icon">
        //                                 <button className='icon-Btn'>
        //                                     <i class="fa-solid fa-star inside-icon"></i>
        //                                     TOP ARTICLE

        //                                 </button>
        //                                 <i class="fa-solid fa-share-nodes outside-icon"></i>
        //                             </div>
        //                             <div className="content">
        //                                 <h4>Top Sports for Kids and Benefits that come from playing them.</h4>
        //                                 <ul>
        //                                     <li>Kids</li>
        //                                     <li>Kids Activities</li>
        //                                 </ul>
        //                                 <span className="content-border"></span>
        //                                 <p>Head to the library or fire up your Kindle - it’s time to get inspired with this list of best books to read.</p>
        //                                 <div className="main-read-more">
        //                                     <a href="" className="read-more-btn">READ MORE</a>
        //                                     <div className="read-more-icon">
        //                                         <a href=""><i class="fa-solid fa-eye"></i>1003</a>
        //                                         <a href=""><i class="fa-solid fa-message"></i>704</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className="col-sm-3">
        //                     <div className="item">
        //                         <figure><img src={trending4} alt="" /></figure>
        //                         <div className="social-icon-content">
        //                             <div className="social-icon">
        //                                 <button className='icon-Btn'>
        //                                     <i class="fa-solid fa-star inside-icon"></i>
        //                                     LATEST ARTICLE

        //                                 </button>
        //                                 <i class="fa-solid fa-share-nodes outside-icon"></i>
        //                             </div>
        //                             <div className="content">
        //                                 <h4>Day School Versus Boarding School – Which Should I Choose?</h4>
        //                                 <ul>
        //                                     <li>Mumslife</li>
        //                                     <li>Life Style</li>
        //                                 </ul>
        //                                 <span className="content-border"></span>
        //                                 <p>While some may say that boarding schools aren’t the way to go, the rising number of nuclear families in India is on the rise. In the metro cities, that statistics is easily around 70% of all households. Taking the rise of women working in the labour-force, the amount of time spent with a child diminishes significantly, while the child’s quality of life increases.

        //                                     Also,the inter-personal relations and communication between parents have a major impact on children as they are most susceptible to impressions at an early age and these stay on for a lifetime.</p>
        //                                 <div className="main-read-more">
        //                                     <a href="" className="read-more-btn">READ MORE</a>
        //                                     <div className="read-more-icon">
        //                                         <a href=""><i class="fa-solid fa-eye"></i>403</a>
        //                                         <a href=""><i class="fa-solid fa-message"></i>137</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </Container>

        // </div>
    )
}

