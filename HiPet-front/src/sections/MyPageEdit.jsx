import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MyPageBottom from '../components/myPage/MyPageBottom';
import Modal from 'react-modal';

Modal.setAppElement('#wrapper');

const MyPageEdit = () => {
    const customStyles = {
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: "10",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
        },
        content: {
          width: "1000px",
          height: "360px",
          zIndex: "150",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "10px",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
          backgroundColor: "white",
          display: "flex",
        //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "3.2rem"
        },
      };
    const [currentSection, setCurrentSection] = useState("posts");
    const location = useLocation();
    const { getData } = location.state || {};
    const [deleteTargetId, setDeleteTargetId] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    

    const toggleModal = () =>{
        if(deleteTargetId.length<1){
            return;
        }
        setModalIsOpen(!modalIsOpen);
    }

    // 통신 시 삭제 기능 구현해야함
    const handleDelete = () =>{
        console.log(deleteTargetId);
        setModalIsOpen(false);
    }

    return (
        <MyPageEditWrapper>
            <MainHeader />
            <MyPageBottom 
            getData={getData} 
            deleteTargetId = {deleteTargetId} 
            setDeleteTargetId={setDeleteTargetId} 
            toggleModal={toggleModal}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection} />
            <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            style={customStyles}
            >
                <div className='delete-message'>이 {deleteTargetId.length}개의 {currentSection==="posts" ? "글" : "찜"}을 완전히 삭제하시겠습니까?</div>
                <Btns>
                    <button className='btn1' onClick={handleDelete} >삭제</button>
                    <button className='btn2' onClick={()=>setModalIsOpen(false)}>취소</button>
                </Btns>
            </CustomModal>
        </MyPageEditWrapper>
    );
};

const MyPageEditWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    border: 0.0000001px solid transparent;
`;

const CustomModal = styled(Modal)`
    .delete-message{
        margin-top: 115px;
    }
`;

const Btns = styled.div`
    position: absolute;
    bottom: 19.7px;

    button{
        padding: 16px 202px;
        border-radius: 10px;
        font-size: 2.4rem;
        font-weight: 500;
    }
    
    .btn1{
        background: #FF5050;
        padding: 16px 202px;
        margin-right: 24.5px;
        color: #F7F8FA;
    }
`

export default MyPageEdit;