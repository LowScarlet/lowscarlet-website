import { DefaultSeo } from 'next-seo'
import SEO from '../../configs/seo'

export default function Layout({ children }: any) {
    return (<>
        <DefaultSeo {...SEO} />
        <main>{children}</main>
    </>)
}