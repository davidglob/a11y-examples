import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { Layout } from "../pages/Layout/Layout";
import { Welcome } from "../components/Welcome/Welcome";
import { Dropdown } from "../components/Dopdown/Dropdown";
import { Form } from "../components/Form/Form";
import { Images } from "../components/Images/Images";
import { Links } from "../components/Links/Links";
import { Modal } from "../components/Modal/Modal";
import { Roles } from "../components/Roles/Roles";
import { Selectbox } from "../components/SelectBox/Selectbox";
import { Simplesemantic } from "../components/SimpleSemantic/Simplesemantic";
import { Table } from "../components/Table/Table";
import { Toast } from "../components/Toast/Toast";
import { Video } from "../components/Video/Video";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout children={<Welcome />} />
        </Route>
        <Route exact path="/dropdown">
          <Layout children={<Dropdown />} />
        </Route>
        <Route exact path="/form">
          <Layout children={<Form />} />
        </Route>
        <Route exact path="/images">
          <Layout children={<Images />} />
        </Route>
        <Route exact path="/links">
          <Layout children={<Links />} />
        </Route>
        <Route exact path="/modal">
          <Layout children={<Modal />} />
        </Route>
        <Route exact path="/roles">
          <Layout children={<Roles />} />
        </Route>
        <Route exact path="/selectbox">
          <Layout children={<Selectbox />} />
        </Route>
        <Route exact path="/simplesemantic">
          <Layout children={<Simplesemantic />} />
        </Route>
        <Route exact path="/table">
          <Layout children={<Table />} />
        </Route>
        <Route exact path="/toast">
          <Layout children={<Toast />} />
        </Route>
        <Route exact path="/video">
          <Layout children={<Video />} />
        </Route>
        <Route>
          <Layout children={<Welcome />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
