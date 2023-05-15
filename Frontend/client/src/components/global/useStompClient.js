import { useEffect, useRef } from "react";
import Stomp from "stompjs";
import { apiWS } from "../../contexts/Constants";

function useStompClient() {
  const stompClientRef = useRef(null);

  useEffect(() => {
    stompClientRef.current = Stomp.client(`ws://${apiWS}/chat`);
    // stompClientRef.current.debug = false;
    stompClientRef.current.connect(
      {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
      () => {
        console.log("Connected to WebSocket server");
        // any additional setup code here
      }
    );
  }, []);

  return stompClientRef.current;
}

export default useStompClient;
