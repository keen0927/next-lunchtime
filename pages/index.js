import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Index() {
    return (
        <Layout>
            <h1>Posts</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn" />
                <PostLink title="Next" />
            </ul>
        </Layout>
    )
}