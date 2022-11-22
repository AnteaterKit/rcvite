import { Button } from "@mui/material";
import { useContext } from "react";
import { Userlist } from "../../components/Whiteboard/userlist"
import { Userbar } from "../../components/Whiteboard/usersbar"
import { WhiteBoardStore } from "../../state/whiteboard.state";

export const Whiteboard: React.FC<{msg: string}> = () => {
    const { state, dispatch } = useContext(WhiteBoardStore);

    const load = () => {
        dispatch('loaded');
    }
    return (
        <div>
            {
                state.loading ? ( <div>Whiteboard loading 
                    <Button variant="text"  onClick={load}>Load</Button>
                </div>)
                :( <div> <div>Whiteboard</div>
                    <Userlist msg={""}></Userlist>
                    <Userbar msg={""}></Userbar>
                    </div>
                )
            }
          
        </div>
    )
}