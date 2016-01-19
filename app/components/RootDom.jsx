import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import * as BootstrapService from '../services/bootstrap_service';
import Dashboard from './Dashboard.jsx';
import Header from '../../node_modules/goodstrap/packages/Header/ReactHeader';

class RootDom extends Component {
    static propTypes = {
        appState: PropTypes.object.isRequired,
        branding: PropTypes.object.isRequired,
        onLogout: PropTypes.func.isRequired,
        onMenuItemClick: PropTypes.func.isRequired,
        intl: PropTypes.object.isRequired
    };

    render() {
        let intl = this.props.intl;
        return (
            <div className="app-root">
                <Header
                    branding={this.props.branding}
                    projectTitle={BootstrapService.getProjectTitle(this.props.appState)}
                    menuItems={BootstrapService.getLocalizedMenuItems(this.props.appState, intl)}
                    accountMenuItems={BootstrapService.getLocalizedAccountMenuItems(this.props.appState, intl)}
                    userName={BootstrapService.getUserFullName(this.props.appState)}
                    onLogout={this.props.onLogout}
                    onMenuItemClick={this.props.onMenuItemClick}
                />
                <Dashboard />
            </div>
        );
    }
}

export default injectIntl(RootDom);