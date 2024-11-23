import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
const useStore = () => {
    const username = useSelector((state: RootState) => state.user.username);
    const typedMessage = useSelector((state: RootState) => state.user.typedMessage);
    const messages = useSelector((state: RootState) => state.user.messages);
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const id = useSelector((state: RootState) => state.user.id);
    return {username, typedMessage, messages, isLoggedIn, id};
};

export default useStore;