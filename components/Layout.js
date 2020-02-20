import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: 'purple'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;