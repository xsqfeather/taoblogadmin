import chineseMessages from "./i18n/zh";
import polyglotI18nProvider from "ra-i18n-polyglot";
import { Admin, CustomRoutes, Resource } from "react-admin";
import adminDataProvider from "./services/adminDataProvider";
import hapiAuthProvider from "./services/hapiAuthProvider";
import Layout from "./layout/Layout";
import Login from "./layout/Login";
import { Dashboard } from "./dashboard";
import { Route } from "react-router";
import Configuration from "./customRoutes/Configuration";
import admins from "./resources/admins";
import tenants from "./resources/tenants";
import users from "./resources/users";
import wallets from "./resources/wallets";
import conversations from "./resources/conversations";
import ai_models from "./resources/ai_models";
import wallet_records from "./resources/wallet_records";
import articles from "./resources/articles";

const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "en") {
    return import("./i18n/en").then((messages) => messages.default);
  }
  return chineseMessages;
}, "zh");

function App() {
  return (
    <Admin
      dataProvider={adminDataProvider}
      authProvider={hapiAuthProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
      loginPage={Login}
      dashboard={Dashboard}
    >
      <CustomRoutes>
        <Route path="/configuration" element={<Configuration />} />
      </CustomRoutes>
      <Resource name="admins" list={admins.list} icon={admins.icon} />
      <Resource
        name="articles"
        list={articles.list}
        icon={articles.icon}
        create={articles.create}
      />
      <Resource
        name="tenants"
        edit={tenants.edit}
        list={tenants.list}
        create={tenants.create}
        icon={tenants.icon}
      />
      <Resource
        name="users"
        list={users.list}
        icon={users.icon}
        create={users.create}
      />
      <Resource name="wallets" list={wallets.list} icon={wallets.icon} />
      <Resource
        name="wallet_records"
        list={wallet_records.list}
        icon={wallet_records.icon}
      />
      <Resource
        name="conversations"
        list={conversations.list}
        create={conversations.create}
        icon={conversations.icon}
      />
      <Resource name="ai_models" list={ai_models.list} icon={ai_models.icon} />
    </Admin>
  );
}

export default App;
