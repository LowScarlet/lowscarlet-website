import MyAppBar from './appbar'

export default function Layout({ children }:any) {
    return (<>
        <MyAppBar {...children}/>
        <main>{children}</main>
    </>)
}