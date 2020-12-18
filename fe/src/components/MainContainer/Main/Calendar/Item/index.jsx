import React from "react";
// import { ContestWrap } from "./contestwrap";
import { Title, WhatDay, Container, WhatContest, ContestWrap } from "./style";

// 여기서 대회정보들을 가져와서, Container 안에 넣는다.
const Item = ({ id }) => {
    return (
        <Container>
            <Title>{id}</Title>
            <ContestWrap>
                <WhatContest>대회 1</WhatContest>
                <WhatDay>대회 날짜</WhatDay>
            </ContestWrap>
            <ContestWrap>
                <WhatContest>대회 1</WhatContest>
                <WhatDay>대회 날짜</WhatDay>
            </ContestWrap>
        </Container>
    );
};

export default Item;
