import React from "react";
import preloader from './../../../assets/images/preloader.gif'
import styles from './Preloader.module.css'

function Preloader() {

    return (
        <div>
            <img className={styles.preloader} src={preloader} alt="preloader"/>
        </div>
    );
}

export default Preloader;
