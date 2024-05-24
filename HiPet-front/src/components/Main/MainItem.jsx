import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainItem = ({ coin }) => {
    const ar = ["#차분함", "#조용함", "#귀여움"];
    const navigate = useNavigate();

    return (
        // 밑에 온클릭으로 페이지 이동
        <MainCard onClick={()=>{
            navigate("/detailedPage", {state: {coin}});
            window.location.reload()
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
                            <span>2주전</span>
                        </div>
                    </div>
                </div>
            </div>
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

export default MainItem;