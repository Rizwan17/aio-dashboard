const IconWrapper = ({
    children,
    style = {},
    onClick = () => {}
}) => {
    return (
        <div 
        onClick={onClick}
        style={{
            position: 'relative',
            ...style
        }}>
            {children}
        </div>
    );
}

export default IconWrapper