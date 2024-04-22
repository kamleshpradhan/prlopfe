"use client";
import styles from "../../styles/page.module.css"
import Nav from "@/components/Nav"
import { useState,useEffect } from "react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Test() {
    const [show, setShow] = useState(true);
    const [houseData,setHouseData] = useState([]);
    const router = useRouter();

    function handleAllow() {
        setShow(false);
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        });
    }

    function handleclose() {
        setShow(false);
    }
    useEffect(()=>{
        getHouseData();
    },[])
    async function getHouseData(){
        const data = await axios.get("http://localhost:8000/houseData");
        console.log(data.data);
        if(data.data && data.data.length >0){
            setHouseData(data.data)
        }
    };

    // const houseData = [{
    //     img: "/image.webp",
    //     location: "Deals Gateway, London,",
    //     price: "£1500",
    //     available: "Available from 3rd May 2024"
    // }, {
    //     img: "/image1.webp",
    //     location: "Lampton Road, Hounslow,",
    //     price: "£2000",
    //     available: "Under Offer"
    // }, {
    //     img: "/image2.webp",
    //     location: "Yiewsley, West Drayton, UB7",
    //     price: "£2500",
    //     available: "Available from 27th June 2024"
    // }, {
    //     img: "/image3.webp",
    //     location: "St. Stephens Road, West Drayt",
    //     price: "£2000",
    //     available: "Under Offer"
    // }, {
    //     img: "/image4.webp",
    //     location: "Michigan Building, London,",
    //     price: "£1800",
    //     available: "Available Now"
    // }, {
    //     img: "/image5.webp",
    //     location: "Marsh Wall, London",
    //     price: "£1700",
    //     available: "Under Offer"
    // }]
    return (
        <>
            <Nav></Nav>
            {show ?
                <div className={styles.permissionbox}>
                    <div className={styles.prmbx1}>
                        <p>We would like to access you location. To show you near by available houses.</p>
                        <button onClick={handleAllow}>Allow Access</button>
                    </div>
                    <hr />
                    <div className={styles.prmbx1}>
                        <p>To search manually please press the close button.</p>
                        <button onClick={handleclose}>Close</button>
                    </div>
                </div> :
                <div className={styles.menu}>
                    <div className={styles.filters}>
                        <input className={styles.searchinp} placeholder="🔍 London"></input>
                        <select className={styles.select} >
                            <option value="rent">To Rent</option>
                            <option value="sale">For Sale</option>
                        </select>
                        <select className={styles.select}>
                            <option value="price">Price</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <select className={styles.select}>
                            <option value="beds">Beds</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <select className={styles.select}>
                            <option value="Home">Home</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <select className={styles.select}>
                            <option value="sortby">Sort by</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                        <select className={styles.select}>
                            <option value="more">More</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className={styles.price}>
                        <div className={styles.pricebox}><p> Min - £1000 </p></div>
                        <div className={styles.pricebox}><p> Median - £3000 </p></div>
                        <div className={styles.pricebox}><p> Max - £10000 </p></div>
                    </div>
                    <div className={styles.detailsdiv}>
                        <div className={styles.gridh}>
                            {houseData.map((e) => {
                                return (
                                    <div onClick={()=>router.push("/home/1")} className={styles.box} key={Math.random() * 1000000}>
                                        <div className={styles.availStats}>
                                            <p>{e.available}</p>
                                        </div>
                                        <Image className={styles.houseimg} src={e.image} height={100} width={100} alt="house"></Image>
                                        <div className={styles.houseinfo}>
                                            <p><span className={styles.hprice}>{e.price}£</span> /month</p>
                                            <p style={{marginTop:"1vh"}}>{e.location}</p>
                                            <div className={styles.studimain}>
                                                <div className={styles.studimains}>
                                                    <Image src="/bedrooms.svg" height={15} width={15} alt="bedroom"></Image>
                                                    <p>Studio</p>
                                                </div>
                                                <div className={styles.studimains}>
                                                    <Image src="/bath.svg" height={15} width={15} alt="1 bathroom"></Image>
                                                    <p className={styles.bath}>1 bathroom</p></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.mapdiv}>
                           <Image src="/map.png" alt="map" height={900} width={630}></Image>
                        </div>
                    </div>
                </div>}
        </>
    )
}