import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import selectors from 'src/modules/user/view/userViewSelectors';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserViewPage from 'src/view/user/view/UserViewPage';



function UserDetailsToolbar(props) {
  const { match } = props;

  const user = useSelector(selectors.selectUser);

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    userSelectors.selectPermissionToEdit,
  );

  return (
    <Toolbar>
      <Tabs
        defaultActiveKey="informations"
        id="tab-inf-user"
      >
        <Tab eventKey="informations" title="Informations">
          <UserViewPage />
        </Tab>
        <Tab eventKey="adhesions" title="Adhesions">
         
        </Tab>

        <Tab eventKey="Votes" title="Votes">
        
        </Tab>
        <Tab eventKey="dons" title="Dons">
   
        </Tab>
      </Tabs>
    </Toolbar>
  );
}

export default UserDetailsToolbar;
