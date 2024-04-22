/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useRouter } from "next/router"
import styles from "../../styles/broker.module.css"
import Nav from "@/components/Nav";
import Image from "next/image";
import { useState, useEffect } from "react"
import axios from "axios";
export default function BrokerInfo() {
    const router = useRouter();
    const [brokerInfo, setbrokerInfo] = useState({});
    useEffect(() => {
        getBrokerData();
    }, [])
    async function getBrokerData(){
        const resp = await axios.get(`http://localhost:8000/brokerData/${router.query.info}`)
        if(resp && resp.data){
            console.log(resp.data[0])
            setbrokerInfo(resp.data[0]);
        }
    }
    console.log(router.query.info,brokerInfo)
    const reviews = [{
        reviewer: "Emily Garcia",
        review: "My experience with Miranda was, unfortunately, disappointing. She seemed more interested in making a quick sale than understanding my needs. Michael pressured me to put offers on properties that weren't a good fit, and his communication was inconsistent. I ended up finding a house on my own.",
        rating: "2"
    }, {
        reviewer: "Daniel Robinson",
        review: "Dr. Jane Peterson at [Brokerage Name] is a true specialist in luxury real estate. Her knowledge of the high-end market was invaluable in helping me sell my waterfront property. Jane's marketing strategies were top-notch, and she secured multiple offers above asking price. I wouldn't trust anyone else for a luxury sale.",
        rating: "5"
    }, {
        reviewer: "David Lee",
        review: "Miranda was a real go-getter. She hustled hard to find me the perfect investment property, even in a competitive market. Ashley was very responsive and kept me updated throughout the entire process. However, I felt she could have provided a bit more guidance on the financial aspects of the deal.",
        rating: "4"
    }]
    return (
        <div>
            <Nav />
            <div className={styles.broinfo}>
                <Image className={styles.broimage} src={brokerInfo.image} width={100} height={100} alt="bedroom"></Image>
                <div>
                    <p className={styles.broname}>{brokerInfo.name}</p>
                    <p className={styles.brotype}>{brokerInfo.type}</p>
                </div>
                <button onClick={() => { router.push("/home/home") }} className={styles.brobook}>Show listed properties</button>
            </div>
            <div className={styles.brorevlis}>
                <p className={styles.broname}>Reviews</p>
                <div>
                    {reviews.map((e) => {
                        return (
                            <div className={styles.reviewdiv} key={Math.random() * 100000}>
                                <p>{e.review}</p>
                                <div className={styles.reviewer}>
                                    <p className={styles.stars}>{e.rating}⭐</p>
                                    <p className={styles.reviewrname}>{e.reviewer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}