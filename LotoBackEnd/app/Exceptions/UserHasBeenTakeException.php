<?php

namespace App\Exceptions;

use Exception;

class UserHasBeenTakeException extends Exception
{
    protected $message = 'User has been taken';

    public function render()
    {
        return response()->json([
            'error' => class_basename($this),
            'message' => $this->message
        ], 400);
    }
}
