"use client"
import Nav from "@/components/Nav"
import styles from "../styles/home.module.css"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
export default function Home() {
    const [show,setShow] = useState(false)
    const data = [
        { logo: "/logo1.webp", title: "Looking for a tenant" },
        { logo: "/logo2.webp", title: "Manage my tenancy" },
        { logo: "/logo3.webp", title: "Want to sell" },
        { logo: "/logo4.webp", title: "Book a valuation" },
        { logo: "/logo5.webp", title: "Looking to buy" },
        { logo: "/logo6.webp", title: "Find a property to rent" }]
    return (
        <div>
            <Nav show={show} setShow = {setShow}></Nav>
            <div className={styles.main}>
                <Image src="/deck.jpg"
                    width={100}
                    height={100}
                    className={styles.image}
                    alt="Picture of the author"></Image>
                <div style={show?{}:{display:'none'}} className={styles.loginMenu}>
                    <p>Sign Up</p>
                    <p>Login</p>
                    <hr/> 
                    <p>Help</p>
                    <p>Contact Us</p>
                    <Link href={'/home/home'}><p className={styles.linktxt}>Page 1</p></Link>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.text1}>Home of The Best Local Estate Agents</h1>
                    <h3 className={styles.text2}>What would you like to do?</h3>
                    <div className={styles.boards}>
                        {data.map((e) => {
                            return (
                                <div key={e.title} className={styles.board}>
                                    <Image src={e.logo} width={100}
                                        height={100} alt='logo' className={styles.logo}></Image>
                                    <p className={styles.text3}>{e.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.bottomdiv}>
                    <div className={styles.searchbottom}>
                        <p className={styles.text3b}>How much rent can you achieve?</p>
                        <input className={styles.searchinp} placeholder="Enter address (e.g Flat 221 Hoxton Building, N1 3XF)"></input>
                        <button className={styles.searchbtn}><p className={styles.text3btn}>Instant Valuation</p></button>
                    </div>
                </div>
        </div>
    )
}