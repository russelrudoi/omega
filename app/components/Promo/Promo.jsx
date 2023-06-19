import './Promo.scss';

const Promo = () => {
    return (
        <div className='promo'>
            <div className='promo__bg'></div>
            <fieldset className='promo-block'>
                <legend className='promo-block__legend'>
                    <h1 className='promo-block__legend-title'>
                        Workforce Survey
                    </h1>
                </legend>
                <div className='promo-block__plot'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi{' '}
                </div>
                <div className='promo-block__btn'>
                    <button>Start Now</button>
                </div>
            </fieldset>
        </div>
    );
};

export default Promo;
