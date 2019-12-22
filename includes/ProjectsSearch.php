<?php


namespace dokuwiki\plugin\personaltodo\includes;


class ProjectsSearch
{
    // fixme: make namespace array of strings
    public function getProjects($namespace): array {
        $pages = [];
        $dirname = dirname(wikiFN($namespace . 'foo'));
        search($pages, $dirname, 'search_allpages', ['depth' => 1]);
        $ids = array_map(
            function ($pageResult) use ($namespace) {
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
