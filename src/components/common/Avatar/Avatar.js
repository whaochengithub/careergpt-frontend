import { styled } from '@mui/material'
import { Avatar as MUIAvatar } from '@mui/material'
import React from 'react'

type Props = {}

export const Avatar = styled(MUIAvatar)(({ theme }) => ({
    fontWeight: 'bolder',
}));