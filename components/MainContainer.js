import Head from "next/head";
import A from './A';

const MainContainer = (props) => {
    return (
        <>
            <Head>
                <title>Main Next.js</title>
                <meta keywords={
                    "next.js, SSR, MaterialUI, " + `${props.keywords ? props.keywords : ''}`
                    } />
            </Head>
            <nav className="navContainer">
                <A href="/" text="Main" />
                <A href="/users" text="Users" />
            </nav>
            <div>
                {props.children}
            </div>
            <style jsx>
                {`
                    .navContainer {
                        padding: 15px;
                        background: orange;
                    }
                `}
            </style>
        </>
    )
};

export default MainContainer;