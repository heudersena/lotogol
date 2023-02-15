<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 14/02/2023
 * Time: 21:34
 */

namespace App\Services;


use App\Exceptions\TeamHasBeenTakeException;
use App\Models\Team;
use Illuminate\Support\Facades\DB;

class TeamService
{

    public function store(string $team, string $photo)
    {

        $team_exits = Team::where('team', $team)->exists();

        if (!empty($team_exits)) {
            throw new TeamHasBeenTakeException();
        }

        $team = Team::create([
            'team' => $team,
            'photo' => $photo
        ]);


        return $team;

    }

    public function index()
    {
        $teams = DB::table('teams')->get();
        return $teams;
    }

    public function edit()
    {

    }

    public function destroy()
    {

    }
}