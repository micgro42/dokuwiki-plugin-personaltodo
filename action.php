<?php
/**
 * DokuWiki Plugin personaltodo (Action Component)
 *
 * @license GPL 2 http://www.gnu.org/licenses/gpl-2.0.html
 * @author  Michael Große <mic.grosse6dokuwiki@googlemail.com>
 */

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
        if ($event->data !== 'plugin_personaltodo') {
            return;
        }
        //no other ajax call handlers needed
        $event->stopPropagation();
        $event->preventDefault();
        // verify that this is our call
        // collect projects and their namespaces
        // collect tasks

        $data = json_decode('{"todos":{"asd":{"id":"asd","title":"a hardcoded todo","projectsIds":[],"completedDate":null}},"projects":{"qwe":{"id":"qwe","title":"hardcoded Testproject"}}}');
        //set content type
        header('Content-Type: application/json');
        echo json_encode($data);
    }
}
