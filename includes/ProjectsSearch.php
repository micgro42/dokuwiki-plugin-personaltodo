<?php

namespace dokuwiki\plugin\personaltodo\includes;

// fixme add repo interface
class ProjectsSearch
{
    // future: make namespace array of strings
    final public function getProjects(string $namespace): array
    {
        // fixme: make sure namespace ends in :
        $pages = [];
        $dirname = dirname(wikiFN($namespace . 'foo'));
        // fixme: add functionality to find also startpages
        search($pages, $dirname, 'search_allpages', ['depth' => 1]);
        $ids = array_map(
            function (array $pageResult) use ($namespace) {
                return $namespace . $pageResult['id'];
            },
            $pages
        );
        $projects = [];
        foreach ($ids as $id) {
            $projects[$id] = [
                'projectId' => $id,
                'title' => p_get_first_heading(
                    $id
                ),
            ];
        }
        return $projects;
    }
}
