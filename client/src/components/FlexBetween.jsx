import { Box } from "@mui/material"
import { styled } from '@mui/system'

//styled component made to reuse the same component

const FlexBetween = styled(Box)({
    display:"flex",
    justifyContent:'space-between',
    alignItems:'center'
});
export default FlexBetween;