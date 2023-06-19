import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import IconLogo from '@/public/image/logo.png';
import './Header.scss';

const Header = () => {
    const { route } = useRouter();

    return (
        <header>
            <div
                className={`container header ${
                    route === '/' ? '' : 'header_bg'
                }`}
            >
                <Link href='/'>
                    <Image alt='omega' src={IconLogo} className='logo' />
                </Link>
                <nav>
                    <ul className='nav-list'>
                        <li>
                            <a href='#'>What we do</a>
                        </li>
                        <li>
                            <a href='#'>Our work</a>
                        </li>
                        <li>
                            <a href='#'>Seo insights</a>
                        </li>
                        <li>
                            <a href='#'>About us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
