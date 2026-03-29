import React from 'react'
import {Box, Button, Modal, Typography} from "@mui/material";
import CreateNewShorten from "./CreateNewShorten.jsx";


const ShortenPopUp = ({open, setOpen, refetch}) => {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {/*<Box>*/}
                    {/*    <Typography id="modal-modal-title" variant="h6" component="h2">*/}
                    {/*        Text in a modal*/}
                    {/*    </Typography>*/}
                    {/*    <Typography id="modal-modal-description" sx={{ mt: 2 }}>*/}
                    {/*        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}

                    <div className={"flex justify-center items-center h-full w-full"}>
                        <CreateNewShorten setOpen={setOpen} refetch={refetch} />

                    </div>
                </Modal>
            </div>
        </div>
    )
}
export default ShortenPopUp
