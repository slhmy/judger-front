import { Layout, Menu } from 'antd';
import './App.css';

const { Header } = Layout;

const App = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default App;