import styled from "styled-components";
import {SearchInput} from "../Molecules/SearchInput";
import { UserCard } from "../Organisms/User/UserCard";

export const Users = () => {
    const users = [...Array(10).keys()].map((val) => {
        return {
            id: val,
            image: "https://source.unsplash.com/test",
            name: `test-${val}`,
            email: 'test@gmail.com',
            phone: '000-111-2222',
            company: {
              name: 'test会社',
            },
            website: 'https://test.com'
          }
    })
    return (
        <>
            <SContainer>
                <h2>ユーザー一覧</h2>
                <SearchInput />
                <SUserArea>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </SUserArea>
            </SContainer>
        </>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`
const SUserArea = styled.div`
    pading-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`