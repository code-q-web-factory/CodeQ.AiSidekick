import {GlobalRegistry} from "@neos-project/neos-ts-interfaces";
import RegenerateButton from "./Components/RegenerateButton/RegenerateButton";
import AiButton from "./Components/AiButton/AiButton";
import AiModal from "./Components/AiModal/AiModal";

export default (globalRegistry: GlobalRegistry) => {
    const ckEditorRegistry = globalRegistry.get('ckEditor5');
    const richtextToolbar = ckEditorRegistry.get('richtextToolbar');

    richtextToolbar.set('NEOSidekick.AiAssistant:ModifyButton', {
        component: AiButton,
        isVisible: editorOptions => editorOptions?.sidekickModifyButton !== false,
    }, 'start');

    richtextToolbar.set('NEOSidekick.AiAssistant:generate', {
        component: RegenerateButton,
        isVisible: () => true,
    }, 'end');

    const containerRegistry = globalRegistry.get('containers');
    containerRegistry.set('Modals/AiModal', AiModal);
}
