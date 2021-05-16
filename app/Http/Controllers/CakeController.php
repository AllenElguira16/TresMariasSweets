<?php

namespace App\Http\Controllers;

use App\Models\Cake;
use Illuminate\Http\Request;

class CakeController extends Controller
{
    public function cakeList() {
        return [
            'success' => true,
            'cakes' => Cake::all()
        ];
    }

    public function addCake(Request $request) {

        if ($request->title === null || count_chars($request->title) < 2) {
            return [
                'success' => false,
                'message' => 'Title should be greater than 2'
            ];    
        }

        if ($request->init_price === null || $request->init_price <= 0) {
            return [
                'success' => false,
                'message' => 'Initial Price should be greater than 0'
            ];    
        }

        if ($request->picture === null) {
            return [
                'success' => false,
                'message' => 'Picture is required'
            ];    
        }

        Cake::insert([
            'title' => $request->title,
            'init_price' => $request->init_price,
            'picture' => $request->picture
        ]);
        
        return [
            'success' => true,
            'message' => 'Putang Ina Niyong Lahat',
            'data' => [
                'title' => $request->title,
                'init_price' => $request->init_price,
                'picture' => $request->picture,
            ]
        ];
    }
}
