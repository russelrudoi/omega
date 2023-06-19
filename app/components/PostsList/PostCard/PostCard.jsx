import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchImgById } from '@/app/http/postAPI';
import Link from 'next/link';

import './PostCard.scss';

const PostCard = ({ data, id, idImg }) => {
    const [imgUrl, setImgUrl] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getUrl(idImg);
    }, [idImg]);

    const getUrl = async id => {
        const { source_url } = await fetchImgById(id);
        setImgUrl(source_url);
    };

    const showText = () => {
        setShow(!show);
    };

    return (
        <div className={`post ${show ? 'post_show' : ''}`}>
            {imgUrl ? (
                <Image
                    src={imgUrl}
                    alt='Post'
                    className='post__img'
                    width={380}
                    height={237}
                />
            ) : (
                'Loading...'
            )}
            <div className='post__wrapper'>
                <Link href={`post/${id}`}>
                    <h3 className='post__title'>{data?.news_title}</h3>
                </Link>
                <p className={`post__plot ${show ? 'post__plot_show' : ''}`}>
                    {data?.news_plot}
                </p>
                <div
                    onClick={showText}
                    className={`post__btn-more ${
                        show ? 'post__btn-more_show' : ''
                    }`}
                >
                    {show ? 'Show less' : 'Show more'}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
