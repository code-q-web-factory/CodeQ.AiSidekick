import {ListItemPropertyState, PropertySchema} from "../../Model/ListItemProperty";
import AppContext, {AppContextType} from "../../AppContext";
import PureComponent from "../../Components/PureComponent";
import {DocumentNodeListItem, ListItemState} from "../../Model/ListItem";
import React from "react";
import TextAreaEditor, {TextAreaEditorSidekickConfiguration} from "../../Components/Editor/TextAreaEditor";
import {ListItemImage} from "../../Model/ListItemImage";
import {produce} from "immer";
import {node} from "prop-types";

interface DocumentNodeListViewItemImageProps {
    item: DocumentNodeListItem;
    imageProperty: ListItemImage;
    htmlContent: string;
    iframeRef: React.RefObject<HTMLIFrameElement>;
    lazyGenerate: boolean

    updateItemProperty(propertyName: string, value: string, state: ListItemPropertyState): void;
}

/**
 * If the first image fails to load, it will try the fallback and then a generic image
 */
function ImageWithFallback({src, fallback, ...rest} : {src: string, fallback: string}) {
    const [imageSrc, setImageSrc] = React.useState(src);
    const [fallbackType, setFallbackType] = React.useState<'none' | 'fallback' | 'srcFileExtension' | 'fallbackFileExtension' | 'genericIcon'>('none');

    const onError = () => {
        switch (fallbackType) {
            case 'none':
                setFallbackType('fallback');
                setImageSrc(fallback);
                break;
            case 'fallback':
                setFallbackType('srcFileExtension');
                setImageSrc('/_Resources/Static/Packages/Neos.Media/IconSets/vivid/' + src.split('.').pop().toLowerCase() + '.svg');
                break;
            case 'srcFileExtension':
                setFallbackType('fallbackFileExtension');
                setImageSrc('/_Resources/Static/Packages/Neos.Media/IconSets/vivid/' + fallback.split('.').pop().toLowerCase() + '.svg');
                break;
            case 'fallbackFileExtension':
                setFallbackType('genericIcon');
                setImageSrc('/_Resources/Static/Packages/Neos.Media/IconSets/vivid/image.svg');
                break;
        }
    };

    return <img
        src={imageSrc}
        alt=""
        onError={onError}
        {...rest}
    />
}

export default class DocumentNodeListViewItemImage extends PureComponent<DocumentNodeListViewItemImageProps, {}> {
    static contextType = AppContext;
    context: AppContextType;

    private canChangeAlternativeTextValue(): boolean {
        const {item, imageProperty} = this.props;
        return item.state === ListItemState.Initial && imageProperty.alternativeTextProperty?.state !== ListItemPropertyState.Generating;
    }

    private canChangeTitleTextValue(): boolean {
        const {item, imageProperty} = this.props;
        return item.state === ListItemState.Initial && imageProperty.titleTextProperty?.state !== ListItemPropertyState.Generating;
    }

    private getLabel(): string {
        const {imageProperty} = this.props;
        const nodeTypeSchema = this.context.nodeTypes[imageProperty.nodeTypeName];
        const imagePropertySchema = this.context.nodeTypes[imageProperty.nodeTypeName]?.properties?.[imageProperty.imagePropertyName] as PropertySchema;
        const nodeTypeLabelTranslation = this.translationService.translate(nodeTypeSchema.label, nodeTypeSchema.label);
        const imagePropertyLabelTranslation = this.translationService.translate(imagePropertySchema.ui?.label, imagePropertySchema.ui?.label);
        return `Element ${nodeTypeLabelTranslation} – ${imagePropertyLabelTranslation}`;
    }

    private scrollToImageInIframe(): void {
        const {imageProperty} = this.props;
        const message = {
            type: 'scrollToImage',
            imageUris: [imageProperty.fullsizeUri, imageProperty.thumbnailUri]
        };
        const iframe = this.props.iframeRef.current;
        iframe.contentWindow.postMessage(message, location.origin);
    }

    /* Since the image does not have an inherent sidekick configuration, we need to create one */
    private createSidekickConfigurationForImageProperty(sidekickModuleName): TextAreaEditorSidekickConfiguration {
        const {htmlContent, imageProperty} = this.props;
        return {
            module: sidekickModuleName,
            userInput: [
                {
                    identifier: 'url',
                    value: [imageProperty.fullsizeUri, imageProperty.thumbnailUri]
                },
                {
                    identifier: 'filename',
                    value: imageProperty.filename
                },
                {
                    identifier: 'content',
                    value: htmlContent
                }
            ]
        };
    }

    render() {
        const {item, imageProperty, lazyGenerate} = this.props;
        const alternativeTextPropertySchema = imageProperty.alternativeTextProperty?.propertyName ? this.context.nodeTypes[imageProperty.nodeTypeName]?.properties?.[imageProperty.alternativeTextProperty.propertyName] as PropertySchema : null;
        const titleTextPropertySchema = imageProperty.titleTextProperty?.propertyName ? this.context.nodeTypes[imageProperty.nodeTypeName]?.properties?.[imageProperty.titleTextProperty.propertyName] as PropertySchema : null;

        if (!alternativeTextPropertySchema && !titleTextPropertySchema) {
            return; // ignore properties that do not exist on this node type
        }

        return (
            <div style={{backgroundColor: '#323232', padding: '16px 16px 1px', marginBottom: '32px'}}>
                <label style={{fontWeight: 'bold'}}>{this.getLabel()}</label>
                <div style={{backgroundColor: '#ffffff', marginBottom: '16px', display: 'flex'}}>
                    <ImageWithFallback
                        src={imageProperty.thumbnailUri}
                        fallback={imageProperty.fullsizeUri}
                        onClick={() => this.scrollToImageInIframe()}
                        style={{maxHeight: '300px', maxWidth: '100%', margin: 'auto', cursor: 'pointer'}}
                    />
                </div>

                {alternativeTextPropertySchema ? <TextAreaEditor
                    disabled={!this.canChangeAlternativeTextValue()}
                    property={imageProperty.alternativeTextProperty}
                    propertySchema={alternativeTextPropertySchema}
                    item={item}
                    htmlContent={this.props.htmlContent}
                    sidekickConfiguration={this.createSidekickConfigurationForImageProperty(alternativeTextPropertySchema.ui.inspector.editorOptions.module)}
                    autoGenerateIfActionsMatch={true}
                    showGenerateButton={true}
                    showResetButton={true}
                    lazyGenerate={lazyGenerate}
                    updateItemProperty={(value: string, state: ListItemPropertyState) => this.props.updateItemProperty('alternativeTextProperty', value, state)}/> : null}

                {titleTextPropertySchema ? <TextAreaEditor
                    disabled={!this.canChangeTitleTextValue()}
                    property={imageProperty.titleTextProperty}
                    propertySchema={titleTextPropertySchema}
                    item={item}
                    htmlContent={this.props.htmlContent}
                    sidekickConfiguration={this.createSidekickConfigurationForImageProperty(titleTextPropertySchema.ui.inspector.editorOptions.module)}
                    autoGenerateIfActionsMatch={true}
                    showGenerateButton={true}
                    showResetButton={true}
                    lazyGenerate={lazyGenerate}
                    updateItemProperty={(value: string, state: ListItemPropertyState) => this.props.updateItemProperty('titleTextProperty', value, state)}/> : null}
            </div>
        )
    }
}
