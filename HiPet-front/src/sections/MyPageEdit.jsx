import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MyPageBottom from '../components/myPage/MyPageBottom';

const MyPageEdit = () => {
    const location = useLocation();
    const { getData } = location.state || {};
    const [deleteTargetId, setDeleteTargetId] = useState([]);

    useEffect(()=>{
        console.log(deleteTargetId);
    }, [deleteTargetId])

    return (
        <MyPageEditWrapper>
            <MainHeader />
            <MyPageBottom getData={getData} deleteTargetId = {deleteTargetId} setDeleteTargetId={setDeleteTargetId} />
        </MyPageEditWrapper>
    );
};

const MyPageEditWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    border: 0.0000001px solid transparent;
`

export default MyPageEdit;