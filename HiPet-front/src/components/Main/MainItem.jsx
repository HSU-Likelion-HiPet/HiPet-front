import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import useCalcDiffDate from '../../hooks/useCalcDiffDate';
import deleteSelected from "../../assets/checkVector-white.png";

const MainItem = ({ coin, deleteTargetId, setDeleteTargetId }) => {
    const ar = ["#차분함", "#조용함", "#귀여움"];
    const navigate = useNavigate();
    const location = useLocation();
    // 여기 createAt은 데이터 값으로 수정해야함
    const createdAt = "2024-05-20";
    const diff = useCalcDiffDate(createdAt);
    
    return (
        // 밑에 온클릭으로 페이지 이동
        <MainCard onClick={()=>{
            if(location.pathname === "/mypageedit"){
                if(deleteTargetId.includes(coin.id)){
                    setDeleteTargetId(deleteTargetId.filter(e=>e!==coin.id));
                }
                else{
                    setDeleteTargetId([
                        ...deleteTargetId,
                        coin.id
                    ])
                }
            }
            else{
                navigate("/detailedPage",   {state: {coin}});
                window.location.reload();
            }
        }}>
            <div className="imgWrapper">
                    <img src={coin.image} alt="" />
                </div>
            <div className="content-info">
                <div className="content-wrap">
                    <h3>{coin.name}</h3>
                    <ul>
                        {ar.map((e, i) => {
                            return <Tag key={i}>{e}</Tag>
                        })}
                    </ul>
                    <div className='priceAndRegionInfo'>
                        <span>{coin.current_price.toLocaleString()}원</span>
                        <div>
                            <span>서울 강서구</span>
                            <span> | </span>
                            <span>{diff}</span>
                        </div>
                    </div>
                </div>
            </div>
            {location.pathname === "/mypageedit" && (
                <DeleteSircle isSelected = {deleteTargetId.includes(coin.id)}>
                    {deleteTargetId.includes(coin.id) &&(
                        <img src={deleteSelected} alt="" />
                    )}
                </DeleteSircle>
            )}
        </MainCard>
    );
};

const MainCard = styled.li`
    width: 380px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.fontDark};
    border-radius: 10px;
    background: ${({ theme }) => theme.mainContentCardBackGround};
    overflow: hidden;
    cursor: pointer;
    position: relative;
    

    .imgWrapper{
        width: 100%;
        height: 359px;
        background-color: #EAEBED;
    }

    .content-info{
        width: 100%;
        height: 161px;

        .content-wrap{
            width: fit-content;
            height: fit-content;
            margin-top: 32px;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 22px;

            h3{
                font-weight: 500;
                font-size: 20px;
            }

            ul{
                display: flex;
                margin-top: 6px;
                margin-bottom: 26px;
            }
            
            .priceAndRegionInfo{
                display: flex;
                justify-content: space-between;
                width: 340px;


                > span{
                    font-size: 24px;
                    font-weight: 700;
                }

                > div{
                    font-size: 12px;
                    width: 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
            }
        }
    }
`;

const Tag = styled.li`
    background: ${({ theme }) => theme.yellow};
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
    padding: 4px 8px;
    margin-right: 5px;
`;

const DeleteSircle = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    background: ${({isSelected})=>isSelected ? "#FFC800" : "#F7F8FA"};
    border-radius: 50%;
    top: 20px;
    left: 320px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 22.5px;
        height: 16.5px;
    }
`;

export default MainItem;