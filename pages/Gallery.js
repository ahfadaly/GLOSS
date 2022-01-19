import React from 'react';
import Image from 'next/image'
import styles from '../styles/gallery.module.css'
import { useState , useEffect } from 'react'
import axios from 'axios'

const Gallery = () => {

   const [ images , setImages ] = useState([]);

     useEffect(() => {
            axios.get('/js/data.json').then( response => {setImages (response.data.brands)} );
        } ,[])

        const imgasbrands = images.map( (imgeItem) =>{
        return(
            <div className="col-lg-4 col-md-6 mb-3" key={imgeItem.id}>
                <div className={styles.hover}>
                  <Image src={imgeItem.img} alt="my picture" className={styles.border}  width={500} height={500} unoptimized={true} />
                </div>
            </div>
        )
     })

    return (
        <div className="text-center container">
            <div className="row mt-4">
               {imgasbrands}
            </div>
        </div>
    );
};

export default Gallery;