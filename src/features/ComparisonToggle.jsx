import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ComparisonToggle = ({ comparisonMode, onChange }) => {
    return (
        <ToggleButtonGroup
            value={comparisonMode}
            exclusive
            color="primary"
            onChange={onChange}
            size="small"
            // sx={{ ml: 1 }}
        >
            <ToggleButton value={false} sx={{ textTransform: 'none', px: 1.5 }}>
                Single
            </ToggleButton>
            <ToggleButton value="2-panel" sx={{ textTransform: 'none', px: 1.5 }}>
                2-Panel
            </ToggleButton>
            <ToggleButton value="4-panel" sx={{ textTransform: 'none', px: 1.5 }}>
                4-Panel
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ComparisonToggle
