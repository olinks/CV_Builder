import Nav from '../Nav'
import Hobby from './Hobby';
import Computer from './Computer';
import Art from './Art';
const Builder = () => {
    return (
        <>
        <Nav />
        <div className='flex-box w-95'>
            <div>
                <section className='flex-right'>
                    <h1>Hobby</h1>
                    <Hobby />
                </section>
                <section>
                    <h1>Computer</h1>
                    <Computer />
                </section>
                <section>
                    <h1>Art</h1>
                    <Art />
                </section>
            </div>
        </div>
        </>
    )
}
export default Builder; 