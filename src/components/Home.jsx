import { useContext } from "react";
import UserContext from "./UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div> Hello {user}</div>
    </>
  );
}
