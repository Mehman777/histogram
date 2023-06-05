import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiSlider from '@mui/material/Slider';

const Slider = styled(MuiSlider)({
    '& .MuiSlider-markLabel': {
        transform: "rotate(325deg)",marginLeft:"-15px",fontSize:"12px"
    }
});

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 40,
        label: '40°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

export default function TrackInvertedSlider(props) {
    return (
        <Box sx={{ width: 600 }}>

            <Slider
                track="inverted"
                aria-labelledby="track-inverted-range-slider"
                getAriaValueText={valuetext}
                defaultValue={props.olcu}
                marks={marks}
                aria-orientation={"horizontal"}
                //style={{transform: "rotate(90deg)"}}
            />
        </Box>
    );
}
