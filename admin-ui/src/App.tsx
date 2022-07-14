import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { InstanceList } from "./instance/InstanceList";
import { InstanceCreate } from "./instance/InstanceCreate";
import { InstanceEdit } from "./instance/InstanceEdit";
import { InstanceShow } from "./instance/InstanceShow";
import { DatabaseList } from "./database/DatabaseList";
import { DatabaseCreate } from "./database/DatabaseCreate";
import { DatabaseEdit } from "./database/DatabaseEdit";
import { DatabaseShow } from "./database/DatabaseShow";
import { DbaList } from "./dba/DbaList";
import { DbaCreate } from "./dba/DbaCreate";
import { DbaEdit } from "./dba/DbaEdit";
import { DbaShow } from "./dba/DbaShow";
import { HostList } from "./host/HostList";
import { HostCreate } from "./host/HostCreate";
import { HostEdit } from "./host/HostEdit";
import { HostShow } from "./host/HostShow";
import { ServicesLinkedList } from "./servicesLinked/ServicesLinkedList";
import { ServicesLinkedCreate } from "./servicesLinked/ServicesLinkedCreate";
import { ServicesLinkedEdit } from "./servicesLinked/ServicesLinkedEdit";
import { ServicesLinkedShow } from "./servicesLinked/ServicesLinkedShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GDT_Hackerverse_2022"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Instance"
          list={InstanceList}
          edit={InstanceEdit}
          create={InstanceCreate}
          show={InstanceShow}
        />
        <Resource
          name="Database"
          list={DatabaseList}
          edit={DatabaseEdit}
          create={DatabaseCreate}
          show={DatabaseShow}
        />
        <Resource
          name="Dba"
          list={DbaList}
          edit={DbaEdit}
          create={DbaCreate}
          show={DbaShow}
        />
        <Resource
          name="Host"
          list={HostList}
          edit={HostEdit}
          create={HostCreate}
          show={HostShow}
        />
        <Resource
          name="ServicesLinked"
          list={ServicesLinkedList}
          edit={ServicesLinkedEdit}
          create={ServicesLinkedCreate}
          show={ServicesLinkedShow}
        />
      </Admin>
    </div>
  );
};

export default App;
