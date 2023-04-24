import styles from '@/styles/menu.module.scss';

export default function TopMenu () {

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = today.toLocaleDateString('en-US', options);

    const handlePrint = () => {
        window.print();
        console.log('print')
    };

    return (
        <>
        <div className={styles.logo}>
            <h1>Australia Newspaper</h1>
            <button onClick={handlePrint}>
            <p>Print Today’s ({formattedDate}) News</p>
            </button>
        </div>
        <div className={styles.topMenu}>
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/">national</a></li>
                <li><a href="/">world</a></li>
                <li><a href="/">politics</a></li>
                <li><a href="/">Tech</a></li>
                <li><a href="/">Travel</a></li>
                <li><a href="/">Sports</a></li>
                <li><a href="/">Latest</a></li>
            </ul>
        </div>
        </>
    )
}