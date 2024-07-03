import { NetflixFooterComponent } from './NetflixFooterComponent';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import './NetflixIndexComponent.css';
import NetFlixMainComponent from './NetflixMainComponent';
import { NetflixRegisterComponent } from './NetflixRegisterComponent';


export default function NetflixIndexComponent() {
    return <div className="container-fluid">
        <div className="box">
            <header>
                <NetflixHeaderComponent></NetflixHeaderComponent>
            </header>

            <section className='d-flex justify-content-center align-items-center'>
                <main>
                    <NetFlixMainComponent></NetFlixMainComponent>
                    <NetflixRegisterComponent> </NetflixRegisterComponent>
                </main>

            </section>
         <footer className='m-2 p-2'>
            <NetflixFooterComponent> </NetflixFooterComponent>
         </footer>
        </div>
    </div>


} 