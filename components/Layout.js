import Navbar from '../components/Navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitcoin Price Tracker</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>


    </div>

)
export default Layout;