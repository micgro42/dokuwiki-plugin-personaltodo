<?php

namespace dokuwiki\plugin\personaltodo\includes;

use dokuwiki\plugin\struct\meta\Search;

class TodoSearch
{
    private $structSearch;

    public function __construct(Search $structSearch)
    {
        $this->structSearch = $structSearch;
    }

    final public function getTodos(): array
    {
        $apiColIds = [
            'todoId',
            'title',
            'projectIds',
            'dueDate',
            'completedDate',
        ];

        $this->structSearch->addSchema('personaltodo');
        $this->structSearch->addColumn('%rowid%');
        $this->structSearch->addColumn('*');
        $tasks = $this->structSearch->execute();
        $tasks = array_map(
            function ($task) use ($apiColIds) {
                return array_combine(
                    $apiColIds,
                    array_map(
                        function ($value) {
                            return $value->getRawValue();
                        },
                        $task
                    )
                );
            },
            $tasks
        );
        return array_column($tasks, null, 'todoId');
    }
}
