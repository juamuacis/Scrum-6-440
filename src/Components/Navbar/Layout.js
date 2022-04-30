import classes from './Layout.module.css';
import Navbar from './index';

function Layout(props) {
return <div>
    <Navbar />
    <main className={classes.main}>
        {props.children}
    </main>
</div>

}

export default Layout;