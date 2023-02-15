<?php

namespace App\Services;

use App\Exceptions\LoginInvalidException;
use App\Exceptions\UserHasBeenTakeException;
use App\Models\User;

class AuthService
{
    public function login(string $email, string $password)
    {
        $login = [
            'email' => $email,
            'password' => $password
        ];

        if (!$token = auth()->attempt($login)) {
            throw new LoginInvalidException();
        }

        return [
            'access_token' => $token,
            'token_type' => 'Bearer'
        ];

    }

    public function register(string $name, string $email, string $password)
    {

        $user_email = User::where('email', $email)->exists();

        if (!empty($user_email)) {
            throw new UserHasBeenTakeException();
        }

        $userPassword = bcrypt($password);

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => $userPassword
        ]);

        return $user;

    }
}
