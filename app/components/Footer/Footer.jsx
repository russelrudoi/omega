import Image from 'next/image';

import IconFb from '@/public/image/fb.png';
import IconTw from '@/public/image/tw.png';
import IconIn from '@/public/image/in.png';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrapper container'>
                <div className='footer__title'>Ukraine 2000-2015</div>
                <ul className='footer__social'>
                    <li>
                        <a href='https://www.facebook.com'>
                            <Image src={IconFb} alt='Facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com'>
                            <Image src={IconTw} alt='Twiter' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com'>
                            <Image src={IconIn} alt='Instagram' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
