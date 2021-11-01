import React, { useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import packageImg4 from '../../images/packageImg4.jpg'
import packageImg5 from '../../images/packageImg5.jpg'
import packageImg6 from '../../images/packageImg6.jpg'
import { addToDb } from '../../utilities/fakedb';
import SideBar from '../SideBar/SideBar';
import './PackageDetails.css'

const PackageDetails = () => {
    const [keyToggle, setKeyToggle] = useState('description');
    const { packageKey } = useParams()
    const [packageDetails, setPackageDetails] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageKey}`)
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [])
    const { key, name, location, days, country, price, img1, img2, img3 } = packageDetails || {};
    const handleAddToCart = () => {
        addToDb(key)
    }
    return (
        <div className="bg-eee">
            <div className="container mx-auto row pt-4">
                <div className="col-12 col-md-9 px-0">
                    <div className="">
                        <img src={img2} className="img-fluid" alt="" />
                    </div>
                    <div className="row mt-2 px-2">
                        <div className="col-2 px-1">
                            <img src={img1} className="img-fluid" alt="" />
                        </div>
                        <div className="col-2 px-1">
                            <img src={img2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-2 px-1">
                            <img src={img3} className="img-fluid" alt="" />
                        </div>
                        <div className="col-2 px-1">
                            <img src={packageImg4} className="img-fluid" alt="" />
                        </div>
                        <div className="col-2 px-1">
                            <img src={packageImg5} className="img-fluid" alt="" />
                        </div>
                        <div className="col-2 px-1">
                            <img src={packageImg6} className="img-fluid" alt="" />
                        </div>
                    </div>
                    {/* service details */}
                    <div className="my-3">
                        <Tab.Container id="controlled-tab-example" activeKey={keyToggle} onSelect={(k) => setKeyToggle(k)}>
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className="arrow">
                                            <Nav.Link eventKey="description" className={keyToggle === "description" ? "tab-style-active" : "tab-style"}>Description</Nav.Link>
                                        </Nav.Item>
                                        <hr className="my-0 mx-1" />
                                        <Nav.Item>
                                            <Nav.Link eventKey="facilities" className={keyToggle === "facilities" ? "tab-style-active" : "tab-style"}>Facilities</Nav.Link>
                                        </Nav.Item>
                                        <hr className="my-0 mx-1" />
                                        <Nav.Item>
                                            <Nav.Link eventKey="availability" className={keyToggle === "availability" ? "tab-style-active" : "tab-style"}>Availability</Nav.Link>
                                        </Nav.Item>
                                        <hr className="my-0 mx-1" />
                                        <Nav.Item>
                                            <Nav.Link eventKey="location" className={keyToggle === "location" ? "tab-style-active" : "tab-style"}>Location</Nav.Link>
                                        </Nav.Item>
                                        <hr className="my-0 mx-1" />
                                        <Nav.Item>
                                            <Nav.Link eventKey="reviews" className={keyToggle === "reviews" ? "tab-style-active" : "tab-style"}>Reviews</Nav.Link>
                                        </Nav.Item>
                                        <hr className="my-0 mx-1" />
                                        <Nav.Item>
                                            <Nav.Link eventKey="finePrint" className={keyToggle === "finePrint" ? "tab-style-active" : "tab-style"}>Fine Print</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="description">
                                            <div className="bg-white p-3 rounded shadow">
                                                <h3>{name}</h3>
                                                <p>Courage of our questions cosmic ocean hearts of the stars something incredible is waiting to be known extraplanetary venture? Citizens of distant epochs a very small stage in a vast cosmic arena Rig Veda muse about stirred by starlight dispassionate extraterrestrial observer. Stirred by starlight star stuff harvesting star light from which we spring invent the universe tendrils of gossamer clouds encyclopaedia galactica? Orion's sword Sea of Tranquility vanquish the impossible the carbon in our apple pies hundreds of thousands invent the universe? Stirred by starlight another world the ash of stellar alchemy rings of Uranus Rig Veda culture. At the edge of forever dream of the mind's eye encyclopaedia galactica network of wormholes vastness is bearable only through love corpus callosum. Globular star cluster citizens of distant epochs something incredible is waiting to be known extraordinary claims require extraordinary evidence kindling the energy hidden in matter rich in mystery. Concept of the number one shores of the cosmic ocean concept of the number one courage of our questions a very small stage in a vast cosmic arena finite but unbounded.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="facilities">
                                            <div className="bg-white p-3 rounded shadow">
                                                <h3>Facilities</h3>
                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        <ul>
                                                            <li>24/7 reception</li>
                                                            <li>Beach volleyball court</li>
                                                            <li>Café</li>
                                                            <li>Currency exchange</li>
                                                            <li>Evening entertainment</li>
                                                            <li>Kids' pool</li>
                                                            <li>Mini-golf</li>
                                                            <li>Pizzeria</li>
                                                            <li>Sun terrace with sun-loungers</li>
                                                            <li>Tennis court</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <ul>
                                                            <li>Beach snack bar</li>
                                                            <li>Buffet breakfast</li>
                                                            <li>Cakes served 3pm-5pm</li>
                                                            <li>Drinks served 10am-midnight</li>
                                                            <li>Indoor heated pool (winter)</li>
                                                            <li>lunch and dinner</li>
                                                            <li>Outdoor freshwater pool</li>
                                                            <li>Playground</li>
                                                            <li>Table tennis</li>
                                                            <li>Wi-Fi</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="availability">
                                            <div className="bg-white p-3 rounded shadow">
                                                <h3>Availability</h3>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <div className="row mb-3">
                                                    <div className="col-12 col-md-8">
                                                        <h4>All Inclusive Double Room</h4>
                                                        <p>The only home we've ever known with pretty stories.</p>
                                                    </div>
                                                    <div className="col-12 col-md-4 ps-3 border-start">
                                                        <p>Max: 3</p>
                                                        <p>From $649</p>
                                                        <Link to="/cart">
                                                            <button className="btn shadow-none custom-btn py-2 rounded-pill w-100">Book Now</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <p>Room facilities:Air-conditioning, Free toiletries, Mini fridge, Private bathroom with shower, Satellite TV, Wi-Fi</p>
                                                <p>Bed size:1 King Bed</p>
                                                <p>Room size:270 sq ft</p>
                                                <p>Corpus callosum Sea of Tranquility cosmic fugue brain is the seed of intelligence Orion’s sword not a sunrise but a galaxyrise. </p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="location">
                                            <div className="bg-white p-2 rounded shadow">
                                                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9539000539316!2d73.07785763394246!3d5.1111330106603425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7e453637971b%3A0xf4c4246ce486860a!2sSoneva%20Fushi!5e0!3m2!1sen!2sbd!4v1635523283486!5m2!1sen!2sbd" className="w-100 rounded" height="500px" allowfullscreen="" loading="lazy"></iframe>
                                                <div className="mt-2">
                                                    <h3>About the location</h3>
                                                    <p>Stirred by starlight star stuff harvesting star light from which we spring invent the universe tendrils of gossamer clouds encyclopaedia galactica? Orion's sword Sea of Tranquility vanquish the impossible the carbon in our apple pies hundreds of thousands invent the universe</p>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="reviews">
                                            <div className="bg-white p-3 rounded shadow">
                                                <p>We are sorry, there are no reviews yet for this accommodation.</p>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="finePrint">
                                            <div className="bg-white p-3 rounded shadow">
                                                <div>
                                                    <h3>What's included</h3>
                                                    <p>Globular star cluster citizens of distant epochs something incredible is waiting to be known extraordinary claims require extraordinary evidence kindling the energy hidden in matter rich in mystery.</p>
                                                </div>
                                                <div>
                                                    <h3>Cancellation / Prepayment</h3>
                                                    <p>Corpus callosum Sea of Tranquility cosmic fugue brain is the seed of intelligence Orion's sword not a sunrise but a galaxyrise. The carbon in our apple pies intelligent beings astonishment extraordinary claims require extraordinary evidence prime number invent the universe.</p>
                                                </div>
                                                <div>
                                                    <h3>Children and extra beds</h3>
                                                    <p>Tendrils of gossamer clouds a still more glorious dawn awaits finite but unbounded inconspicuous motes of rock and gas white dwarf paroxysm of global death. Permanence of the stars from which we spring preserve and cherish that pale blue dot the only home we've ever known network of wormholes extraordinary claims require extraordinary evidence.</p>
                                                </div>
                                                <div>
                                                    <h3>Pets</h3>
                                                    <p>Stirred by starlight another world the ash of stellar alchemy rings of Uranus Rig Veda culture. At the edge of forever dream of the mind's eye encyclopaedia galactica network of wormholes vastness is bearable only through love corpus callosum.</p>
                                                </div>
                                                <div>
                                                    <h3>Accepted credit cards</h3>
                                                    <p>Globular star cluster citizens of distant epochs something incredible is waiting to be known extraordinary claims require extraordinary evidence kindling the energy hidden in matter rich in mystery.</p>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
                {/* sidebar */}
                <div className="col-12 col-md-3">
                    <div className="rounded shadow sidebar bg-white p-3 mb-3">
                        <h4>{name}</h4>
                        <small>{location}</small>
                        <hr />
                        <p>From $ {price}</p>
                        <hr />
                        <p>{days}</p>
                        <p>{country}</p>
                        <hr />
                        <span>Adults Only</span>
                        <span>All Inclusive</ span>
                        <span>Summer 2021</span>
                        <div className="mt-3">
                            <Link to="/cart">
                                <button onClick={handleAddToCart} className="btn shadow-none custom-btn py-3 w-100 rounded-pill py-2">Book Now</button>
                            </Link>
                        </div>
                    </div>
                    <SideBar></SideBar>
                </div>

            </div >
        </div >
    );
};

export default PackageDetails;