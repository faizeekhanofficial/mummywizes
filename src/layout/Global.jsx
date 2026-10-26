import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import globalPic1 from "../assets/images/global-wizes-pic1.png"
import globalPic2 from "../assets/images/global-wizes-pic2.png"
import globalPic3 from "../assets/images/global-wizes-pic3.png"
import globalPic4 from "../assets/images/global-wizes-pic4.png"

const cardGlobal = [
    {
        id: 1,
        image: globalPic1,
        title: "Raising A Son In The Era Of #MeToo",
        tag: "Toddlers / Kids Essentials",
        button: "READ MORE",
        veiw: "1003",
        comment: "704"
    },
    {
        id: 2,
        image: globalPic2,
        title: "Why Cow's Milk Is Not Suitable For Your Infant",
        tag: "Toddlers / Kids Essentials",
        button: "READ MORE",
        veiw: "1003",
        comment: "704"
    },
    {
        id: 3,
        image: globalPic3,
        title: "List For New Moms: What To Buy",
        tag: "Toddlers / Kids Essentials",
        button: "READ MORE",
        veiw: "1003",
        comment: "704"
    },
    {
        id: 4,
        image: globalPic4,
        title: "10 Things I Wish I Did Before I Became Mom",
        tag: "Toddlers / Kids Essentials",
        button: "READ MORE",
        veiw: "1003",
        comment: "704"
    }
]

export const Global = () => {
    return (
        <section className='common-section global-wizes'>
            <Container>
                <h3 className="main-heading">Global Wizes</h3>
                <div className="main-heading-border">
                    <span className="heading-border"></span>
                    <span className="heading-border-content">SEE ALL POSTS</span>
                </div>
                <Row>
                    {cardGlobal.map((item) => (
                        <Col lg={3} md={6} xs={12} key={item.id}>
                            <div className="item">
                                <img src={item.image} alt={item.title} />
                                <div className="content">
                                    <h6>{item.title}</h6>
                                    <div className="main-ul">
                                        <ul>
                                            <li>Toddlers</li>
                                            <li>Kids Essentials</li>

                                        </ul>
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </div>
                                    <span className="content-border"></span>
                                    <div className="social-icon">
                                        <a href="" className="read-more-btn">READ MORE</a>
                                        <div className="read-more-icon"> <a href=""> <i className="fa-solid fa-eye"></i>1003</a>
                                            <a href=""> <i className="fa-solid fa-message"></i>704</a></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))

                    }
                </Row>
            </Container>
        </section>
    )
}
