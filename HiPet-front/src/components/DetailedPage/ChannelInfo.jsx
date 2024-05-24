import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const ChannelInfo = ({ rating, reviews }) => {

    return (
        <ChannelInfoWrapper className="wrap">
            <div className="seller">
                <div className="seller-profile-img-wrapper">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIEBQYHAwj/xAA2EAACAQMDAgUCBAUFAQEBAAABAgMABBEFEiEGMRMiQVFhB4EUMnGRQqGxwfAVI2LR8VLhU//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAB8RAQEBAQADAAMBAQAAAAAAAAABAhEDITEiQVESMv/aAAwDAQACEQMRAD8A2qhQoHtQAoUVHQAoUVCgDyKFFR0AM0Kb3t7b2MDT3cyRxr3ZjjFU7X/qbounxbrSYXMqnBRDz+tAXnIptPf20BCyzIpwTjjJArIOofrC7oYdHtisnPnl9v0rM7vqLUry4Wee8l3gHGWOFB7gfvTgekpOtdCRZGa9h8voG5zTQfUTp0q5/GruXgDH5vmvM7TuM7Twc85J/wA5o4brzbQvHz6UHx6ctOven7u7jtor5N7nAz7+1WKO6glJ2SK2Djg15JDeFKjb85I5XjHzUlD1LqkThYb6dQjNgK5GT2oHHqrI9CPtQrz50/8AVPV7BoEvZPxFvGSGDLgkceta5091zo+tRxCO4CTOM+Gx5FHCWejpKsGXcpBB9QaOkB0VHRUAKOioUAdCioUADQzQNFQAoUKFAChQoY+eaAFVTrPrbTumrWUPKkl4EOyHPJP9qjfqH9QrTpyB7e3YS320HYM4UHPc+/FedNX1e61S+ku7mVnkdt3J7UwsPVXXeqdSymOZ2jtv/wCQbj71WVnZScsMk8/NNtxPPr70MknHrSM4kmcSAtyfaj3SSNlEHHBX3+abo21lPHHbIp7bFGUndtlOTn7Zx/L+dMCcmN2DgDHp75oCRRKsgbGD2pFzuLNk5C/mwOM+2abk8VJw8/FZChvNwO+K6i5XfuKqBjPb1qNAJzS1YjG707CgJWTZvBQZTd3LZ+9dIZ2jnDQMygA+ZcrgVFeI3uQDzjFdsuAWVwAf4aYat0d9S7zTfCttTUTQeVFZTzjOMmto03UbbUrVZ7WYSIw4I7V5Ft7sopilHOcg+1XDpPrHUNG8Aw3DfhkbLxE5Hfmgcele1Co7QtVg1nT4ry3/ACyDPY8GpGhIUVHRUAKFChQAoUVCgAeaOhQoACqZ9QeubXpOBIyN9zMDtUfw/Jqc6o1y26f0mW/uT5UHC/8A0favLfWHUFz1Dq0t5cyFtxwi/wDyvtQEXqV9NqF5NdXLs8krFiSfmuEUUkrhI0ZnPYAcml21tLdzrFCheRjjitV6O6HjsQL2+xJJs3BGH5a0x47qo3uZii6Z0pqd5GzeCY8DI3dx+op71L0suiadDLJJ4kpO1nB4YnsB7VtVon+6BkZYYPyP/Kqn1esEu7GGeKLGxsuVGK3vjmYzzu6rGkjJ/IpI96fqqeEF3gPjDAjjJx3/AJ02PkZgAF5+1dUkCR5Yjc3zyOcc/wBa5K6Y6XBA8yggbVDKzdjn196byQoCQCfN245/zmnUdwiAF2UlSDsZTh+expAYvN58k5z3x/5SPhqYwNoQc45PzQVQjZYAn05p2QnJQkgkkk84ps8JU88KOPvQZZCs6kEcc8+lP7eBpYhEFzgYIyASO/8A+00hgU43MMZ9+9TulrgmIN5mGwke/wAfPYfelaqTqNuNKl8EGONmGfzKuc59OPWuMKS2tz4c0TKRxtPB+/zXo3o7poQaLbi7VHcEuvl7E8/vVO+rPRYWH/V9KgIkUnx440zuXJy/65pxFvKh/p71xLp17BYXUgFsxwpPAXNbvbyrPAsiHIPII9a8m220+ZGVV/MOOxFbl9Kepk1Cx/AzSM9ymeW7Y9AKpNjRaI0O2KBpEKhQoUwFCioUAqi4HeiqO6h1FNJ0a6vpSuyKMtycUBjn1y6paa7XRYwRHH52weG/6rIbeCS4lWKMFnY4p7fXFzrWqSTkvJLPISNx55PAq9dIdHZhWeYlZQwyCO1aY8d0nev8pP6fdMpZR/ibmMFyf4l7Gr1KjyIpQBQoJK47jt/1Rzxx2dkFjQk44x71HyatNbxKSndM/bIyPtXZmfxy61/Ujar5AQAxDAA4pp1vp5uumblgoLgbu+P1p3okqSoFcng4596Y/Um9ay6UmG4Av5Qc9qy8trTxR58aTL4Vfccn5rsGADlSc7fzN788femsjAzMw4JOeK6R+ZyWK4Cljn+LFcljq67LFlVlbDBmACg9z3/7rqIyihCDv9zjGe2PtzXSLwljDqp4AbB9TQllRpNrL2LcngZNSZFsrSRrFGSSWyPQdvfNd0ha5RlYklWzyexPvSbRocqAxTbyG9eafzIVZpfIrFRtQHdxzyc/pRTiPEAHieY7gfQcVZ+itOa+1e2si6hHYMXP5iM9vmoOR8hGGGOOFxwD6Z9j8VpP0e0jxtSNzcxtvjyEb2Pr/n86iq+NsgjWOFEC4CjAHtXOeBZY2R+QwwfmnA7CicVpGN+vO/1C6Mk0PVpZ7RFGnSneGzgIT3Wozo6//wBI6htrgMwTftbHY5969CdQaTDrGmT2dwgYOuDmvN+sadJpesTWUrbWik8p5GR70lT29O2swngjkByGUEV1qqfTfU/9R6ci3spePyHHxVqqkjoUmjoBO6jpIpVADNZH9edb8LTINJilX/fcGRQeQorTtWvo7CxlmkYDapOTXlfrLW5tc1me7mbJDYXHoKfCPuiLOK8vAzkAqeFI71t2g2qxwjgtkcEjtWNdEz+BF4jKCpcAsBkitu0ls2sbemM5HaumTmGO7+SL1/V4bVjECWZSN7YwFJOMZPGfv61HiaC5lCq0ZYDBBIz88VW+t+lLw6rPf6bqVxFNcNu2eIVBOO3FQ2kW/UGnsly4jlUty5ds/fjHPbv3qsbs9FcS+2nwu1nInAIIz+tRn1XAn6PkkTB2spzjPHxTd9YhuI4JfFTaPzLn8h9c4+aPri+hg6LkV3yJX8NPmlv3B4+sH7tTqAMpDeRsDdtz3ArhKoVmCnOKMSHkbeTiuSuiJJWwjqACr4YNngD1FHNtkhYgbkX1Y44+PcU1/FK8Dp4ZBONgA4BBzz7+tSivI0cccGnmadQFkeVDgeygelVnN18FqKjypzJwQeasFnBJdWsaxrmRVzyfzAe3ftz+9ceotNtLS3t57RpVMh2TW8qhXif+JT7+hB9jR6fceGzvkZCqAxbGCO4A+cVGpytMXrt4bW88KTl1Rl3/AJdwYZIPPqBjH61s/wBH4QbOWcJjcT5uPNz6eoFZNKVuoJJEOTGOU3fxZ4Cj75Pya2v6TafNZdOI9wMNIc4I8w/U1n+16vpeKQxNKzXKaVEBLsqj1JNWwBhuUj3rMvqT0l/qME98rgS28eVRV5YDk5NaVHIrtxnj1x3pF7bpLbyI6gh1IPFH056Zz9F5430u4jUFWWTJye/6CtJzWc/T6wGl9Q6nbqQq7shAMZrRc1UFDNDJoiaLNMgoM2FJ9qId6j9avPwlo575Bpyd9Ezz6sa/iwe0id1Bzu2+tYHI25yc9/cVpH1GvVmRsPuLGs2UZbb71XknLwouPSemzTQRyrK8R3ggqxFbppsbLZR5O47e/vWTdBrLMWR1JEGNpHGftWwaWN1oBjBHFb3/AJkY2fmitUUs5DAbs8ZHGMVGvZQS2bweEU3LnIHBNT+oxZycc+hz/XuP5VGqIxKGCsxCksishOff5/Xv8Uuq4jrDTIkHCKZO28qM/c1TPqlM8VvbWlvvWGP/AHGx+Uk9jWiTKYYyzypGMeUc7h+pzWQfUrWYtS1URWsqtDCuzy+vznHNLfw8z2phFJJ55Jo807itRsDM2fgdq5mrppotVYNc3DRt3G0Z/ertdEW8lrcabOsfjhduxsjdxk/FU+3tItwkLoAv/EkZ9BV31qyk1uwsJNFth40eJJUQjy/IrXOuRNnasHXTQp0dZu9zBFc3b7ZyyjeygHjkZBz61kthOYpyiMuDnkkjI9s/561pHXrQ3enaZp9+lvHeRbrq9lh5AkkySB64yT+1ZnNa+Ed8RYgNxzWdip6TKNJbzRlZXGGBypOe45B9PtivQn0xaD/RXe3YETSbzgnbnHO0E8c15uguxMjyldqx7d24Bv396336MXlrddMhbYQB4nYThFCsCef2I596zXb2NELYB96xn6ofUR7O7l0fQ5s3mcS3C4IiH/H/AJf0rX7yIT20kTZAZSPKcV5L1LSLnQOoJ7G8RpJkkxHgbvGzypB+ciqiG4/RK61CWz1e1v557hba5XwpJnLnzICRuJz7cema0pxVY+mugS9O9LQW92d15OTcXBznzt6fYYFWa5bZC36GkbMLa+gf6q3McRCtHFtYZ7mtHPb71hnT034j6vTvEnk3t+X049a3H0qsnR0WaLNJzTSKeUQoSSAAO5qh9SasZmeMEkL2qR6m1UhvDibtwao2oSu7E7+9dPh8f7rLW/0ofW0ga4AKsp9jVWgA8ZdwyNwz+9WTq/xGlUvzmoLS4hPqEKN+XdzWPkndrnxs3QNtFNYCeEgxnj5B9Qa0LT08OIp6DtVW6OgSDTEVN2O/mFWqJ1AABrXXWWfpxIgbuKbtbRK3iGNN4GASOf3pyH47ZpDnfxULZR9XvHRYLi1eePPllffhcegx/esfkdi+48k8nPNen+oNEh1jT5ra4UYKnafn3rznr+i3eiXz2t2rBl7PggMPcZ9KjasomuytIqAEkeoB9a5qOcUfpgnIBqFHENzPHwr4U9/n5p9YapqMTpHDeyQLnICcAGmFsUWRWcFlB7D1rsQCh3AAYPb+dK04m59Q1kwTRrMJYroYZ+QPkHP+c1FzW99EnhyOixja5Xd2Y+nbvg/tT23vgYHEjxgsvDBTkft7V3to4Gy8stocDEixryuO5IJBOeMn+tLq/wDPUXJZlWJgbcOOWwA5Gf1Hp71evpfrUvTetJlWezuCI7gRsrlTn83vgetVqOYRuzSILuJHG1dnl/THoO3ard0Zp80mu2trHGUPGU5DOp5PcAftio1aqSPQClZYgVIKsMgj1qMfQbCfUo724soJZ4s+HLJGCyZ9j7VJ28SQwRxRoERFCqo7AD0rqBVsg7U11GYQ2zuzKq45LHAFOjVe67YL0tqDFsARHnGftQTJ+jUjH1Tu5I3WTdvO5DxW0k5NYb9K0E3V00zDzqhHl7CtwzVZ+K0BpJoyaTTSy3Vr4zSsDjB7Gq/dyHYzA9vSu19IN+d3FRN3NhGG8Zr0r+Mcs93qA6jlMkfmb7VEaBAZ9RVFBJ9h6071SQSIQTzSOkkRtftlcsBu4IOOa4re7bX/AJbp0zaGy0xI8OCeSG9KnYWJNNNOJ8EA+nbPen6DmtNMzlO1dEFJTGK6KOazq46BeP1qF6j6ZsdcgCXMSM652lhkVOrSsA1FXI879QfTPVrB5pbRFkt1PHJy36DFU+7027tJPDuIHRvYg164aNX7qCfmmVzpNncHMttEx92QE1nYv08rxWM4Xc8eEGQSew4zzR21jczvFbiMgythc8mvStz0vp8ySp+GT/cIJKjaW/X45qIT6eRPdRytIytGTsKDBHfH9aXD9dYTdWj284iZCrA7CSM+cfmH75706tN/mVnfaeD5yMH29s/9Vv4+n+nPFHFdo0gUhi4YozMPUlcZ+4qQs+htDgkMv4VXcsCSxJ7du/ep/Jc1ljfSPRmq63dRhLaW3tUOdz7gg554z6/HxW4dL9MWegQHwUUzuPPJtwf0qat4EhjCIBtHYV1A4ok/qLr+ABR0KFUkKgOtPEOhXCxojLty4b2Ht81P1C9UL4mi3a5IzEQSO4470Bkf0ejkn13UZwixx/8Ax61sXas7+kWnrBa3lyMsXlKh278VoZqs/FaA0nNGTSc00MM1IhTxyPaoS6kyCak784/Mai/DMrnbyK9Hye45sekBexMc7RmmWmz/AIPUopmONjirc1qoHmTcCDVY1Wx8J96dq5N457bSy+m9dP6hHd20bhs7gKsURDAVhHRXVDWDLb3MhC57k1sWjavb3sKGNwcjuD3qre+4jnE+grugprC4IFO0NZ1pI6AUsCkrzXRBu7VFUAFKC5pSrXVUOKmmJIxjtXRV5z60ajApYFIFd6AUelGoo6QCjoqOgBQoUKAFQHVihtFuwxbHhnhe5qdNRGuKZYkiV2GWGQPUZoEQ3RdgNO0OCP8Aicbjkc81PGucSFUXgAD0peaqfDtERRYo6FMmA3wAfBbNN4YiW3V0kbdKfEH7V1jKrGc9j/KvTvHLPhncHe3lO0VH3tv4sBA/N7j1p/NkuCVyDxxXa0tS4ZgCeMkDuKx1yrkVd9LEu4kbceoqU0g6npBSWyuPEjB/IxxxVh07RfH3yKCwB4z6mrJp/SnibXYqrAYKYzisNcjWdOemusobmGOO+PhSn3BxV5tZvEC45yMiqXP0ZCzeNAoIA/KeKTZx3ml3G5ZCQq42s3DVndQ5K0OMcHJrsuQP+qrOm9RBsJcqEIGWqwWl7DMu5HHIyKj/AFD4eKaWveuasmOSN3sK6rj3pWh0FGKSppVIFijpIo6AOioE0WaAOhRFgKQZB/6aAUWGMngetQslyLi+KqQVTjPzTbqfX4rKEW0Lo1zMdqr3P8qToq5jQvjf6jFT2d4uZ9dSpGAKSaU1JrSIoUKFCmGCTJtbyY9s0SW0sr7UXOBnOf70/htGkZcjy4Hlwf6+lTdrYm3gcorbckguMgH2/Su7W+McxDaVor3AZLlcMDkNjOf7Va9M6btRF5Uzxkbvel6XJDLEFClZFOc54NT1owJUPu3D3rl1u1pI5W1gYUAaIA+oIzkU4itFhcBNxB547LT9dpGKNYAp3LWWquDij8NeB5T7HFJks4HiIMQOfcZNO0XK0sLio4rqEuNFiKEKgDEdwvpTVLCaAqyZKn0FWjFFsHxSsOVW4pNQid5E827OA/pT621C7UgTID8g1JtEhP8AyovwqZzil7F4422qEuVlXaM96dfj1A3ZJGcdqL8MhGNtK/DpjG3FHaVkLW9Xuc/elG6J7Cuf4Za6CMDgU+0uCN02fy5onnkIyqfzrpsobaYMpnvnH+0yR/qM1XdVt+prmZo4LuOO37EhcP8AY1bStJIpWKlVu00cKkb3f+7Mnl3N3/epeFAhHBpy60W2iSFdEk80KBHNAVpEDoUKFMMwWyKKGjn3nPm4xn7GnaGLwfDKjk9g5BJ+RTe2kiuPLKzh2GMfw5pUVmYZGXxGYlhtyf71rupye2dpGZATtVlONoY/2qehQ45ZSc+/IqIt94JKjzg8gjvUzBIGTdnafXI7fes7VHcW9eAD9xTuEgZIHI4rhHyo8wYn1Fd0QD0J+RWdpu6/5xSxSFBxwDXRaXTKA4oYPsKMUoUGSV5pQWlGgKCtEBQxS8cUMUyEBR4o6FIBik4pdEaAQaQa6YoEUKcWFIxXVsCk0FXFu9FS2FI9auJChQoUw//Z" alt="" />
                </div>

                <div className="seller-name-and-intro">
                    <h4 className="seller-name">
                        고양이물고기
                    </h4>
                    <div className="intro">
                        고양이랑 물고기를 분양해요
                    </div>
                </div>
            </div>
            <div className="reviewRatingWrapper">
                <Stars rating={rating} size={2.5} />
                <span>{rating}</span>
            </div>
        </ChannelInfoWrapper>
    );
};

const ChannelInfoWrapper = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;

    .seller{
        display: flex;
        
        .seller-profile-img-wrapper{
            width: 100px;
            height: 100px;
            margin-right: 22px;
            border-radius: 100%;
            overflow: hidden;
        }
        .seller-name-and-intro{
            margin-top: 23px;

            .seller-name{
                font-size: 20px;
                margin-bottom: 2px;
            }
            .seller-intro{
                color: #474C52;
                font-size: 12px;
            }
        }
    }

    .reviewRatingWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;

        > span{
            margin-bottom: 5px;
            margin-left: 15px;
        }
    }
`;

export default ChannelInfo;