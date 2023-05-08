import styles from '@/styles/Home.module.scss'

export default function Footer() {

    const today = new Date();
    const currentYear = today.getFullYear();

    return (
        <div className={styles.footerContainer}>
            <p>Copyright © {currentYear} <a href="https://seosydneyweb.com/">seosydneyweb</a>. All rights reserved.</p>
        </div>
    )
}