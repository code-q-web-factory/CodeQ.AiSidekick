import React from "react";
import PureComponent from "../PureComponent";
import ErrorView from "./ErrorView";
import ConfigurationView from "./ConfigurationView";
import {Endpoints} from "../../Model/Endpoints";
import {AppState} from "../../Enums/AppState";
import ListView from "./ListView";
import {ModuleConfiguration} from "../../Model/ModuleConfiguration";
import AppContext from "../../AppContext";

export default class RootView extends PureComponent<RootViewProps, RootViewState> {
    constructor(props) {
        super(props);
        this.state = {
            appConfiguration: props.appConfiguration,
            appState: AppState.Configure,
            initialAppConfiguration: props.initialAppConfiguration,
            overviewUri: props.overviewUri,
            scope: props.scope,
            updateAppConfiguration: (newConfiguration: Partial<ModuleConfiguration>) => this.updateAppConfiguration(newConfiguration),
            updateAppState: (newState: AppState) => this.updateAppState(newState),
            updateErrorMessage: (errorMessage: string) => this.setError(errorMessage),
        }
    }

    private updateAppState(newState: AppState) {
        this.setState(state => ({...state, appState: newState}))
    }

    private updateAppConfiguration(newConfiguration: Partial<ModuleConfiguration>) {
        this.setState(state => ({
                ...state,
                appConfiguration: {
                    ...state.appConfiguration,
                    ...newConfiguration
                }
            })
        )
    }

    private setError(errorMessage: string) {
        this.updateAppState(AppState.Error)
        this.setState(state => ({
            ...state,
            errorMessage
        }))
    }

    render() {
        const {endpoints}: {endpoints: Endpoints} = this.props;
        return (
            <AppContext.Provider value={this.state}>
                {this.state.appState === AppState.Error ? <ErrorView /> : null}
                {this.state.appState === AppState.Configure ? <ConfigurationView/> : null}
                {this.state.appState === AppState.Edit ? <ListView overviewUri={endpoints.overview}/> : null}
            </AppContext.Provider>
        )
    }
}

export interface RootViewProps {
    scope: string,
    endpoints: object,
    appConfiguration: ModuleConfiguration,
    initialAppConfiguration: ModuleConfiguration,
    overviewUri: string
}

export interface RootViewState {
    appConfiguration: ModuleConfiguration,
    appState: AppState,
    errorMessage?: string,
    initialAppConfiguration: ModuleConfiguration,
    scope: string,
    updateAppConfiguration: Function,
    updateAppState: Function,
    updateErrorMessage: Function,
    overviewUri: string
}
