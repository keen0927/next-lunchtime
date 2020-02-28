import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

// export default function Post() {
//     const router = useRouter();

//     return (
//         <Layout>
//             <h1>{router.query.id}</h1>
//             <p>ㅋㅋ 1</p>
//         </Layout>
//     )
// }

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g,'')}</p>
        {props.show.image ?
            <img src={props.show.image.medium} />
            :
            null
        }
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched Show : ${show.name}`);

    return { show };
}

export default Post;