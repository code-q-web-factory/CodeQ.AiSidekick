<?php
namespace NEOSidekick\AiAssistant\Controller;

/*
 * This file is part of the NEOSidekick.AiAssistant package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\View\ViewInterface;
use Neos\Flow\Security\Context;
use Neos\Fusion\View\FusionView;
use Neos\Neos\Controller\Module\AbstractModuleController;
use Neos\Neos\Service\UserService;

/**
 * @noinspection PhpUnused
 */
class AssetModuleController extends AbstractModuleController
{
    protected $defaultViewObjectName = FusionView::class;

    /**
     * This is needed for type hinting in the IDE
     *
     * @var FusionView
     */
    protected $view;

    /**
     * @Flow\Inject
     * @var UserService
     */
    protected $userService;

    /**
     * @Flow\Inject
     * @var Context
     */
    protected $securityContext;

    /**
     * @param FusionView $view
     *
     * @return void
     */
    protected function initializeView(ViewInterface $view): void
    {
        parent::initializeView($view);
        $view->setFusionPathPattern('resource://NEOSidekick.AiAssistant/Private/BackendModule');
    }

    /**
     * @return void
     */
    public function indexAction()
    {
        $user = $this->userService->getBackendUser();
        $this->view->assign('user', $user);
        $this->view->assign('interfaceLanguage', $this->userService->getInterfaceLanguage());
        $this->view->assign('csrfToken', $this->securityContext->getCsrfProtectionToken());
    }
}
