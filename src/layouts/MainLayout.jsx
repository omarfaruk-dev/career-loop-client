
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <header>
               <NavBar/>
            </header>
            <main className='mt-20'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;