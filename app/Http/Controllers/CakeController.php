<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CakeController extends Controller
{
    public function cakeList() {
        $cakes = [];

        for ($i = 0; $i < 10; $i++) {
            array_push($cakes, [
                'title' => 'Cake '.($i + 1),
                'filename' => ($i + 1).'.jpeg',
                'init_price' => 300
            ]);
        }

        for ($i = 0; $i < 10; $i++) {
            array_push($cakes, [
                'title' => 'Cake '.($i + 1),
                'filename' => ($i + 1).'.jpeg',
                'init_price' => 300
            ]);
        }

        return response()->json($cakes);
    }
}
