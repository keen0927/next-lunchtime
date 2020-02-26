import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Index() {
    return (
        <Layout>
            <h1>Posts</h1>
            <ul>
                <PostLink id="1" />
                <PostLink id="2" />
                <PostLink id="3" />
            </ul>
        </Layout>
    )
}