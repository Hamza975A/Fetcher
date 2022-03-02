import styled from "styled-components";
import React from "react";


export const OrderCardWrapper = styled.div`
    padding-left: 25px;
    background-color: #FFEEE1;
    display: flex;
    justify-content: space-between;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
`

export const OrderCardLeftItems = styled.div`
    flex-direction: column;
    align-self:center;
    //padding: 25px;
    font-size: 20px;
    //background-color: #75E1B9;
`

export const OrderCardRightItems = styled.div`
    display: flex;
    align-self:center;
    padding: 25px;
    //background-color: #2939B9;
`

export const OrderCardViewOrderButton = styled.button`
    background-color: #FF9A42;
    font-size: 36px;
    line-height: 84px;
    border: none;
    padding: 0px 20px;
    border-width: 0.5px;
    border-radius: 10px;
    &:hover {
        background-color: #ffbe85;

    }

`

export const OrderListPageWrapper = styled.div`
`
export const OrderCard = (props) => {
    return( 
        <OrderListPageWrapper>
            <OrderCardWrapper>
                <OrderCardLeftItems>
                    <p>Order Number: {props.ordernum}</p>
                    <p>Date: {props.date}</p>
                    <p>Total: {props.price}</p>
                </OrderCardLeftItems>
                <OrderCardRightItems>
                    <OrderCardViewOrderButton>
                        {props.buttontext}
                    </OrderCardViewOrderButton>
                </OrderCardRightItems>
            </OrderCardWrapper>
        </OrderListPageWrapper>
    )
}
