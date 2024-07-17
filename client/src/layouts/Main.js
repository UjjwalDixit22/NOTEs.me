import React, { Suspense } from "react";
import Loader from "../components/shared/loader";
import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar";
import Navbar from "../components/shared/navbar";

function Main(){
    return(
        <main className={styles.container}>
        <Suspense fallback={<Loader/>}>
            {/* sideBar */}
            <Sidebar/>
            <main className={styles.main}>
                {/* navBar */}
                <Navbar/>
                <section className={styles.content}>
                    <Outlet/>
                </section>
            </main>
        </Suspense>
        </main>
    )
}

export default Main