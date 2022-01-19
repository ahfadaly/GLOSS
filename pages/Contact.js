import React from 'react';
import styles from '../styles/contact.module.css'

const Contact = () => {
    return (
        <div className="container">
            <div className={styles.contact_bg}>
                <div className="map col-12">
                    <iframe width="100%" height="350px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30826973345!2d31.41785917296069!3d31.0413814216918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDYp9mE2K_ZgtmH2YTZitip!5e0!3m2!1sar!2seg!4v1631316145530!5m2!1sar!2seg"/>
                </div>
               <div className="col-12 mt-4">
                    <h3 className={styles.contact_title}>CONTACT US</h3>
                    <h6 className={styles.contact_info}>CRAS INTERDUM ACCUMSAN DIAM</h6>
               </div>
                <div className="row mt-4">
                    <div className="col-md-6 mb-2">
                        <div className={styles.contact_us}>
                            <input type="text" placeholder="Name" required /> 
                            <input type="email" placeholder="Email" required />
                            <textarea name="message" className="message" placeholder="MESSAGE ... " id="message" required />
                            <button type="submit" className="btn-primary border-0 p-2 px-5">Send</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p>This is free website template from templatemo. Ribendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                        <ul className={styles.form_ul}>
                            <li><i className="fas fa-map-marker-alt"></i><span>2100, Aenean sollicitudin</span></li>
                            <li><i className="fas fa-phone-alt"></i><span>010 020 0340, 090 080 0760</span></li>
                            <li className="text-primary"><i className="fas fa-envelope"></i><a href="#">contact@company.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

{/* <i className="fas fa-map-marker-alt"></i> */}

{/* <i className="fas fa-phone-alt"></i> */}

{/* <i className="fas fa-envelope"></i> */}