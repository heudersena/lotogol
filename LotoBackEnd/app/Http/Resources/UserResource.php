<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => (integer)$this->id,
            'email' => (string)$this->email,
        ];
    }
}
