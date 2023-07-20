import { Box, IconButton, Modal as MUIModal, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../Button';

type Props = {}

const StyledModal = styled(MUIModal)(({ theme }) => ({

}));

export const Modal = ({ title, width, onClose, actionButtons, children, ...restProps }) => {
    return <StyledModal onClose={onClose} {...restProps}>
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: width || 'auto',
            bgcolor: 'background.paper',
            borderRadius: '6.825px',
            boxShadow: '0px 0px 13.649999618530273px 0px rgba(0, 0, 0, 0.40)',
            p: 3,
        }}>
            <Stack direction={'column'}>
                <Stack sx={{ marginBottom: 2 }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography sx={{
                        color: '#444',
                        fontSize: '20.475px',
                        fontWeight: 600,
                    }}>{title}</Typography>
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </Stack>
                {children}
                <Stack sx={{ marginTop: 2 }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Button variant='outlined' onClick={onClose}>Cancel</Button>
                    <Box>
                        {actionButtons}
                    </Box>
                </Stack>
            </Stack>
        </Box>
    </StyledModal>
};