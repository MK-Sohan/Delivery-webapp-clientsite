import HowWorkssingleCard from './HowWorkssingleCard';

const HowworksCards = ({ carddata }) => {
    // const allcardsdata = use(carddata)
    console.log(carddata)
    return (
        <div className=' pt-1 '>
            <p className='font-bold text-[32px]'>How it Works</p>

            <div className='grid md:grid-cols-3 sm:grid-cols-1  lg:grid-cols-4 mt-8 mb-8 gap-2 items-center  '>
                {

                    carddata?.map(card => <HowWorkssingleCard card={card}></HowWorkssingleCard>)

                }
            </div>


        </div>
    );
};

export default HowworksCards;