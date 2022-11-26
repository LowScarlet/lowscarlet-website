import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const IconComp = (props: any) => {
    const { icon } = props
    if (icon === 'LocalLibrary') return (<LocalLibraryIcon />)
    if (icon === 'DataObject') return (<DataObjectIcon />)
    if (icon === 'DesignServices') return (<DesignServicesIcon />)
    if (icon === 'Javascript') return (<JavascriptIcon />)
    if (icon === 'Web') return (<WebIcon />)
    if (icon === 'DeveloperMode') return (<DeveloperModeIcon />)
    return (<></>)
}
export default IconComp