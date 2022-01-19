
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Img from '../public/images/templatemo_building.png'
import watch from '../public/images/templatemo_icon_watch.png'
import Bay from '../public/images/templatemo_icon_bay.png'
import search from '../public/images/templatemo_icon_search.png'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="container mt-4 home">
        <div className={styles.home}>
           <div className="row mt-4">
              <div className="col-lg-6 text-center">
                 <Image src={Img} className="" alt="....."  />   
              </div>
              <div className="col-lg-6">
                 <h2 className={styles.title}>AENEAN SOLICIT DUIS SEDDIO SIT AMETIONAL</h2>
                 <p className={styles.desc}>Gloss is free responsive mobile template for everyone. Please tell your friends about templatemo.com website. This layout is based on Bootstrap v3.1.1 framework. Credits go to Art Professions Icon and Unsplash for images used in this template.</p>
                 <p className={styles.desc}>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                 <p className={styles.desc}>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                  <Link href="/">
                    <a className="btn btn-primary mt-2" >READ MORE</a>
                 </Link>
              </div>
           </div>
        </div>

        <div className="card-icon">
           <div className="row text-center mt-4">
              <div className="col-lg-4 mb-2">
                   <div className={styles.icon}>
                       <Image src={watch} className="" alt="....."  />  
                       <h3 className={styles.heading}>MORBI ACCUM</h3>
                       <p>Donec leo sem, commodo in, bibendum iaculis, euismod vitae, risus. Suspendisse a erat id urna dapibus varius.</p>
                        <Link href="/">
                          <a className="btn btn-primary mt-5">READ MORE</a>
                        </Link>
                   </div>
                 </div>

                 <div className="col-lg-4 mb-2">
                   <div className={styles.icon}>
                         <Image src={Bay} className="" alt="....."  /> 
                          <h3 className={styles.heading}>LOREM IPSUM</h3>
                          <p>Donec leo sem, commodo in, bibendum iaculis, euismod vitae, risus. Suspendisse a erat id urna dapibus varius.</p>
                           <Link href="/">
                              <a className="btn btn-primary mt-5" >READ MORE</a>
                           </Link>
                     </div>
                 </div>

                 <div className="col-lg-4 mb-2">
                   <div className={styles.icon}>
                         <Image src={search} className="" alt="....."  />
                         <h3 className={styles.heading}>DUIS SEDIO</h3>
                         <p>Duis at lectus non neque ultrices porttitor. Cras ipsum sem, iaculis ut, sodales ut, accumsan lacinia, nunc.</p>
                         <Link href="/">
                            <a className="btn btn-primary mt-5">READ MORE</a>
                         </Link>
                   </div>
              </div>
           </div>
        </div>
      </div>
  )
}

