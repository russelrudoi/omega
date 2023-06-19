import MainContainer from '@/app/components/MainContainer/MainContainer';
import PostsList from '@/app/components/PostsList/PostsList';
import Promo from '@/app/components/Promo/Promo';
import { fetchAllPosts } from '@/app/http/postAPI';

const Home = ({ posts }) => {
    console.log(posts);
    return (
        <MainContainer>
            <Promo />
            <PostsList posts={posts} />
        </MainContainer>
    );
};

export const getStaticProps = async () => {
    const res = fetchAllPosts();
    const posts = await res;
    return { props: { posts } };
};

export default Home;
