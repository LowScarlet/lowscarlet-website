import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const IconComp = (props: any) => {
    const { icon } = props
    if (icon === 'instagram') return (<InstagramIcon />)
    if (icon === 'discord') return (<VideogameAssetIcon />)
    if (icon === 'linkedin') return (<LinkedInIcon />)
    if (icon === 'github') return (<GitHubIcon />)
    return (<></>)
}
export default IconComp