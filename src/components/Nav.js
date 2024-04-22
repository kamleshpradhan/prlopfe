"use client"
import styles from "../styles/nav.module.css"
import Link from "next/link"
import Image from "next/image"
export default function Nav({show,setShow}){
    return(
        <div className={styles.main}>
            <div className={styles.div1}>
                <Link href={'/'}><h1 className={styles.logotxt}>Logo Space</h1></Link>
            </div>
            <div className={styles.div2}>
                 <p>Pricing</p>
                    <p>Property Search</p>
                         <p>Lettings Service</p>
                             <p>Property Management</p>
                                    <p>Landlord Portal</p>
                                         <p>Join As An Agent</p>
                                                            </div>
            <div className={styles.div3} onClick={()=>{setShow(!show)}}>
                <div className={styles.div3box}>
                    <div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                    <Image src="/user-menu.svg"
                    width={100}
                    height={100}
                    className={styles.img}
                    alt="Picture of the author"></Image>
                </div>
            </div>
        </div>
    )
}