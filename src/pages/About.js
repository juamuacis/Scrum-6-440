import './About.css';

const About = () => {
    return (
        <div>
            <body>
                <header>
                    <h1 className='header'>About Us</h1>

                </header>

                <img src={require('../../src/Images/campus.png')} width={'100%'} height={'100%'} className='campus' alt="Campus" />
                <p  className='statement'>We strive to support the needs of all CSUF students! The CSUF Online shop
                    is meant to give students living on or around campus the ability to sell or buy items for cash. As many
                    of us know, sometimes money is difficult to come by and any amount could be helpful in the long run.
                    We hope that many of you use the CSUF Online Shop to its full ability and get to trade and sell some
                    pretty cool stuff with eachother! Work with us to keep the market safe and accessible for all students!

                </p>
            </body>
        </div>
    );
};

export default About