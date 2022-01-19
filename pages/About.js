import React from 'react';
import Image from 'next/image'
import team01 from '../public/images/templatemo_team01.jpg'
import team02 from '../public/images/templatemo_team02.jpg'
import team03 from '../public/images/templatemo_team03.jpg' 
import styles from '../styles/about.module.css'

const About = () => {
    return (
        <div className="container mt-4">
            <div className={styles.abuot_bg}>
                <h1 className={styles.title}>WELCOME TO GLOSS!</h1>
                <h3 className={styles.info}>DUIS SEDDIO SIT AMETIONAL NIBOR</h3>
                <p>This is free website template from templatemo. Snec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                <p>Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p> 
            </div>
            <div className={styles.who_we}>
                <h2 className={styles.about_title}>WHO WE ARE?</h2>
                <p className="my-4">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Duis sed <br />odio nec tellus a odio tincidunt asit amet.</p>
                <div className="img_we">
                 <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-6 box">
                        <Image src={team01} className={styles.item} alt="....."  />
                        <h5>TRACY</h5>
                        <h4 className={styles.name}>Web Designer</h4> 
                    </div>
                    <div className="col-lg-2 col-md-6 box">
                        <Image src={team02} className={styles.item} alt="....."  />
                        <h5>JULIA</h5>
                        <h4 className={styles.name}>JS Developer</h4> 
                    </div>
                    <div className="col-lg-2 col-md-6 box">
                        <Image src={team03} className={styles.item} alt="....."  />
                        <h5>LINDA</h5>
                        <h4 className={styles.name}>Manager</h4>
                    </div>
                 </div>
              </div>
            </div>

            <div className={styles.about_footer}>
                  <div className="row justify-content-center">
                      <div className="col-md-4">
                          <h5 className="font-weight-bolder text-nowrap">ENENAN SOCITUE</h5>
                          <h6 className={styles.text_info}>SIT AMET NIBH VULPUTATE CURSUS</h6>
                          <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet.</p>
                          <p>Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                      </div>
                      <div className="col-md-4">
                          <h5 className="font-weight-bolder text-nowrap">TELLUSA ODIO ASIT</h5>
                          <h6 className={styles.text_info}>MORBI ACCUMASN IPSUM VALIT</h6>
                          <ul className={styles.ul_list}>
                              <li>Aenean sollicitudin</li>
                              <li>Lorem quis bibendum auctor</li>
                              <li>Risi elit consequat ipsum</li>
                              <li>Dnec sagittis sem nibhid</li>
                              <li>Duis sed odio sit amet</li>
                              <li>Morbi accumsan consequat</li>
                          </ul>
                      </div>
                      <div className="col-md-4">
                          <h5 className="font-weight-bolder text-nowrap">ENENAN SOCITUE</h5>
                          <h6 className={styles.text_info}>DUIS SED ODIO SIT AMET NIBH</h6>
                          <ul className={styles.ul_list}>
                              <li>Aenean sollicitudin</li>
                              <li>Lorem quis bibendum auctor</li>
                              <li>Risi elit consequat ipsum</li>
                              <li>Dnec sagittis sem nibhid</li>
                              <li>Duis sed odio sit amet</li>
                              <li>Morbi accumsan consequat</li>
                          </ul>
                      </div>
                  </div>
              </div>
        </div>
    );
};

export default About;