import MainContainer from '@/app/components/MainContainer/MainContainer';
import { fetchPostById } from '@/app/http/postAPI';

export default function Page({ post }) {
    const { acf } = post;

    return (
        <MainContainer>
            <div className='container'>
                <h4>{acf.news_title}</h4>
                <p>{acf.news_plot}</p>
            </div>
        </MainContainer>
    );
}

export const getServerSideProps = async ({ params }) => {
    const res = fetchPostById(params.id);
    const post = await res;
    return { props: { post } };
};
