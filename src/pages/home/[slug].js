"use client"
import { useRouter } from "next/router"
import styles from "../../styles/homedetails.module.css"
import Nav from "@/components/Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
export default function HomeDetails() {
    const router = useRouter();
    // console.log(router.query.slug)
    // console.log(router);
    const [brokerData, setBrokerData] = useState([{
        "id": "407d9dd5-53c8-4c5c-8580-23c9b92e66d3",
        "name": "Sam",
        "type": "Prinipal Agent",
        "ratings": 3,
        "properties": 2,
        "image": "/download2.jpg"
    }, {
        "id": "2b295882-4662-4187-9d02-1f941294266e",
        "name": "Jack",
        "type": "Prinipal Agent",
        "ratings": 4,
        "properties": 1,
        "image": "/download.jpg"
    }, {
        "id": "0cb33a04-6d80-45b8-8b1a-108d086cbc1e",
        "name": "Samuel",
        "type": "Prinipal Agent",
        "ratings": 4,
        "properties": 7,
        "image": "/image2.jpg"
    }, {
        "id": "edcb3a69-f80e-4ffd-9223-15e4412cebb6",
        "name": "Miranda",
        "type": "Prinipal Agent",
        "ratings": 2,
        "properties": 8,
        "image": "/image.jpg"
    }]);
    // const brokerData = [{
    //     id: "Broker 1",
    //     name: "Sam",
    //     type: "Prinipal Agent",
    //     ratings: 3,
    //     properties: 2,
    //     image: "/download2.jpg"
    // }, {
    //     id: "Broker 2",
    //     name: "Jack",
    //     type: "Prinipal Agent",
    //     ratings: 4,
    //     properties: 1,
    //     image: "/download.jpg"
    // }, {
    //     id: "Broker 3",
    //     name: "Samuel",
    //     type: "Prinipal Agent",
    //     ratings: 4,
    //     properties: 7,
    //     image: "/image2.jpg"
    // }, {
    //     id: "Broker 4",
    //     name: "Miranda",
    //     type: "Prinipal Agent",
    //     ratings: 2,
    //     properties: 8,
    //     image: "/image.jpg"
    // }]
    useEffect(() => {
        getBrokerData();
    }, [])
    async function getBrokerData() {
        try {
            const data = await axios.get("http://localhost:8000/brokerData");
            console.log(data.data);
            if (data.data && data.data.length > 0) {
                setBrokerData(data.data)
            }
        } catch (err) {

        }
    };
    return (
        <>
            <Nav />
            <div className={styles.main}>
                <div className={styles.locinfo}>
                    <p>Property Reference Number: <span className={styles.locid}>101256</span></p>
                    <p className={styles.name}>Deals Gateway, London, SE13</p>
                    <div className={styles.amenities}>
                        <div className={styles.studimains}>
                            <Image src="/Apartment.svg" height={20} width={20} alt="bedroom"></Image>
                            <p>Single Level</p>
                        </div>
                        <div className={styles.studimains}>
                            <Image src="/bedrooms.svg" height={20} width={20} alt="bedroom"></Image>
                            <p>Studio</p>
                        </div>
                        <div className={styles.studimains}>
                            <Image src="/bath.svg" height={20} width={20} alt="1 bathroom"></Image>
                            <p className={styles.bath}>1 Bath</p></div>
                    </div>
                </div>
                <div className={styles.houseimde}>
                    <div className={styles.houseimde1}>
                        <Image className={styles.mainimage} src="/h1.webp" width={300} height={400} alt="bedroom"></Image>
                    </div>
                    <div className={styles.houseimde2}>
                        <Image className={styles.minimage} src="/h2.webp" width={300} height={400} alt="bedroom"></Image>
                        <Image className={styles.minimage} src="/h3.webp" width={300} height={400} alt="bedroom"></Image>
                        <Image className={styles.minimage} src="/h4.webp" width={300} height={400} alt="bedroom"></Image>
                        <Image className={styles.minimage} src="/h5.webp" width={300} height={400} alt="bedroom"></Image>
                    </div>

                </div>
                <div className={styles.brokerdiv}>
                    {brokerData.map((e) => {
                        return (
                            <div key={e.broker_id} onClick={() => { router.push(`/broker/${e.broker_id}`) }} className={styles.brokerinfo}>
                                <Image className={styles.broimage} src={e.image} width={100} height={100} alt="bedroom"></Image>
                                <div className={styles.broinfo}>
                                    <p className={styles.broname}>{e.name}</p>
                                    <p className={styles.brotype}>{e.type}</p>
                                </div>
                                <p className={styles.brorat}>{e.ratings} Reviews</p>
                                <p className={styles.brorat}>{e.properties} Properties Listed</p>
                                <p className={styles.bromessage}>Message Agent</p>
                                <button className={styles.brobook}>Book Viewing</button>
                            </div>
                        )
                    })}
                </div>
                <p className={styles.heading}>Amenities</p>
                <div className={styles.require}>

                    <div className={styles.brokerinfo}>
                        <Image className={styles.brosimage} src="/school.svg" width={100} height={100} alt="bedroom"></Image>
                        <p className={styles.brosrat}><span className={styles.locid}>3.3</span> Miles</p>
                    </div>
                    <div className={styles.brokerinfo}>
                        <Image className={styles.brosimage} src="/bus.svg" width={100} height={100} alt="bedroom"></Image>
                        <p className={styles.brosrat}><span className={styles.locid}>2.3</span> Miles</p>
                    </div>
                    <div className={styles.brokerinfo}>
                        <Image className={styles.brosimage} src="/airport.svg" width={100} height={100} alt="bedroom"></Image>
                        <p className={styles.brosrat}><span className={styles.locid}>13.2</span> Miles</p>
                    </div>
                    <div className={styles.brokerinfo}>
                        <Image className={styles.brosimage} src="/railway.svg" width={100} height={100} alt="bedroom"></Image>
                        <p className={styles.brosrat}><span className={styles.locid}>12.4</span> Miles</p>
                    </div>
                    <div className={styles.brokerinfo}>
                        <Image className={styles.brosimage} src="/hospital.svg" width={100} height={100} alt="bedroom"></Image>
                        <p className={styles.brosrat}><span className={styles.locid}>7.5</span> Miles</p>
                    </div>
                    <div className={styles.brokerinfo}>
                        <Image className={styles.brosimage} src="/vegetables.svg" width={100} height={100} alt="bedroom"></Image>
                        <p className={styles.brosrat}><span className={styles.locid}>1.1</span> Miles</p>
                    </div>
                </div>
            </div>
        </>
    )
}