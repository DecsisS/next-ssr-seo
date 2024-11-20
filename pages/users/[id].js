import { useRouter } from "next/router"
import styles from '../../styles/User.module.scss';
import MainContainer from "../../components/MainContainer";

export default function ({ user }) {
    const { query } = useRouter();
    return (
        <MainContainer keywords={`user, man, woman, ${user.name}`}>
            <div className={styles.userBlock}>
                <h1>User Profile {query.id}</h1>
                <span>User name - {user.name}</span>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .catch((error) => console.log(error));;
    const user = await response.json();
    return {
        props: {
            user,
        }
    }
}