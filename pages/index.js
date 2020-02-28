import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const PostLink = props => (
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );

// export default function Index() {
//     return (
//         <Layout>
//             <h1>Posts</h1>
//             <ul>
//                 <PostLink id="1" />
//                 <PostLink id="2" />
//                 <PostLink id="3" />
//             </ul>
//         </Layout>
//     )
// }

const Index = props => (
    <Layout>
        <h1>TV SHOW</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const url = 'https://api.tvmaze.com/search/shows?q=batman';
    const res = await fetch(url);
    const data = await res.json();

    console.log(`Data Count : ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
}

export default Index;