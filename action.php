<?php

/**
 * DokuWiki Plugin personaltodo (Action Component)
 *
 * @author  Michael Große <mic.grosse6dokuwiki@googlemail.com>
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 */

use dokuwiki\plugin\personaltodo\includes\ProjectsSearch;
use dokuwiki\plugin\personaltodo\includes\TodoSearch;
use dokuwiki\plugin\struct\meta\Search;

class action_plugin_personaltodo extends DokuWiki_Action_Plugin
{
    /**
     * Registers a callback function for a given event
     *
     * @param Doku_Event_Handler $controller DokuWiki's event controller object
     *
     * @return void
     */
    public function register(Doku_Event_Handler $controller)
    {
        $controller->register_hook('AJAX_CALL_UNKNOWN', 'BEFORE', $this, 'handleAjaxCallUnknown');
    }

    /**
     * [Custom event handler which performs action]
     *
     * Called for event:
     *
     * @param Doku_Event $event  event object by reference
     * @param mixed      $param  [the parameters passed as fifth argument to register_hook() when this
     *                           handler was registered]
     *
     * @return void
     */
    public function handleAjaxCallUnknown(Doku_Event $event, $param)
    {
        // verify that this is our call
        if ($event->data !== 'plugin_personaltodo') {
            return;
        }
        global $conf;
        //no other ajax call handlers needed
        $event->stopPropagation();
        $event->preventDefault();

        $data = [];

        // collect projects and their namespaces
        $namespace = 'plugin:';
        $projectSearch = new ProjectsSearch();
        $data['projects'] = $projectSearch->getProjects($namespace);

        // collect tasks
        $todoSearch = new TodoSearch(new Search());
        $data['todos'] = $todoSearch->getTodos();

        //set content type
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        echo json_encode($data);
    }
}
