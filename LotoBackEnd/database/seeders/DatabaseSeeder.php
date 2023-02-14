<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1000)->create();

        \App\Models\User::factory()->create([
            'name' => 'Heuder Rodrigues de Sena',
            'email' => 'hsena@gmail.com',
        ]);
    }
}
