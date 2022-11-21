import { Button } from "@mui/material";
import { useContext } from "react";
import { Userlist } from "../../components/Whiteboard/userlist"
import { Userbar } from "../../components/Whiteboard/usersbar"
import { WhiteBoardStore } from "../../state/whiteboard.state";

export const Whiteboard: React.FC<{msg: string}> = () => {
    const { state, dispatch } = useContext(WhiteBoardStore);
    console.log('state2', state, dispatch);
    console.log('dispatch', dispatch);

    
    const load = () => {
        console.log('The link was clicked.', dispatch);
        dispatch('load');
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