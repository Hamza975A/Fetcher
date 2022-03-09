import React, {useState,useEffect} from "react";
import {
  GlobalContainer,
  SimpleContainer
} from "../../components/GlobalComponents";
import { PastOrderCard } from "../../components/PastOrder";
import {useRouter} from 'next/router'

/**
 * Home page for the website.
 * @return {JSX.Element}
 */
export default function Home({pasOrders}) {
    const [pastOrders, setPastOrders] = useState([]);


    useEffect(() => {
        setPastOrders(pasOrders);
      }, [pasOrders]);
  return (
    <GlobalContainer>
      <h2>Past Order Details</h2>

      <PastOrderCard
        ordernum="123456789"
        driver="Hemal [CONTACTLESS] leave under bench on desk"
        pickuplocation="Walmart, 1706 Preston Ave N"
        dropofflocation="University of Saskatchewan"
        parcelsize="Medium"
        deliveryfee="$19.91"
        tips="$5.00"
        total="$24.91"
      />

      <SimpleContainer>
        <h2>Past Orders</h2>
        {pastOrders.map((order, index) => {
            const router = useRouter()
            const id = router.query.id

            if (index == id){
          return (
            <PastOrderCard
                ordernum={order.ordernumber}
                driver={index}
                pickuplocation="Walmart, 1706 Preston Ave N" 
                dropofflocation="University of Saskatchewan"
                parcelsize="Medium"
                deliveryfee="$19.91"
                tips="$5.00"
                total={order.price}
            />
          );
            }
        })}
      </SimpleContainer>


    </GlobalContainer>
  );
}

/**
 * Function to fetch current and past orders for the user via API calls.
 */
export async function getServerSideProps() {
  
    const res1 = await fetch("http://localhost:3000/api/past-orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const pasOrders = await res1.json();
  
    return {
      props: { pasOrders },
    };
  }
