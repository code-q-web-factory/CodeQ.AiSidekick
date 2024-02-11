import React, {ReactElement} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import AssetModuleConfigurationInterface, {
    AssetPropertyName, Language,
    OnlyAssetsInUse
} from "../Model/AssetModuleConfigurationInterface";
import StateInterface from "../Store/StateInterface";
import {setModuleConfiguration} from "../Store/AppSlice";
import PureComponent from "./PureComponent";
import {enumKeys} from "../Util";

@connect((state: StateInterface) => ({
    started: state.app.started,
    configuration: state.app.moduleConfiguration,
    initialConfiguration: state.app.initialModuleConfiguration
}), (dispatch, ownProps) => ({
    updateConfiguration(moduleConfiguration: AssetModuleConfigurationInterface) {
        dispatch(setModuleConfiguration({moduleConfiguration}))
    }
}))
export default class ConfigurationForm extends PureComponent<ConfigurationFormProps> {
    static propTypes = {
        started: PropTypes.bool,
        configuration: PropTypes.object,
        initialConfiguration: PropTypes.object,
        updateConfiguration: PropTypes.func
    }

    private renderOnlyInUseField(): ReactElement
    {
        const {configuration, initialConfiguration, updateConfiguration} = this.props;
        // This is intentionally a "==" comparison to both match null and undefined
        return (initialConfiguration?.onlyAssetsInUse == null ?
            <div className={'neos-control-group'}>
                <label className={'neos-control-label'}>
                    {this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.onlyAssetsInUse.label', 'Which images?')}
                </label>
                <div className={'neos-controls'}>
                    <select
                        value={configuration.onlyAssetsInUse}
                        onChange={e => updateConfiguration({onlyAssetsInUse: e.target.value})}
                        defaultValue={OnlyAssetsInUse.all}>
                        <option value={OnlyAssetsInUse.all}>{this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.onlyAssetsInUse.0', 'All images')}</option>
                        <option value={OnlyAssetsInUse.onlyInUse}>{this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.onlyAssetsInUse.1', 'Only images in use')}</option>
                    </select>
                </div>
            </div> : null
        )
    }

    private renderPropertyNameField(): ReactElement
    {
        const {configuration, initialConfiguration, updateConfiguration} = this.props;
        // This is intentionally a "==" comparison to both match null and undefined
        return (initialConfiguration?.propertyName == null ?
            <div className={'neos-control-group'}>
                <label className={'neos-control-label'}>
                    {this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.propertyName.label', 'Welches Feld?')}
                </label>
                <div className={'neos-controls'}>
                    <select
                        value={configuration.propertyName}
                        onChange={e => updateConfiguration({propertyName: e.target.value})}
                        defaultValue={AssetPropertyName.title}>
                        {enumKeys(AssetPropertyName).map(key =>
                            <option value={key}>
                                {this.translationService.translate('Neos.Media.Browser:Main:field_' + key, key)}
                            </option>
                        )}
                    </select>
                </div>
            </div> : null
        )
    }

    render() {
        const {started, configuration, updateConfiguration} = this.props;
        return (!started ?
            <div style={{marginBottom: '1rem'}}>
                {this.renderOnlyInUseField()}
                {this.renderPropertyNameField()}
                <div className={'neos-control-group'}>
                    <label className={'neos-control-label'}>
                        {this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.limit.label', 'How many images per page?')}
                    </label>
                    <div className={'neos-controls'}>
                        <select
                            value={configuration.limit}
                            onChange={e => updateConfiguration({limit: e.target.value})}
                            defaultValue={10}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                        </select>
                    </div>
                </div>
                <div className={'neos-control-group'}>
                    <label className={'neos-control-label'}>
                        {this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.language.label', 'Which language?')}
                    </label>
                    <div className={'neos-controls'}>
                        <select
                            value={configuration.language}
                            onChange={e => updateConfiguration({language: e.target.value})}>
                            {enumKeys(Language).map(language =>
                                <option value={language}>
                                    {this.translationService.translate('NEOSidekick.AiAssistant:AssetModule:configuration.language.' + language, language)}
                                </option>
                            )}
                        </select>
                    </div>
                </div>
            </div> : null
        )
    }
}

interface ConfigurationFormProps {
    configuration: AssetModuleConfigurationInterface
}
