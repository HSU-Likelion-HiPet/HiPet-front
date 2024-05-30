const regionArray = [
    ["전체", "_ALL"],
    ["서울", "_SEOUL"],
    ["경기", "_GYEONGGI"],
    ["인천", "_INCHEON"],
    ["대전", "_DAEJEON"],
    ["세종", "_SEJONG"],
    ["충남", "_CHUNGNAM"],
    ["충북", "_CHUNGBUK"],
    ["광주", "_GWANGJU"],
    ["전남", "_JEONNAM"],
    ["전북", "_JEONBUK"],
    ["대구", "_DAEGU"],
    ["경북", "_GYEONGBUK"],
    ["부산", "_BUSAN"],
    ["울산", "_ULSAN"],
    ["경남", "_GYEONGNAM"],
    ["강원", "_GANGWON"],
    ["제주", "_JEJU"]
];

const findRegionName = (region_code) => {
    const foundRegion = regionArray.find(region => region_code === region[1]);
    if (foundRegion) {
        return foundRegion[0];
    } else {
        return "Unknown";
    }
};

export default findRegionName;
