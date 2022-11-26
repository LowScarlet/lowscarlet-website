import MyAppBar from './appbar'
import { DefaultSeo } from 'next-seo'
import SEO from '../../configs/seo'

export default function Layout({ children }: any) {
    return (<>
        <DefaultSeo {...SEO} />
        <MyAppBar {...children} />
        <main>{children}</main>
    </>)
}