import Drawer from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer>
      <Drawer.Screen name="home" options={{}} />
      <Drawer.Screen name="favorites" options={{}} />
    </Drawer>
  );
};

export default Layout;
