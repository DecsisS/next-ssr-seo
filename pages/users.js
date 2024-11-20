import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer keywords="users, people">
            <h1>Users</h1>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>
                    )
                })}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
        .catch((error) => console.log(error));
    const users = await usersResponse.json();

    return {
        props: {
            users
        }
    }
}