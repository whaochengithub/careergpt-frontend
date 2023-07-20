import React from 'react'
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material';

type Props = {}

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#DDD' : '#2D3843',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 22,
        color: '#333',
        padding: '8px 13px 8px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'MetricHPEXS'
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));