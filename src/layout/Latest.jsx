import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import latest1 from "../assets/images/latest-air-travel.png"
import latestVandana from "../assets/images/latest-item-vandana.png"
import latest2 from "../assets/images/latest-baby.png"
import latestPriya from "../assets/images/latest-item-priya.png"
import latest3 from "../assets/images/latest-creating.png"
import latestRekha from "../assets/images/latest-item-rekha.png"
import latest4 from "../assets/images/latest-sleep.png"
import latestTina from "../assets/images/latest-item-tina.png"


const cardLatest = [
    {
        id: 1,
        Image: latest1,
        title: "Have A Stress-Free Air Travel With A Toddler",
        category: "Babies / Kids Essentials",
        button: "READ MORE",
        views: "1003",
        likes: "704",
        author: latestVandana,
        name: "Posted by Vandana Saxena",
        articles: "44",

    },
    {
        id: 2,
        Image: latest2,
        title: "Have A Stress-Free Air Travel With A Toddler",
        category: "Babies / Kids Essentials",
        button: "READ MORE",
        views: "1003",
        likes: "704",
        author: latestPriya,
        name: "Posted by Priya Avula",
        articles: "72",

    },
    {
        id: 3,
        Image: latest3,
        title: "Have A Stress-Free Air Travel With A Toddler",
        category: "Babies / Kids Essentials",
        button: "READ MORE",
        views: "1003",
        likes: "704",
        author: latestRekha,
        name: "Posted by Rekha Mordani",
        articles: "51",

    },
    {
        id: 4,
        Image: latest4,
        title: "Have A Stress-Free Air Travel With A Toddler",
        category: "Babies / Kids Essentials",
        button: "READ MORE",
        views: "1003",
        likes: "704",
        author: latestTina,
        name: "Posted by Tina Sequeira",
        articles: "83",

    },
]

export const Latest = () => {
    return (
        <section className='common-section latest-post'>
            <Container>
                <h3 className="main-heading">Latest Posts</h3>

                <div className="main-heading-border">
                    <span className="heading-border"></span>
                    <span className="heading-border-content">
                        SEE ALL CONTRIBUTED POSTS
                    </span>
                </div>

                <Row>
                    {cardLatest.map((item) => (
                        <Col lg={3} md={6} xs={12} key={item.id}>
                            <div className="item">
                                <img
                                    src={item.Image}
                                    alt={item.title}
                                    className="img-fluid"
                                />

                                <div className="content">
                                    <h5>{item.title}</h5>
                                    <div className="main-ul">
                                        <ul>
                                            <li>Kids </li>

                                            <li>Kids Development</li>
                                        </ul>
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </div>
                                    <span class="content-border"></span>
                                    <div className="social-icon">
                                        <a href="" className="read-more-btn">READ MORE</a>
                                        <div className="read-more-icon">
                                            <a href=""><i className="fa-solid fa-eye"></i>1007</a>
                                            <a href=""><i className="fa-solid fa-heart"></i>704</a>

                                        </div>
                                    </div>
                                    <span class="social-icon-border"></span>
                                    <div className="inner-content">
                                        <img
                                            src={item.author}
                                            alt=""

                                        />
                                        <h6>{item.name}</h6>
                                        <span>{item.articles} Articles</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>


    )
}
