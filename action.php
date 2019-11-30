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
        global $conf;
        //no other ajax call handlers needed
        $event->stopPropagation();
        $event->preventDefault();
        // verify that this is our call
        // collect projects and their namespaces
        // collect tasks
        $namespace = 'plugin:';
        $pages = [];
        $dirname = dirname(wikiFN($namespace . 'foo'));
        search($pages, $dirname, 'search_allpages', [ 'depth' => 1]);
        $ids = array_map(function($pageResult ) use ($namespace) { return $namespace . $pageResult['id']; }, $pages);
        $projects = [];
        foreach ($ids as $id) {
            $projects[$id] = [
                'projectId' => $id,
                'title' => p_get_first_heading(
                    $id
                )
            ];
        }

        $data = json_decode('{"todos":{"asd":{"todoId":"asd","title":"a hardcoded todo","projectIds":[],"completedDate":null}}}', true);
        $data['projects'] = $projects;
        //set content type
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        echo json_encode($data);
    }
}
