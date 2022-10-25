import { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../Atoms/buttons/PrimaryButton"
import { Input } from "../Atoms/inputs/Input";

export const SearchInput = memo(()=> {
    return (
        <>
            <div>
                <SContainer>
                    <Input placeholder="検索条件を入力"></Input>
                    <SButtonWrapper>
                        <PrimaryButton>検索</PrimaryButton>
                    </SButtonWrapper>
                </SContainer>
            </div>
        </>
    );
})

const SButtonWrapper = styled.div`
    padding-left: 8px;
`
const SContainer = styled.div`
    display:flex;
    align-items:center;
`
