import styles from '@/styles/menu.module.scss';

export default function TopMenu () {

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = today.toLocaleDateString('en-US', options);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
        <div className={styles.logo}>
            <h1><a href="/">Newspaper</a></h1>
            <button onClick={handlePrint}>
            <p>Print Today’s ({formattedDate}) news</p>
            </button>
        </div>
        
        <div className={styles.topMenu}>
            <ul>
                <li><a href="/national">national</a></li>
                <li><a href="/world">world</a></li>
                <li><a href="/politics">politics</a></li>
                <li><a href="/tech">Tech</a></li>
                <li><a href="/sports">Sports</a></li>
            </ul>
        </div>
        </>
    )
}