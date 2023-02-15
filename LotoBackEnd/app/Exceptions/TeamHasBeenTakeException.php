<?php

namespace App\Exceptions;

use Exception;

class TeamHasBeenTakeException extends Exception
{
    protected $message = 'team already exists';

    public function render()
    {
        return response()->json([
            'error' => class_basename($this),
            'message' => $this->message
        ], 400);
    }
}
