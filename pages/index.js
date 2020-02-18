import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about" title="about Page">
                <a>About Page</a>
            </Link>
            <p>Home</p>
        </div>
    )
}