import React from "react";
import PureComponent from "../../Components/PureComponent";
import {ListItemProperty, ListItemPropertyState, PropertySchema} from "../../Model/ListItemProperty";
import TextAreaEditor from "../../Components/Editor/TextAreaEditor";
import {DocumentNodeListItem, ListItemState} from "../../Model/ListItem";
import AppContext, {AppContextType} from "../../AppContext";
import ErrorMessage from "../../Components/ErrorMessage";
import FocusKeywordEditor from "../../Components/Editor/FocusKeywordEditor";

interface DocumentNodeListItemPropertyProps {
    item: DocumentNodeListItem;
    property: ListItemProperty;
    readonly?: boolean
    htmlContent: string;
    updateItemProperty(value: string, state: ListItemPropertyState): void;
}
export default class DocumentNodeListViewItemProperty extends PureComponent<DocumentNodeListItemPropertyProps, {}> {
    static contextType = AppContext;
    context: AppContextType;

    private canChangeValue(): boolean
    {
        const {item, property, readonly} = this.props;
        return !readonly && item.state === ListItemState.Initial && property.state !== ListItemPropertyState.Generating;
    }

    render() {
        const {item, property, readonly} = this.props;
        const propertySchema = this.context.nodeTypes[item.nodeTypeName]?.properties?.[property.propertyName] as PropertySchema;

        if (!propertySchema) {
            return; // ignore properties that no not exist on this node type
        }

        switch (propertySchema?.ui?.inspector?.editor) {
            case 'NEOSidekick.AiAssistant/Inspector/Editors/FocusKeywordEditor':
                if (readonly) {
                    return (
                        <TextAreaEditor
                            disabled={true}
                            property={property}
                            propertySchema={propertySchema}
                            item={item}
                            rows={1}
                        />
                    );
                }
                return (
                    <FocusKeywordEditor
                        disabled={!this.canChangeValue()}
                        property={property}
                        propertySchema={propertySchema}
                        item={item}
                        htmlContent={this.props.htmlContent}
                        updateItemProperty={(value: string, state: ListItemPropertyState) => this.props.updateItemProperty(value, state)}
                    />
                )
            case 'Neos.Neos/Inspector/Editors/TextFieldEditor':
            case 'Neos.Neos/Inspector/Editors/TextAreaEditor':
                return (
                    <TextAreaEditor
                        disabled={!this.canChangeValue()}
                        property={property}
                        propertySchema={propertySchema}
                        item={item}
                        htmlContent={this.props.htmlContent}
                        updateItemProperty={(value: string, state: ListItemPropertyState) => this.props.updateItemProperty(value, state)}
                    />
                )
            case 'NEOSidekick.AiAssistant/Inspector/Editors/MagicTextFieldEditor':
            case 'NEOSidekick.AiAssistant/Inspector/Editors/MagicTextAreaEditor':
                return (
                    <TextAreaEditor
                        disabled={!this.canChangeValue()}
                        property={property}
                        propertySchema={propertySchema}
                        item={item}
                        htmlContent={this.props.htmlContent}
                        updateItemProperty={(value: string, state: ListItemPropertyState) => this.props.updateItemProperty(value, state)}
                        autoGenerateIfActionsMatch={true}
                    />
                )
            default:
                return <ErrorMessage message={`${propertySchema?.ui.inspector.editor} is currently not supported`} />
        }
    }
}
