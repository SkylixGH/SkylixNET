export default function Center(props: { children: any }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>{ props.children }</div>
    )
}