<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamStoreRequest;
use App\Http\Resources\TeamResource;
use App\Services\TeamService;

class TeamController extends Controller
{

    private $teamService;

    public function __construct(TeamService $teamService)
    {
        $this->teamService = $teamService;
    }

    public function store(TeamStoreRequest $request)
    {

        $input = $request->validated();

        $team = $this->teamService->store($input['team'], $input['photo']);

        return new  TeamResource($team);

    }

    public function index()
    {
        $team = $this->teamService->index();
        return response()->json($team, 200);
    }
}
