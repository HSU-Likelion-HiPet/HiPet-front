
export default (createAt) =>{
    const currentDate = new Date();
    const createAtDate = new Date(createAt);

    const diffDate = Math.floor((currentDate.getTime() - createAtDate.getTime()) / (1000 * 60 * 60 * 24));

    switch(true){
        case diffDate === 0:
            return "오늘";
        case diffDate >= 1 && diffDate <= 13:
            return `${diffDate}일 전`;
        case diffDate >= 14 && diffDate < 30:
            return `${Math.floor(diffDate / 7)}주 전`;
        case diffDate >= 30 && diffDate < 365:
            return `${Math.floor(diffDate / 30) === 12 ? 11 : Math.floor(diffDate / 30)}개월 전`;
        default:
            return `${Math.floor(diffDate / 365) === 0 ? 1 : Math.floor(diffDate / 365)}년 전`;
    }
}