import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";  


const ImagePopup = ({ img, caption }) => {

    const [isOpen, setOpen] = useState(false);
   
    function handlePosterClick() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

  return (
    <div>
        <div >
            <Card 
                sx={{
                    maxWidth: '90%',
                    width: '600px',
                    margin: '20px auto',
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: 6,
                        cursor: 'pointer',
                    },
                }}>
                <CardActionArea >
                    <CardMedia
                        onClick={handlePosterClick}
                        component="img"
                        height= "300px"
                        width = "600px"
                        image={ img }
                        alt="Database image"
                    />
                </CardActionArea>
                <Modal open={ isOpen} onClose={handleClose}>
                    <Box
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 2,
                    outline: "none",
                    maxHeight: "90vh",
                    overflow: "auto",
                    width: "95vw",             
                    maxWidth: "1200px",        
                }}
                    >
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            color: "grey.500",
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    <img
                        src={ img }
                        alt="Enlarged Poster"
                        style={{
                        width: "100%",
                        maxWidth: "1600px",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                        }}
                    />
                    </Box>
                </Modal>
            </Card> 
            <Typography
                variant="body2"
                align="center"
                sx={{ mt: 1, color: "text.secondary", fontStyle: "italic" }}
                >
                { caption }
            </Typography>          
        </div>
    </div>
  )
}

export default ImagePopup
