import React from "react";
import { v1 as uuid } from "uuid";
import Button from '@material-ui/core/Button';



const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }
    return (
        <Button
            onClick={create}
            variant={"contained"}
            size={"large"}
        >Create Room
        </Button>
    );
}

export default CreateRoom;
